import Footer from '../components/footer';
import Navbar from '../components/navbar';
// import BottomNavbar from '../components/bottomnavbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar/>
            {/* </BottomNavbar> */}
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
