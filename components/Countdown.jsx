"use client";

// components/Countdown.js
import {useState, useEffect} from "react";
import Image from "next/image";

export default function Countdown() {
    const weddingDate = new Date("2024-12-14T18:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const diff = weddingDate - now;
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-section">
            <div className="flex">

                <div className="shape1">
                    <img src="/assets/images/shape-1.png" alt="shape1"/>
                </div>

                <div className="left">
                    <h3>Event Date:</h3>
                    <div className={"dateleft"}>
                        Tuesday, December 14, 2024
                    </div>

                    <img className="leftimg" src="/assets/images/section_shape.png" alt="logo"/>
                </div>

                <div className="right">

                    <h3>Countdown to Our Wedding</h3>
                    <p className="countdown">
                        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
                        {timeLeft.seconds} Seconds
                    </p>
                    <div className="map">
                        <a href="https://www.google.com/maps/place/Jade+Imperial/@-7.2803104,112.6972312,15z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fc0ee1826af1:0x82e54769a605eae1!8m2!3d-7.2803318!4d112.7075095!16s%2Fg%2F1tlfs5nj?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/images/oval-hotel-map-horizontal.png"
                                alt="Oval Hotel Map"
                            />
                        </a>
                    </div>

                </div>


                <div className="shape2">
                    <img src="/assets/images/shape-2.png" alt="shape2"/>
                </div>
            </div>
        </div>
    );
}
