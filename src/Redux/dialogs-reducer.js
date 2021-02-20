const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                    messages: [...state.messages, {
                        id: 6,
                        message: body
                    }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })

export default dialogsReducer;