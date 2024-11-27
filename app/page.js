// pages/index.js
import HeaderSlider from "../components/HeaderSlider";
import Countdown from "../components/Countdown";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <div>
                <audio id="background-music" autoPlay loop>
                    <source src="/assets/audio/LostWoods.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
            </div>

            <HeaderSlider/>
            <Countdown/>
            <ContactSection/>
            <Footer/>
        </>
    );
}
