// Routing
import { Outlet } from 'react-router-dom';
// Styles
import Styles from './styles.module.scss';
// Components
import Copyright from '../Copyright';
import Header from '../Header';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className = { Styles.container }>
            <Header />
            <main className = { Styles.main_content }>
                <Outlet />
            </main>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Main;
