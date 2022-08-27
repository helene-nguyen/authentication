//~ Import Router
import { Router } from 'express';
const router = Router();

//~ Import modules
import { fetchAllUsers, fetchOneUser, renderSignUpPage, renderSignInPage, doSignUp, doSignIn, doSignOut, renderDashboard } from '../controllers/userController.js';

import { refreshToken } from '../services/jsonWebToken.js';

//~ Import schema
import { validation } from '../services/validation.js';
import { userSignUpSchema } from '../schema/user.schema.js';
//~ Authorization
import { validateToken } from '../middlewares/validateToken.js';
import { auth, admin } from '../middlewares/auth.js';


//*ROUTES
router.get('/users', fetchAllUsers);
router.get('/users/:userId', fetchOneUser);

router.get('/signup', renderSignUpPage);
router.post('/signup', doSignUp);

router.get('/signin', renderSignInPage);
router.post('/signin', doSignIn);

router.get('/signout', doSignOut);

router.get('/dashboard', renderDashboard);

router.post('/refreshtoken', refreshToken);

//~ Export router
export { router };
