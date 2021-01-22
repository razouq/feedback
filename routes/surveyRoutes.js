const mongoose = require('mongoose');
const requireLogin = require('../middleWares/requireLogin');
const requireCredits = require('../middleWares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const crypto = require('crypto');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res, next) => {
    const {title, subject, body, recipients} = req.body;

    console.log(req.body);

    const recipientsArr = recipients.split(',').map(email => {
      const token = crypto.randomBytes(16).toString('hex');
      return ({email: email.trim(), token})
    });

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipientsArr,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    mailer = new Mailer(survey, surveyTemplate(survey));

    /**
     * TODO
     * generate a code and add it to the url of the user in the template
     * use promise.all
     */
    recipientsArr.forEach(({email, token}) => {
      const mailer = new Mailer({subject, recipient: email, token}, surveyTemplate(survey, token));
      mailer.send();
    });

    try {
      await survey.save();
      const {user} = req;
      user.credits -= 1;
      const result = await user.save({new: true});
      return res.json(result);
    } catch(e) {
      return res.status(400).json(e);
    }
  });

  app.get('/api/surveys/token/:token/choice/:choice', async (req, res) => {
    const {surveyId, token, choice} = req.params;

    // choice = 'yes' or 'no'

    const {nModified} = await Survey.updateOne({
      recipients: {
        $elemMatch: {
          token,
          responded: false,
        }
      }
    }, {
      $inc: {[choice]: 1},
      $set: {'recipients.$.responded': true}
    })

    if(!nModified) {
      return res.send('you already gave your feedback!');
    }

    return res.send('thank you for giving us your feedback!');
  })
}