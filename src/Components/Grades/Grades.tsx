import { useEffect, useState } from "react";
import GradeModel from "../../Models/GradeModel";
import gradeService from "../../Services/GradeService";
import GradeCard from "../GradeCard/GradeCard";
import { Image, Shimmer } from 'react-shimmer'
import * as React from 'react';
    import Box from '@mui/material/Box';
    import LinearProgress from '@mui/material/LinearProgress';



import './Grades.css';
import { authorisationStore } from "../../Redux/AuthorisationState";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";


function Grades(): JSX.Element {



    const [grades, setGrades] = useState<GradeModel[]>([]);
    const [gradesCleanList, setGradesCleanList] = useState<GradeModel[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(authorisationStore.getState().user !== null) {
        gradeService.getGrades().then((response) => {
        setGrades(response);
        setGradesCleanList(response);
        console.log(response);
    }).catch();
}
else {
    navigate('/login');
}
    }, []);

    
    return (
    <div className='Grades'>       
        {grades.map (grade =>
        <GradeCard key={grade.id} {...grade}/>
        )}
    </div>
    );
}

export default Grades;

{/* <Shimmer width={100} height={100} /> */}