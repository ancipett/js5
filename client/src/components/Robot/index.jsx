import { memo } from "react";
import { Link } from "react-router-dom";

import styles from './Robot.module.css';

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

const Robot = (props) => {
    const { type = 0, name, to } = props;
    
    return (
       <Link to={"update/"+to} style={{ textDecoration: 'none', margin:"20px"}}>
        <div className={styles.tile}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[type]} alt="robot" />
            </div>
            <div className={styles.name}>{name}</div>
        </div>
        </Link>
    );
}

export default memo(Robot);
