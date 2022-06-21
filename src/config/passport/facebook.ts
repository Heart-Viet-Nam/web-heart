import { Strategy } from 'passport-facebook';
import { PassportStatic } from 'passport';
import mongoose from 'mongoose';

const FacebookStrategy = Strategy;
export const facebookPassport = (passport: PassportStatic) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.APP_ID!,
        clientSecret: process.env.APP_SECRET!,
        callbackURL: '/auth/facebook/callback'
      },
      async (accessToken, refreshToken, profile) => {
        console.log(profile);
      }
    )
  );
};
