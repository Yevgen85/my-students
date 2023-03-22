import { NavLink } from 'react-router-dom';
import GradeModel from '../../Models/GradeModel';
import './GradeCard.css';




function GradeCard(gradeProps: GradeModel): JSX.Element {

    return (
        // <NavLink to={'/student-details/' + studentProps.id}>
            <div className="GradeCard">
                <div key={gradeProps.id} className='card'>
                    {/* <img src={appConfig.apiImages + "/" + productProps.imageName} alt="" /> */}
                    <div className='details'>
                        <h6>Course Name:</h6>
                        <h6>{gradeProps.course.name}</h6>
                        <h6>--------------------------</h6>
                        <h6>Student:</h6>
                        <h6>{gradeProps.student.firstName} {gradeProps.student.lastName}</h6>
                        <h6>--------------------------</h6>
                        <h6>Score:</h6>
                        <h6>{gradeProps.score}</h6>
                    </div>
                </div>
            </div>
        // </NavLink>
    );
}

export default GradeCard