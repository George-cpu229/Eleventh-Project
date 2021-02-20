import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Boom, I am here!',
                    likesCount: 15
                },
                {
                    id: 2,
                    message: "Hello everyone, let's chat.",
                    likesCount: 20
                }
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [{
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How is your IT experience?'
                },
                {
                    id: 3,
                    message: 'Hello everyone!'
                },
                {
                    id: 4,
                    message: 'Hello everyone!'
                },
                {
                    id: 5,
                    message: 'Hello everyone!'
                }
            ],
            dialogs: [{
                    id: 1,
                    name: 'George'
                },
                {
                    id: 2,
                    name: 'Kamila'
                },
                {
                    id: 3,
                    name: 'Anya'
                },
                {
                    id: 4,
                    name: 'John'
                },
                {
                    id: 5,
                    name: 'Inna'
                },
            ],
            newMessageBody: ''
        },
        sidebarPage: {}
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
        this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;