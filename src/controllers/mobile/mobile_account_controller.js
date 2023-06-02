const passport = require("../../config/google_auth");

const getGoogleAccount = passport.authenticate("google", {
  scope: ["email", "profile"],
});

const postGoogleAccount = passport.authenticate(
  "google",
  function (err, user, info) {
    if (!user) {
      console.log("geldimfalse");
      var status = false;
      var truemesaj = "";

      var falseUser = {
        _id: "",
        name: "",
        surname: "",
        email: "",
        emailIsActive: false,
        password: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      };

      return res.json({
        durum: status,
        user: falseUser,
        mesaj: info.message,
      });
    }

    req.logIn(user, function (err) {
 
      if (err) {

      } else {
        console.log("geldimtrue");
        var status = true;
        var truemesaj = " ";
   
        return res.json({
          durum: status,
          user: req.user,
          mesaj: truemesaj,
        });
      }
    });
  }
);

module.exports = {
  getGoogleAccount,
  postGoogleAccount,
};
