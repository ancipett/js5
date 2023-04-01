import express from 'express';
import { asyncHandler } from '../utils/async.util';

const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';

router.put('/update/:id', asyncHandler(RobotCtrl.updateRobot));

router.get('/', RobotCtrl.getAllRobots);

router.post('/create', asyncHandler(RobotCtrl.create));

router.get('/:id', asyncHandler(RobotCtrl.getRobot));



export default router;



