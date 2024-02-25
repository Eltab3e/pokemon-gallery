// MUI imports
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
// Router
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ paddingTop: 6 }}>
                <Outlet />
            </Box>
        </Container>
    );
};

export default BaseLayout;
