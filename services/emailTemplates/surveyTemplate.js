module.exports = ({title, subject, body}) => {
  return `
    <html>
      <body>
        <h1>${title}</h1>
        <h4>${subject}<h4>
        <p>${body}</p>
        <p>
          <a href="https://www.google.com/search?q=yes">yes<a>
          <a href="https://www.google.com/search?q=no">no<a>
        <p/>
      </body>
    </html>
  `;
}