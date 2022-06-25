import { Button } from "@mui/material";
// Styles
import Styles from "./styles.module.scss";

import PackageCard from "../PackageCard";

const InitialProduct = () => {
  return (
    <section className={Styles.bg_color}>
      <div className={Styles.wrapper}>
        <h2 className={Styles.title}>{"Initial product development"}</h2>
        <div className={Styles.content}>
          <div className={Styles.info_block}>
            <div className={Styles.description}>
              {
                "Launching the basic version of the product according to the created roadmap. 1-3 months, 20-80 thousand dollars. We cover all aspects of creating a solution - design, development on all necessary platforms, quality and security checks, integration with third-party services, product support after launch."
              }
            </div>
            <span className={Styles.time}>{"4-12 weeks"}</span>
            <span className={Styles.price}>{"$20,000-80,000"}</span>
          </div>

          <div className={Styles.card_block}>
            <span>
              {"To start our cooperation, choose the option suitable for you."}
            </span>
            <div className={Styles.cards_wrap}>
              <PackageCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialProduct;
