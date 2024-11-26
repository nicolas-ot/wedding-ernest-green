// components/HeaderSlider.js
import { Box, Typography } from "@mui/material";

export default function HeaderSlider() {
    return (
        <Box
            sx={{
                height: "100vh",
                backgroundImage: 'url("/assets/images/header-bg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                textAlign: "center",
                color: "#fff",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            />
            <Box sx={{ zIndex: 1 }}>
                <img
                    src="/assets/images/ring-svg.png"
                    alt="logo"
                    style={{ maxHeight: "60px", margin: "25px auto" }}
                />
                <Typography
                    variant="h5"
                    sx={{ animation: "fadeInUp 0.2s" }}
                >
                    WE ARE GETTING MARRIED
                </Typography>
                <Typography variant="h2" sx={{ animation: "fadeInUp 0.7s" }}>
                    Wildan <span>&amp;</span> Aida
                </Typography>
                <Typography variant="subtitle1" sx={{ animation: "fadeInUp 1s" }}>
                    Oval Hotel, Surabaya, Indonesia
                </Typography>
            </Box>
        </Box>
    );
}
