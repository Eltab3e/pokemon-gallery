// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            navigate("/");
        }

        return () => clearInterval(interval);
    }, [countdown]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Page Not Found</h1>
            <p>You will be redirected in {countdown} seconds...</p>
        </div>
    );
};

export default NotFound;
