import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store;