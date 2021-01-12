module.exports = ({body}) => {
  return `
    <html>
      <body>
        <h1>Survey</h1>
        <p>${body}</p>
      </body>
    </html>
  `;
}