import User from '../models/robot.model';
import { Err } from '../utils/error.util';

export const create = async (req, res) => {
    const { username } = req.body;
    console.log(username)
    //postoji username? salji 400
    if (!username) {
        console.log('no username')
        throw new Err(400);
    }
    const newUser = new User({ username, robots:1, cloud:0, rainbow:0  });
    await newUser.save();

    res.json(newUser);
}


export const getUsernames = async (req, res) => {
    const allUsernames = await User.find();
    res.json(allUsernames)
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
    console.log(b.username, b.type)
    const id = req.params.id
    console.log(id)
    const robot = await Robot.findOne({_id: id});
    console.log(robot)
    robot.username = b.username;
    robot.type = b.type;
    console.log(robot)
    await robot.save()
    res.json(robot)

}



