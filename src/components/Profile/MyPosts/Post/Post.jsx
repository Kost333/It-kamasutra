import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://api.ndla.no/image-api/raw/Avatar.jpg?width=1024" alt='logo'/>
            {props.messages}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;