import Robot from '../models/robot.model';
import { Err } from '../utils/error.util';

export const create = async (req, res) => {
    const { name, type } = req.body;
    console.log(name)
    //postoji name? salji 400
    if (!name) {
        console.log('no name')
        throw new Err(400);
    }
    const newRobot = new Robot({ name, type });
    await newRobot.save();

    res.sendStatus(204);
}

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();

    res.json(allRobots);
}

export const getRobot = async (req, res) => {
    console.log('p', req.params)
    const {id} = req.params;
    const robot = await Robot.findOne({_id: id});
    console.log({robot});
    robot ? res.json(robot) : res.sendStatus(404);
}

export const updateRobot = async (req, res, next) => {
    const b = req.body
    console.log(b.name, b.type)
    const id = req.params.id
    console.log(id)
    const robot = await Robot.findOne({_id: id});
    console.log(robot)
    robot.name = b.name;
    robot.type = b.type;
    console.log(robot)
    await robot.save()
    res.json(robot)

}



