// Mui
import { Button } from "@mui/material";
// Styles
import Styles from "./styles.module.scss";

const BasicInfo = () => {
  return (
    <section className={Styles.wrapper}>
      <h1 className={Styles.info_title}>
        <span>{"We are the game changer"}</span>
        <br/>
        <span>{"of the tech services industry"}</span>
      </h1>

      <div className={Styles.bg_img} />

      <p className={Styles.info_descr}>
        <span>{"Over 1,200 experts in machine learning, cybersecurity, "}</span>
        <span>{"DeFi, web, and app development are ready to provide "}</span>
        <span>{"you with efficient solutions quickly."}</span>
      </p>
      <Button
        href={"#howwework"}
        variant={"contained"}
        className={Styles.contact_btn}
      >
        {"Explore"}
      </Button>
    </section>
  );
};

export default BasicInfo;
