// Styles
import Styles from './styles.module.scss';
// Components
import ContactUs from '../ContactUs';
import Copyright from '../Copyright';
import Header from '../Header';
import Footer from '../Footer';
import BasicInfo from '../BasicInfo';
import Donation from '../Donation';
import AboutUs from '../AboutUs';
import AreasExpertise from '../AreasExpertise';
import Service from "../Service";

const Main = () => {
    return (
        <div className = { Styles.container }>
            <ContactUs />
            <div className = { Styles.wrapper }>
                <Header />
                <main className = { Styles.main_content }>
                    <BasicInfo />
                    <Donation />
                    <AboutUs />
                    <AreasExpertise />
                    <Service />
                </main>
                <Footer />
            </div>
            <Copyright />
        </div>
    );
};

export default Main;
