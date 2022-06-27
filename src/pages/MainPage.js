// Components
import {
  BasicInfo,
  AreasExpertise,
  OurWorks,
  AboutUs,
  GetInTouch,
  Donation,
  TheyTrustUs,
  HowWeWork,
  InitialProduct,
  FullProduct,
} from "../components";

const MainPage = () => {
  return (
    <>
      <BasicInfo />
      <AreasExpertise />
      <HowWeWork />
      <InitialProduct />
      <FullProduct />
      <OurWorks />
      <TheyTrustUs />
      <AboutUs />
      <GetInTouch />
      <Donation />
    </>
  );
};

export default MainPage;
