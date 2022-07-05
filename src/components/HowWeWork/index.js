import { Button } from '@mui/material';
import { useState } from 'react';
// Styles
import Styles from "./styles.module.scss";

const Card = ({ item }) => {

    const [details, setDetails] = useState(true);


  return (
    <div className={ `${Styles.card_wrapper} ${!details ? Styles.card_wrapper_open :  Styles.card_wrapper_closed}` }>
        <div>
            <div className={ Styles.mob_wrapper }>
              <h3>{item.title}</h3>
              <div
                  className={Styles.more_details}
                  onClick={() => setDetails(!details)}
                >
                </div>
            </div>
                <div className={ `${Styles.divider} ${!details ? Styles.display : null}`}></div>
                <div className={ `${Styles.description} ${!details ? Styles.display : null}` }>{ item.descr }</div>
        </div>

        <div className={`${Styles.content_wrapper} ${!details ? Styles.display : null}`}>
            <div className={Styles.timeline}>{ item.timeline }</div>
            
            <div className={Styles.d_flex}>
                <div className={Styles.price}>{ item.price }</div>
                <Button
                    href = { '#contact' }
                    variant = { 'contained' }
                    className = { Styles.contact_btn }
                >
                { 'Contact us' }
                </Button>
            </div>
            <span className={ Styles.for_whom }>{ item.forWhom }</span>
        </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "In-depth technical problem analysis",
    descr: "We analyze the client's request, make an overview of the available and relevant technological approaches, and create a product development plan with the timeline and financial estimations.",
    timeline: '1.5 week',
    price: '$2,250',
    forWhom: 'for those who understand what solution they want to receive',
  },
  {
    id: 2,
    title: "In-depth product & technical problem analysis",
    descr: "We analyze the “pain” our client has, make an overview of the market this product will exist in, suggest what should be added or changed to make the product more competitive, and offer alternative non-technological solutions for the client’s problem",
    timeline: '3 weeks',
    price: '$4,500',
    forWhom: 'for those who understand what solution they want to receive',
  },
];

const HowWeWork = () => {
  return (
    <section id = { 'howwework' } className={Styles.wrapper}>
      <h2 className={Styles.title}>{"What to expect"}</h2>
      <div className={Styles.descr}>
        <p>{`This is our fundamental approach to projects. However, we are flexible and ready to consider other procedures to satisfy any specific need.`}</p>
        <p>{`We suggest to always start with a business analysis phase to prepare roadmap, SOW, FBL, etc`}</p>
      </div>
      <div className={Styles.packages}>
      {
        cards.map((item) => {
            return <Card key={ item.id } item={ item }/>;
        })
      }
      </div>
    </section>
  );
};

export default HowWeWork;
