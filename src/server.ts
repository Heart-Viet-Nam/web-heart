import express from 'express';
import path from 'path';
import morgan from 'morgan';
import compression from 'compression';
import session from 'express-session';
import expressLayouts from 'express-ejs-layouts';
import flash from 'connect-flash';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import passport from 'passport';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

import { sessionStore } from './config/sessionStore';
import route from './routes';
import { connectDB } from './config/mongodb';
import { googlePassport } from './config/passport/google';
import { facebookPassport } from './config/passport/facebook';

const app = express();
const port = process.env.PORT || 8080;

// Logger
app.use(morgan('dev'));

// Secure
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'frame-src': ["'self'", 'https://www.youtube.com', 'https://youtube.com']
    }
  })
);

// Session
app.use(
  session({
    name: 'access-token',
    secret: process.env.SECRET_KEY || uuidv4(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 60000 * 60 //? Session expire in 1 hours
    },
    store: sessionStore
  })
);

// Passport Middleware
facebookPassport(passport);
googlePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(flash());

// Gzip
app.use(
  compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      } else {
        return compression.filter(req, res);
      }
    }
  })
);

// Public
const libraryPath = '../assets/lib';
app.use('/js', [
  express.static(path.join(__dirname, `${libraryPath}/jquery-validation`)),
  express.static(path.join(__dirname, `${libraryPath}/jquery-easing`)),
  express.static(path.join(__dirname, `${libraryPath}/jquery`)),
  express.static(path.join(__dirname, `${libraryPath}/bootstrap/js`)),
  express.static(path.join(__dirname, `${libraryPath}/lazysizes`))
]);
app.use('/css', [express.static(path.join(__dirname, `${libraryPath}/bootstrap/css`)), express.static(path.join(__dirname, `${libraryPath}/simple-line-icons`))]);
app.use('/css/fonts/@fortawesome', express.static(path.join(__dirname, `${libraryPath}/font-awesome/webfonts`)));

app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/img/favicon.png')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Route Init
route(app);

// Connect db
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
