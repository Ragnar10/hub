import { Button } from "@mui/material";
// Styles
import Styles from "./styles.module.scss";

import PackageCard from "../PackageCard";

const FullProduct = () => {
  return (
    <section className={Styles.bg_color}>
        <div className={Styles.wrapper}>
            <h2 className={Styles.title}>{"Full product development "}</h2>
            <div className={Styles.content}>
                <div className={Styles.info_block}>
                    <div className={Styles.description}>
                        {
                        "Based on the roadmap and the result of the launch of the MVP, we plan and launch the work on the full version — minimum marketable release."
                        }
                    </div>
                    <span className={Styles.price}>{"Price and  timeline depend on the product’s features"}</span>
                    <span className={Styles.time}>{"To be discussed"}</span>
                    {/* <span className={Styles.descr}>{"This is our fundamental approach to projects. However, we are flexible and ready to consider other procedures to satisfy any specific need."}</span> */}
                </div>
                    
                <div className={Styles.card_block}>
                    <span>
                        {"To start our cooperation, choose the option suitable for you."}
                    </span>
                    <div className={Styles.cards_wrap}>
                        <PackageCard />
                    </div>
                    {/* <span className={Styles.mob_descr}>{"This is our fundamental approach to projects. However, we are flexible and ready to consider other procedures to satisfy any specific need."}</span> */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default FullProduct;
