import Styles from "./styles.module.scss";

const companies = [
  {
    id: 1,
    company: "WZMH",
    logo: "wzmh_logo.svg",
    website: "https://www.wzmh.com/",
    class: Styles.wzmh_logo,
  },
  {
    id: 2,
    company: "EVA",
    logo: "eva_logo.svg",
    website: "https://evacodes.com/",
    class: Styles.eva_logo,
  },
  {
    id: 3,
    company: "GPNow",
    logo: "gp_now_logo.svg",
    website: "https://www.gpnow.net/about/our-company/",
    class: Styles.gp_now_logo,
  },
  {
    id: 4,
    company: "Ministry of Defense of Ukraine",
    logo: "min_defence_logo.svg",
    website: "https://www.mil.gov.ua/",
    class: Styles.min_defence_logo,
  },
  {
    id: 5,
    company: "Peer social Foundation",
    logo: "peer_social_logo.svg",
    website: "https://peer.social/",
    class: Styles.peer_social_logo,
  },
  {
    id: 6,
    company: "Ministry of Digital Transformation of Ukraine",
    logo: "min_digital_logo.svg",
    website: "https://thedigital.gov.ua/",
    class: Styles.min_digital_logo,
  },
  {
    id: 7,
    company: "Proximity Learning",
    logo: "prox_learn_logo.svg",
    website: "https://www.proxlearn.com/",
    class: Styles.prox_learn_logo,
  },
  {
    id: 8,
    company: "sparkbird",
    logo: "sparkbird_logo.svg",
    website: "https://www.wzmh.com/sparkbird/about/",
    class: Styles.sparkbird_logo,
  },
  {
    id: 9,
    company: "Farm to Plate",
    logo: "farm_plate_logo.svg",
    website: "https://www.farmtoplate.io/contact-us/",
    class: Styles.farm_plate_logo,
  },
];

const TheyTrustUs = () => {
  return (
    <section className={Styles.wrapper}>
      <h2 className={Styles.title}>{"They trust us"}</h2>

      <div className={Styles.grid}>
        {companies.map((item) => {
          return (
            <a key={item.id} href={item.website} target="_blank">
              <div className={`${Styles.company} ${item.class}`}></div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default TheyTrustUs;
