import { NavLink } from 'react-router-dom';
import './StudentCard.css';
import StudentModel from '../../Models/StudentModel';



function StudentCard(studentProps: StudentModel): JSX.Element {

    return (
        // <NavLink to={'/student-details/' + studentProps.id}>
            <div className="StudentCard">
                <div key={studentProps.id} className='card'>
                    {/* <img src={appConfig.apiImages + "/" + productProps.imageName} alt="" /> */}
                    <div className='details'>
                        <p>{studentProps.firstName}</p>
                        <p>{studentProps.lastName}</p>
                        <p>{'Age: ' + studentProps.age + ' years'}</p>
                    </div>
                </div>
            </div>
        // </NavLink>
    );
}

export default StudentCard