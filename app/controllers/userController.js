//~ Import Debug 
import debug from 'debug'; 
const logger = debug('');
//~ Import modules
import { User } from '../datamappers/index.js';
import { ObjectId } from 'mongodb';

async function fetchAllUsers(req,res) {
    try {
        const users = await User.findAll();

        res.json(users);
    } catch (err) {
        logger(err.message);
    }
};

async function fetchOneUser(req,res) {
    try {
        const userId = req.params.userId;

        const user = await User.findOne(userId);

        res.json(user);
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
        let body = req.body;
      
        // await User.create(body);

        res.redirect('/signin');
    } catch (err) {
        logger(err.message);
    }
};

async function renderSignInPage(req,res) {
    try {
        res.render('signin', {title: 'Connexion'});
    } catch (err) {
        logger(err.message);
    }
};

async function doSignIn(req,res) {
    try {
        console.log(req.body.email);
    
        res.redirect('/dashboard');
    } catch (err) {
        logger(err.message);
    }
};

async function renderDashboard(req,res) {
    try {
    
        res.render('dashboard', {title: 'Dashboard'});
    } catch (err) {
        logger(err.message);
    }
};

export { fetchAllUsers, fetchOneUser, renderSignUpPage, renderSignInPage,doSignUp, doSignIn, renderDashboard};

