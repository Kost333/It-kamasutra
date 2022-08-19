import React from 'react';
import preloader from './../../../assets/image/preloader.gif';

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;