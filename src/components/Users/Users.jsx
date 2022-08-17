import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    console.log(props.users)
    if (!props.users.length) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://mp3erger.com/_ld/47/46695339.jpg',
                    followed: false,
                    fullName: 'Lyov',
                    status: 'I am a boss',
                    location: {city: 'Yerevan', country: 'Armenia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://mp3erger.com/_ld/47/46695339.jpg',
                    followed: true,
                    fullName: 'Vlad',
                    status: 'I am a niger',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://mp3erger.com/_ld/47/46695339.jpg',
                    followed: false,
                    fullName: 'Arsen',
                    status: 'I am a niger',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map((u, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <div>
                                    <img src={u.photoUrl} alt="user" className={styles.usersPhoto}/>
                                </div>
                                <div>
                                <div>
                                    {
                                        u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;