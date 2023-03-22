import { Route, Routes } from "react-router-dom";
import { authorisationStore } from "../../../Redux/AuthorisationState";
import Courses from "../../Courses/Courses";
import Grades from "../../Grades/Grades";
import MainPage from "../../MainPage/MainPage";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Students from "../../Students/Students";
import Welcome from "../../Welcome/Welcome";
import Login from "../../Login/Login";
import Content from "../../Login/Login";


function Routing(): JSX.Element {



    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/login" element={<Login />}/>
                {/* Students */}
                <Route path="students/" element={<Students />}/>
                {/* Courses */}
                <Route path="courses/" element={<Courses />}/>
                {/* Courses */}
                <Route path="grades/" element={<Grades />}/>
                {/* Page Not Found */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
export default Routing;

//  {/* Welcome */}
//  <Route path="/" element={<Welcome />}/>