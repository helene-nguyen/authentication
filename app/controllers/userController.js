//~ Import Debug 
import debug from 'debug'; 
const logger = debug('');
//~ Import modules
import { User } from '../datamappers/index.js';

async function fetchAllUsers(req,res) {
    try {
        res.json({ message: 'ALL USERS' });
    } catch (err) {
        logger(err.message);
    }
};

async function renderSignUpPage(req,res) {
    try {
        res.render('signup', {title: 'Create an account'});
    } catch (err) {
        logger(err.message);
    }
};

async function doSignUp(req,res) {
    try {
        console.log(req.body);
    
        res.redirect('/signin');
    } catch (err) {
        logger(err.message);
    }
};

export { fetchAllUsers, renderSignUpPage, doSignUp };

