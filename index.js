const keys = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

app.get('/ping', (req, res) => {
  res.json(process.env.PONG_ANSWER);
});

if(process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like main.js and main.css
  app.use(express.static('client/build'));

  // Express will serve up the index.html if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
