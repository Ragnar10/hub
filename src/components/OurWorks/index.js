// Core
import { useState } from 'react';
// Mui
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
// Styles
import Styles from './styles.module.scss';
// Images
import sl1 from '../../theme/assets/images/slider_bg1.png';
import sl2 from '../../theme/assets/images/slider_bg2.png';
import sl3 from '../../theme/assets/images/slider_bg3.png';
import sl4 from '../../theme/assets/images/slider_bg4.png';
import sl5 from '../../theme/assets/images/slider_bg5.png';
import sl6 from '../../theme/assets/images/slider_bg6.png';
import sl7 from '../../theme/assets/images/slider_bg7.png';

const images = [
    { id: 1, img: sl1 }, { id: 2, img: sl2 }, { id: 3, img: sl3 },
    { id: 4, img: sl4 }, { id: 5, img: sl5 }, { id: 6, img: sl6 },
    { id: 7, img: sl7 },
];

const OurWorks = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep === images.length - 1) {
            setActiveStep(0);

            return null;
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            setActiveStep(images.length - 1);

            return null;
        }

        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <section id = { 'projects' } className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Our work' }</h2>
            <div className = { Styles.carousel_wrapper }>
                <div className = { Styles.carousel }>
                    {
                        images.filter((item) => item.id === activeStep + 1).map((item) => {
                            return (
                                <div key = { item.id } className = { Styles.carousel_card }>
                                    <div className = { Styles.card_img }>
                                        <img
                                            key = { item.id } src = { item.img }
                                            alt = { 'carousel image' } />
                                    </div>
                                    <div className = { Styles.card_info }>
                                        <div>
                                            <h3>{ 'Stand For Ukraine' }</h3>
                                            <span>{ 'Type of project' }</span>
                                        </div>
                                        <p>
                                            { 'Увага тут заглушка Cyber-defense, developing websites and telegram bots, protection and creating mirrors for web-pages, projects using computer vision technology and natural language processing, translation of operational information into 20+ languages, creating creatives and infographics in different formats, information distribution, general web and app development etc. ' }
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <MobileStepper
                    variant = 'dots'
                    steps = { images.length }
                    position = 'static'
                    activeStep = { activeStep }
                    className = { Styles.carousel_stepper }
                    nextButton = {
                        <Button
                            onClick = { handleNext }
                            className = { Styles.stepper_btn_next }>
                            <span className = { Styles.arrow_next } />
                        </Button>
                    }
                    backButton = {
                        <Button
                            onClick = { handleBack }
                            className = { Styles.stepper_btn_back }>
                            <span className = { Styles.arrow_back } />
                        </Button>
                    } />
            </div>
        </section>
    );
};

export default OurWorks;
