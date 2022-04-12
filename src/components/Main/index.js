// Styles
import Styles from './styles.module.scss';
// Components
import ContactUs from '../ContactUs';
import Copyright from '../Copyright';
import Header from '../Header';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className = { Styles.container }>
            <ContactUs />
            <div className = { Styles.wrapper }>
                <Header />
                <main className = { Styles.main_content }>

                </main>
                <Footer />
            </div>
            <Copyright />
        </div>
    );
};

export default Main;
