import React from 'react';
import InputStyle from "../styles/Input.module.css";


const InputImage = ({ setSearchInput, buttonDetect }) => {

    return (
        <div className={InputStyle.container}>
            <input
                placeholder="Enter image Link"
                className={InputStyle.input}
                onChange={e => setSearchInput(e.target.value)} />
            <button className={InputStyle.detect} onClick={() => buttonDetect()}>Detect</button>

        </div>
    )
};

export default InputImage;