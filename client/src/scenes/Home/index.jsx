import { memo, useEffect, useState } from "react";
import Robot from "../../components/Robot";
import axios from "axios";

const Home = () => {
    const [robots, setRobots] = useState([]);

   

    useEffect(() => {
        
        console.log('get')
        const getRobots = async () => {try {
            const robots1 = await axios.get("/api/robot/")    
            console.log(robots1)
            console.log('data', robots1.data)
            setRobots(robots1.data)
        } catch {
            console.error()
        }}      
        getRobots();  
    }, [])


    if (!robots) {
        return (<div>Loading...</div>);
    }

    return (
        <div>
            {robots.map((robot) => <Robot to={robot._id} name={`${robot._id}: ${robot.name}`} type={robot.type} key={robot._id} />)}
        </div>
    );
}

export default memo(Home);