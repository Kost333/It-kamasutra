import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map((m,i) => <Message key={i} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={(e)=>props.updateNewMessageBody(e.target.value)}
                                   placeholder='Enter your message'
                    ></textarea></div>
                    <div>
                        <button onClick={props.sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;