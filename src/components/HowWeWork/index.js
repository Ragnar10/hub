import { Button } from '@mui/material';
// Styles
import Styles from "./styles.module.scss";

const Card = ({ item }) => {
  return (
    <div className={ Styles.card_wrapper }>
        <div>
            <h3>{item.title}</h3>
            <div className = { Styles.divider }></div>
            <div className={Styles.description}>{item.descr}</div>
        </div>
        <div>
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
    price: '$2,700',
    forWhom: 'for those who understand what solution they want to receive',
  },
  {
    id: 2,
    title: "In-depth product & technical problem analysis",
    descr: "We analyze the “pain” our client has, make an overview of the market this product will exist in, suggest what should be added or changed to make the product more competitive, and offer alternative non-technological solutions for the client’s problem",
    timeline: '3 weeks',
    price: '$5,400',
    forWhom: 'for those who understand what solution they want to receive',
  },
];

const HowWeWork = () => {
  return (
    <section id = { 'howwework' } className={Styles.wrapper}>
      <h2 className={Styles.title}>{"How we work"}</h2>
      <div className={Styles.descr}>
        <p>{`Each project we work on starts with a thorough analysis of our client's problem. `}</p>
        <p>{"This way, we can offer the most efficient solutions."}</p>
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
