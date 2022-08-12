import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map((p,i) => <Post key={i} messages={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={(e) => props.updateNewPostText(e.target.value)}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;