import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { maxLendthCreator, required } from '../../Utils/Validation/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
let state = props.dialogsPage;

        let dialogElements = state.dialogs.map( d => ( <DialogItem name={d.name} key={d.id} id={d.id}/>));
        let messagesElements = state.messages.map( m=> (<Message message={m.message} key={m.id} />));
        let newMessageBody = state.newMessageBody;



let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
}


    return (
    <div className={s.dialogs}> 
       <div className={s.dialogsItems}>
           { dialogElements }
       </div> 
    <div className={s.messages}>
        <div>{messagesElements}</div>
           
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
    );
}

const maxLength50 = maxLendthCreator(100);

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
            <div>
         <Field  placeholder='Enter your message' component={Textarea}  name="newMessageBody" validate={[required, maxLength50]} />
                </div>
            <div>
                <button>Send</button>
                </div>
         </form>
         )
         }

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;