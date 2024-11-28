// components/HeaderSlider.js
export default function HeaderSlider() {
    return (
        <div className="header-slider background-gradient">
            <div className="overlay"></div>
            <div className="content">
                <img src="/assets/images/ring-svg.png" alt="logo" className="logo" />
                <h5>WE ARE GETTING MARRIED</h5>
                <h2>
                    Ernest <span style={{color: "#d59a57"}} >&amp;</span> Greenia
                </h2>
                <p style={{fontWeight: 600}}>Jade Imperial Restaurant, Surabaya, Indonesia</p>
            </div>
        </div>
    );
}
