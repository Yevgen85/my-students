
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import UserModel from '../../Models/UserModel';
import LoginModel from '../../Models/UserModel';
import loginService from '../../Services/LoginService';
import Routing from '../LayoutArea/Routing/Routing';
import './Welcome.css';


function Welcome(): JSX.Element {

    

    const {register, handleSubmit} = useForm<UserModel>({});
    const [isLogged, setIsLogged] = useState<boolean>(false);

    function login(userModel: UserModel): void {
        console.log(userModel)
        loginService.login(userModel).then(response => {
            if(response !== null) {
                setIsLogged(current => !current);
            }
            // setIsLogged(response);
            console.log(response);
            
        }).catch(error => {
            console.log(error);
        })
    }
      
            return (
        
       
                <div className='Welcome'>
                
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

export default Welcome;

