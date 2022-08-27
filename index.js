//~ Import Dotenv
import 'dotenv/config';

//~ Import Express
import express from 'express';
const app = express();

//~ Import Module
import { router } from './app/routes/index.js';
import { ErrorApi } from './app/services/errorHandler.js';

//~Security
import helmet from 'helmet';
app.use(helmet());

//~ Body parser
import multer from 'multer';
const bodyParser = multer();
app.use(bodyParser.none());
//none for waiting no files but only classical forms

//~statics
app.use('/', express.static('./public'));

//~ Encoding
//accept Content-type: application/json
app.use(express.json());
//accept Content-type: application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: false
  })
);

//~ Import Debug
import debug from 'debug';
const logger = debug('EntryPoint');

//If you have your node.js behind a proxy and are using secure: true, you need to set 'trust proxy' in express
app.set('trust proxy', 1); // trust first proxy if deploy Heroku

//~ Session
import session from 'express-session';
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    proxy: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
    //   httpOnly: true,
      secure: false, //to use session here, need to desactivate secure
      sameSite: 'lax', // or 'strict'
      maxAge: 24 * 60 * 60 * 1000 //24 hours
      //expires : new Date(Date.now() + 60 * 60 * 1000) //1 hour
    }
  })
);

//~ Motor
app.set('view engine', 'ejs');
app.set('views', './app/views');

//~ Router
app.use(router);

//~ Error 404
app.use((req, res) => {
    throw new ErrorApi
        ('Error 404 Page Not Found', 'errors/404', { title: 'ERROR 404' }, req, res, 404);
});

//~ Launch Server
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
});
