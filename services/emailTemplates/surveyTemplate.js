module.exports = ({title, subject, body}, token) => {
  return `
    <html>
      <body>
        <h1>${title}</h1>
        <h4>${subject}<h4>
        <p>${body}</p>
        <p>
          <a href="http://localhost:5000/api/surveys/token/${token}/choice/yes">Yes<a>
          <a href="http://localhost:5000/api/surveys/token/${token}/choice/no">No<a>
        <p/>
      </body>
    </html>
  `;
}