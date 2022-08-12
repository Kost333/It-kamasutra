import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you ??', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "bla bla", likesCount: 33},
                {id: 4, message: "da da", likesCount: 3},
            ],
            newPostText: "It-kamasutra.com"
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;