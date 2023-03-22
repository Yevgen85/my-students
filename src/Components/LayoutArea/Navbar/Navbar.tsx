import './Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
import { authorisationStore } from '../../../Redux/AuthorisationState';
import { useEffect, useState } from 'react';
import loginService from '../../../Services/LoginService';
import UserModel from '../../../Models/UserModel';



function Navbar(): JSX.Element {

    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        setUser(authorisationStore.getState().user!);
        const unsubscribe = authorisationStore.subscribe(() => {
            setUser(authorisationStore.getState().user!);
        });
        return () => unsubscribe();
    },[]);


function login(): void {
        navigate('/login');
}

function logOut(): void {
    loginService.logOut();
    navigate('/');
}
    
    

    return (
        <div className='Navbar'>
            <div className='left'>
            {/* <div className="dropdown">
<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Dropdown
</button>
<ul className="dropdown-menu">
  <li><button className="dropdown-item" type="button">Dropdown item</button></li>
  <li><button className="dropdown-item" type="button">Dropdown item</button></li>
  <li><button className="dropdown-item" type="button">Dropdown item</button></li>
</ul>
</div> */}
              {authorisationStore.getState().user !== null ? <div className='myButtons'>
            <span> | </span>
            <NavLink to="students/">STUDENTS</NavLink>    
                <span> | </span>
                <NavLink to="courses/">COURSES</NavLink>
                <span> | </span>
                <NavLink to="grades/">GRADES</NavLink>
                <span> | </span>
            </div> : ""
            }
        </div>
                {/* <NavLink to={'/students'}>Students</NavLink>
                <NavLink to={'/courses'}>Courses</NavLink>
                <NavLink to={'/grades'}>Grades</NavLink> */}
            <div className='center'>Student-Manager</div>


            <div className='right'>
            {authorisationStore.getState().user === null ? <button onClick={login}>Login</button> : <button onClick={logOut}>LogOut</button>}
                <img className='rotate' src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
            </div>
        </div>
    );
}

export default Navbar;