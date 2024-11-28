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
                        Tuesday, December 14, 2025
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
                        <a href="https://maps.app.goo.gl/pCUqr9AjSN8dxzS57" target="_blank" rel="noopener noreferrer">
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
