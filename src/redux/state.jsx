let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you ??', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "bla bla", likesCount: 33},
                {id: 4, message: "da da", likesCount: 3},
            ],
            newPostText: 'It-kamasutra.com'
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this.state;
    },
    _callSubscriber () {
        console.log('state changed')
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

}

export default store;
window.store = store;