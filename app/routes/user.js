//~ Import Router 
import { Router } from 'express';
const router = Router();

//~ Import modules
import {fetchAllUsers} from '../controllers/userController.js';

router.get('/users', fetchAllUsers);

//~ Export router
export { router };