const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Artak'},
        {id: 2, name: 'Mko'},
        {id: 3, name: 'Armen'},
        {id: 4, name: 'Davo'},
        {id: 5, name: 'Vahag'},
        {id: 6, name: 'Sveta'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you It-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: Math.random(), message: state.newMessageBody}]}
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({type: SEND_MESSAGE});

export let updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;