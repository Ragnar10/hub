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
    {
        id:    1,
        title: 'Bachu.info',
        type:  'Government security project',
        descr: 'A web app designed for reporting the movements of Russian military vehicles, weapons, troops, or saboteurs on Ukrainian territory. Any Ukrainian user who has spotted the enemy can transmit the exact location directly to the Security Service of Ukraine_Timeline: 4 weeks_Challenge: To prevent the misleading of the Armed Forces of Ukraine we developed a solution that analyses metadata from images uploaded by users to the service',
        img:   sl1,
    },
    {
        id:    2,
        title: 'The International Legion Of Defense Of Ukraine',
        type:  'Public organization project',
        descr: 'A website and a chatbot designed for non-citizens of Ukraine volunteering for military service in our country. These solutions give foreigners the instructions for joining the Armed Forces of Ukraine and help with the procedure and paperwork_Timeline: 3 weeks_Challenge: We have built an operation and interaction process between our team of IT volunteers and the government in the first three weeks of the war to make it possible for volunteers to join the Foreign Legion as soon as possible',
        img:   sl2,
    },
    {
        id:    3,
        title: 'Forpost Cars App',
        type:  'Government security project',
        descr: 'Living during the war, the unusual car movement or even an unfamiliar car in your neighborhood looks disturbing, especially during the curfew. With Forpost Cars App you can check whether the suspicious vehicle possesses any danger by pointing your camera at its license plate_Timeline: 4 weeks_Challenge: We needed to securely synchronize the app’s database with the governmental one to receive the updates in real-time without disclosing owners’ personal info',
        img:   sl3,
    },
    {
        id:    4,
        title: 'SaveUA bot',
        type:  'Public organization project',
        descr: 'Lots of humanitarian problems have risen since the war started. SaveUA bot allows you to either find and receive or provide help in different regions across Ukraine_Timeline: 3 weeks_Challenge: No one can fully vouch for the credibility and thus the safety of individuals seeking or delivering help. We have created a bot allowing you to exchange contacts quickly with an individual verified beforehand',
        img:   sl4,
    },
    {
        id:    5,
        title: 'Reviews classification for a Yelp-like app',
        type:  'NLP project',
        descr: 'Our client’s review aggregation service needed to sort tons of users’ comments into categories to keep track of customers’ perceptions of restaurants and what changes should be made by places’ owners. We used BERT to divide reviews into 9 categories and add sentiment analysis on top_Timeline: 2 months_Challenge: As our client operates in Arab world and none of us speaks Arabic, we used automatic translation for 40% of comments to have a single pipeline',
        img:   sl5,
    },
    {
        id:    6,
        title: 'Product lists matching for a pricing platform',
        type:  'NLP project',
        descr: 'Retail companies are constantly monitoring competitors’ prices for every product they have. The trickiest part is to match the product names as retailers name the same products in a different way and often have their own barcodes. We developed an automatic product name matching system for our client_Timeline: 3 months_Challenge: Our product name matching system uses product characteristics as well, such as package size, brand name, color, etc. creating a multi-layered comparison algorithm.',
        img:   sl6,
    },
    {
        id:    7,
        title: 'Behavioral customer clustering for an apparel company',
        type:  'ML project',
        descr: 'Customer segmentation based on demographics or buyer personas describes clients that marketers wish for, not the clients they actually have. We combined millions of rows of personal and transactional data to develop a model using more than 100 different features to divide existing clients into groups with distinctive behavior_Timeline: 1 month_Challenge: The hardest part of getting clustering right is creating actionable cluster descriptions. We managed to define 14 distinct clusters that were relevant to the company',
        img:   sl7,
    },
];

const OurWorks = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { width } = getComputedStyle(document.body);
    const currentWidth = parseFloat(width);
    const height = (currentWidth - 40) * 0.64846;

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
                        images.map((item) => {
                            return (
                                <div
                                    key = { item.id }
                                    style = { item.id !== activeStep + 1 ? { display: 'none' } : null }
                                    className = { Styles.carousel_card }>
                                    <div
                                        style = { currentWidth < 768 ? { height } : null }
                                        className = { Styles.card_img }
                                        onClick = { handleNext }>
                                        <img
                                            key = { item.id } src = { item.img }
                                            alt = { 'carousel image' } />
                                    </div>
                                    <div className = { Styles.card_info }>
                                        <div className = { Styles.info_title }>
                                            <h3>{ item.title }</h3>
                                            <span>{ item.type }</span>
                                        </div>
                                        <div className = { Styles.info_text }>
                                            {
                                                item.descr.split('_').map((text, idx) => <p key = { idx }>{ text }</p>)
                                            }
                                        </div>
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
