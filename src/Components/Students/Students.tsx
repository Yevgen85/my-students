import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentModel from "../../Models/StudentModel";
import { authorisationStore } from "../../Redux/AuthorisationState";
import studentService from "../../Services/StudentService";
import Login from "../Login/Login";
import StudentCard from "../StudentCard/StudentCard";
import './Students.css';


function Students(): JSX.Element {

    const [students, setStudents] = useState<StudentModel[]>([]);
    const [studentsCleanList, setStudentsCleanList] = useState<StudentModel[]>([]);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if(authorisationStore.getState().user !== null) {
        studentService.getStudents().then((response) => {
        setStudents(response);
        setStudentsCleanList(response);
        console.log(response);
    }).catch();
}
else {
    navigate('/login');
}
    }, []);
    
    return (

        <div className='Students'>
           
        {students.map(student =>
        <StudentCard key={student.id} {...student}/>
        )}
       </div>
    );
}

export default Students;