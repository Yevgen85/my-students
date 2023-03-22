import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseModel from "../../Models/CourseModel";
import { authorisationStore } from "../../Redux/AuthorisationState";
import courseService from "../../Services/CourseService";
import CourseCard from "../CourseCard/CourseCard";
import Login from "../Login/Login";
import './Courses.css';


function Courses(): JSX.Element {

    const [courses, setCourses] = useState<CourseModel[]>([]);
    const [coursesCleanList, setCoursesCleanList] = useState<CourseModel[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(authorisationStore.getState().user !== null) {
            courseService.getCourses().then((response) => {
            setCourses(response);
            setCoursesCleanList(response);
            console.log(response);
            }).catch();
        }
        else {
            navigate('/login');
        }
    }, []);
    
    return (
        <div className='Courses'>
           
        {courses.map (course =>
        <CourseCard key={course.id} {...course}/>
        )}
       </div>
    );
}

export default Courses;