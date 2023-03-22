import Courses from '../Courses/Courses';
import MainPage from '../MainPage/MainPage';
import Students from '../Students/Students';
import Content from '../Login/Login';
import Footer from './Footer/Footer';
import './LayoutArea.css';
import Navbar from './Navbar/Navbar';
import Routing from './Routing/Routing';





function LayoutArea(): JSX.Element {
    return (
        <div className='LayoutArea'>
            <header className='head'>
            <Navbar />
            </header>
            <div className='content'>
            <main>
                <Routing />
            </main>
            </div>
            <footer className='foot'>
            <Footer />
            </footer>
        </div>
    );
}

export default LayoutArea;