import { Strategy } from "passport-google-oauth20";
import mongoose from "mongoose";
import { PassportStatic } from "passport";

const GoogleStrategy = Strategy;

export const googlePassport = (passport: PassportStatic) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {}
    )
  );
};
