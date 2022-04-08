import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "./../models";

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return done(null, false);
    const salt = await user.hash(password, user.salt);
    if (salt !== user.password) return done(null, false);
    done(null, user);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});
