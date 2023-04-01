import { memo, useState } from "react"

import styles from './Input.module.css';

const Input = (props) => {
    const { hasErr, onChange, name } = props;
    const [value, setValue] = useState('');
   

    return (
        <input
            className={hasErr ? styles.errors+" "+styles.input : styles.input}
            value={name}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            
        />
    )
}

export default memo(Input)