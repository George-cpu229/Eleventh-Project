import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../Utils/Validation/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import {login, logout} from '../../Redux/auth-reducer';
import { Redirect } from 'react-router';
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            
             {createField("Email", "email", [required], Input)}
           
            {createField("Password", "password", [required], Input, {type: "password"})}
           
             {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me" )}   

           { error && <div className={style.formSummaryError}>
           {error}
            </div>
            }
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.fememberMe)
    }


    if( props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login, logout})(Login);