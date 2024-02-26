// MUI imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// Hooks
import { useEffect, useState } from "react";

export default function CircularLoadingWithLabel() {
    const [progress, setProgress] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "250px",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={250}
                    color="secondary"
                    sx={{
                        "& .MuiCircularProgress-circle": {
                            strokeWidth: 0.75,
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                    >{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
