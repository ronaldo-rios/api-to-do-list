import { Router } from 'express';

import * as toDoController from '../controllers/toDoController';

const router = Router();

router.get('/todo', toDoController.all);
router.post('/todo', toDoController.create);
router.put('/todo/:id' , toDoController.update);
router.delete('/todo/:id', toDoController.destroy);

export default router;