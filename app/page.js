// pages/index.js
import HeaderSlider from "../components/HeaderSlider";
import Countdown from "../components/Countdown";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <>
        <HeaderSlider />
        <Countdown />
        <ContactSection />
        <Footer />
      </>
  );
}
