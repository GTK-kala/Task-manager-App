import express from 'express';
import { AddUsers } from '../controllers/user.js'

const route = express.Router();

route.post('/users' , AddUsers);

export default route