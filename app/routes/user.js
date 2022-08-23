//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import {fetchAllUsers,renderSignUpPage, doSignUp} from '../controllers/userController.js';

router.get('/users', fetchAllUsers);

router.get('/signup', renderSignUpPage);
router.post('/signup', doSignUp);

//~ Export router
export { router };