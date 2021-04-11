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
    ]
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                    messages: [...state.messages, {
                        id: 6,
                        message: body
                    }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageBody
})

export default dialogsReducer;