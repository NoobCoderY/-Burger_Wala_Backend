import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { User } from "../models/User.js";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: "486438210773-v4trafnbh7arj2tgbbbs2huvg3eh1fna.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/login",
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({
          googleId: profile.id,
        });

        if (!user) {
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
          });

          return done(null, newUser);
        } else {
          return done(null, user);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};