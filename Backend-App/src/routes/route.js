import express from 'express';
import { AddUsers , upDateUser} from '../controllers/user.js'

const route = express.Router();

route.post('/users' , AddUsers);
route.get('/users/:id' , upDateUser);

export default route