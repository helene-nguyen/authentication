//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import {fetchAllUsers, fetchOneUser, renderSignUpPage,renderSignInPage, doSignUp, doSignIn, doSignOut, renderDashboard} from '../controllers/userController.js';

router.get('/users', fetchAllUsers);
router.get('/users/:userId', fetchOneUser);

router.get('/signup', renderSignUpPage);
router.post('/signup', doSignUp);

router.get('/signin', renderSignInPage);
router.post('/signin', doSignIn);

router.get('signout', doSignOut);

router.get('/dashboard', renderDashboard);

//~ Export router
export { router };