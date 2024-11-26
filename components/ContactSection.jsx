// components/ContactSection.js
import { Box, Typography } from "@mui/material";

export default function ContactSection() {
    return (
        <Box sx={{ padding: 4, textAlign: "center", background: "#FFF9F5" }}>
            <Typography variant="h3" gutterBottom>
                You Are Cordially Invited
            </Typography>
            <Typography variant="body1" gutterBottom>
                Our joy will be more complete with your presence on our special day.
                We are looking forward to seeing you.
            </Typography>
            <Typography>
                <strong>Oval Hotel</strong>
                <br />
                Jalan Diponegoro No. 23, Surabaya, East Java, Indonesia
                <br />
                <strong>Feb 22, 2024 · 19:00 - 21:00</strong>
            </Typography>
        </Box>
    );
}
