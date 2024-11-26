"use client";

import {Box, Typography} from "@mui/material";
import React from "react";

export default function Countdown() {
    const weddingDate = new Date("2024-02-22T19:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const distance = weddingDate - now;
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((distance / 1000 / 60) % 60),
            seconds: Math.floor((distance / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            sx={{
                textAlign: "center",
                padding: 3,
                background: "linear-gradient(to right, #FFD1DC, #FFF5E4)",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Countdown to Our Wedding
            </Typography>
            <Typography variant="h5">
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
                {timeLeft.seconds} Seconds
            </Typography>
            <Box sx={{mt: 2}}>
                <a href="https://maps.app.goo.gl/pCUqr9AjSN8dxzS57" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/images/oval-hotel-map-horizontal.png"
                        alt="Oval Hotel Map"
                        style={{borderRadius: "5px", maxWidth: "100%"}}
                    />
                </a>
            </Box>
        </Box>
    );
}
