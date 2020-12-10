const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // ?code=... is added to the URI, So google strategy will handle the requeste differently
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });
}
