import { NavLink } from 'react-router-dom';
import './CourseCard.css';
import CourseModel from '../../Models/CourseModel';



function CourseCard(courseProps: CourseModel): JSX.Element {

    return (
        // <NavLink to={'/student-details/' + studentProps.id}>
            <div className="CourseCard">
                <div key={courseProps.id} className='card'>
                    {/* <img src={appConfig.apiImages + "/" + productProps.imageName} alt="" /> */}
                    <div className='details'>
                        <p>Course Name</p>
                        <p>{courseProps.name}</p>
                    </div>
                </div>
            </div>
        // </NavLink>
    );
}

export default CourseCard