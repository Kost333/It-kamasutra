import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDaeG8Wbmyxj7tST-TZr6FTNWaJf0VpwC5Q&usqp=CAU"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <h2>{props.profile.aboutMe}</h2>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;