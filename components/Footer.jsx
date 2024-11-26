// components/Footer.js
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ textAlign: "center", padding: 3, background: "#333", color: "#fff" }}>
            <Box>
                <video height="140" autoPlay muted loop>
                    <source src="/assets/video/aw-ring-logo-ticker.mp4" type="video/mp4" />
                </video>
            </Box>
            <Typography variant="h6">Wildan &amp; Aida</Typography>
            <Typography variant="body2">
                Built with ❤️ using NextJS
            </Typography>
        </Box>
    );
}
