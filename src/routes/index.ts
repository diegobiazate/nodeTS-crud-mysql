import { Router } from "express";
import * as HomeController from '../controllers/homeController';
import * as ClientController from '../controllers/clientController';


const router = Router();

router.get('/', HomeController.home);


export default router;