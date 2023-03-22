import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Route, useNavigate } from 'react-router-dom';
import UserModel from '../../Models/UserModel';
import LoginModel from '../../Models/UserModel';
import { authorisationStore } from '../../Redux/AuthorisationState';
import loginService from '../../Services/LoginService';
import Courses from '../Courses/Courses';
import Students from '../Students/Students';
import Welcome from '../Welcome/Welcome';
import Routing from '../LayoutArea/Routing/Routing';
import './Login.css';

function Login(): JSX.Element {
   

    
    const {register, handleSubmit} = useForm<UserModel>({});
    const navigate = useNavigate();
  

    function login(userModel: UserModel): void {
        console.log(userModel);
        loginService.login(userModel).then(response => {
            console.log(authorisationStore.getState().user)
            navigate('/students');
        }).catch(error => {
            console.log(error);
        })
    }
      
            return (
        
                <div className='Login'>
                
                <h1>Welcome to my site!</h1>
                <h2>Please login:</h2>
                <form onSubmit={handleSubmit(login)}>
                    Login: 
                        <br />
                        <input type="text" placeholder='Login' {...register('login')}/>
                        <br />
                    Password: 
                        <br />
                        <input type="password" autoComplete="on" placeholder='**********' {...register('password')}/>
                        <br />
                        <div className='submitButtonDiv'>
                        <button className='submitButton' type='submit'>LOGIN</button>
                        </div>
                </form>
            
           
            </div>
        
   
        );
    
}

export default Login;

