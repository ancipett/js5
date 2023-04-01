import { memo, useEffect, useState } from "react";
import axios from "axios";
import { error } from 'react'

import Button from "../../components/Button";
import Input from "../../components/Input"
import styles from './Create.module.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [currentRobot, setCurrentRobot] = useState(0);
    const [name, setName] = useState('');
    const [hasErr, setHasErr] = useState(false)

    const params = useParams()
    const navigate = useNavigate();
    const {id} = useParams();

    const robots = [
        '/robot-1.svg',
        '/robot-2.svg',
        '/robot-3.svg',
        '/robot-4.svg',
        '/robot-5.svg',
        '/robot-6.svg',
        '/robot-7.svg',
        '/robot-8.svg',
        '/robot-9.svg',
        '/robot-10.svg'
    ];

    

    useEffect(() => {
        if (id) {
            const getRobot = async () => {try {
                const curRobot = await axios.get("/api/robot/"+id, {name, type:currentRobot})
                setCurrentRobot(curRobot.data.type)
                setName(curRobot.data.name)
            } catch {
                setHasErr(true)
            }}      
            getRobot();
        }
    }, [])


    const onSubmit = async () => {
        if(id) {
        try {
            await axios.put(`/api/robot/update/${id}`, {name:name, type:parseInt(currentRobot)}, {headers: {'Content-Type': 'application/json'}})  
            navigate("/")
        } catch {
            console.error(error.response.data);
        }
        } else {
        console.log(name, currentRobot)
        try {
            await axios.post("/api/robot/create", {name, type:currentRobot})    
            navigate("/")
        } catch {
            setHasErr(true)
        }
     }
    }

    console.log('name1', name)
    return (
        <form className={styles.form}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[currentRobot]} alt="robot" />
            </div>
            <div className={styles.buttonContainer}>
                {
                    robots.map((url, index) => {
                        return <Button key={url} label={index + 1} onClick={() => setCurrentRobot(index)} />
                    })
                }
            </div>
            
            <Input name={name} hasErr={hasErr} onChange={setName}></Input>
            <Button label="Submit" onClick={onSubmit}></Button>
        </form>
    );
}

export default memo(Create);

