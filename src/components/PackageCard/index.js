import { Button } from '@mui/material';
// Styles
import React, { useState } from 'react';
import Styles from './styles.module.scss';


const cards = [
    {
        id:    1,
        title: 'In-depth technical problem analysis',
        descr: [
            'By choosing this option, you receive:',
            'development roadmap for an initial product and a full release',
            'terms of reference',
            'work estimates and the development timeline',
            'analysis of the technologies used and potential risks',
        ],
        timeline: '1.5 week',
        price:    '$2,250',
        forWhom:  'for those who understand what solution they want to receive',
        class:    Styles.first_card,
    },
    {
        id:    2,
        title: 'In-depth product & technical problem analysis',
        descr: [
            'By choosing this option, you receive:',
            'roadmap, terms of reference, work estimates, development timeline, analysis of the technologies used and potential risks',
            'market & competitors research',
            'analysis of risks associated with bringing the product to the market',
            'proposals for strengthening the product',
            'your idea, packaged into a full product concept',
        ],
        timeline: '3 weeks',
        price:    '$4,500',
        forWhom:
      'for those who have the vision, but don\'t know the specifics',
        class: Styles.second_card,
    },
];

const PackageCard = () => {
    return cards.map((item) => {
        const [details, setDetails] = useState(false);

        return (
            <div key = { item.id }>
                <div className = { `${Styles.card_wrapper} ${item.class}` }>
                    <div>
                        <div className = { Styles.title_wrapper }>
                            <h3>{ item.title }</h3>

                            <div className = { Styles.mob_divider }></div>

                            <div
                                className = { Styles.more_details }
                                onClick = { () => setDetails(!details) }>
                Details
                                <div />
                            </div>
                        </div>

                        <div className = { Styles.divider }></div>
                    </div>
                    { details && (
                        <ul>
                            { item.descr.map((listItem, idx) => (
                                <li key = { idx }>{ listItem }</li>
                            )) }
                        </ul>
                    ) }
                    <div>
                        <div className = { Styles.timeline }>{ item.timeline }</div>

                        <div className = { Styles.d_flex }>
                            <div className = { Styles.price }>{ item.price }</div>
                            <Button
                                href = { '#contact' }
                                variant = { 'contained' }
                                className = { Styles.contact_btn }>
                                { 'Contact us' }
                            </Button>
                        </div>
                        { details && <div className = { Styles.for_whom }>{ item.forWhom }</div> }
                    </div>
                </div>

                { item.id === 1
          && <div className = { Styles.splitter }>or</div>
                }
            </div>
        );
    });
};

export default PackageCard;
