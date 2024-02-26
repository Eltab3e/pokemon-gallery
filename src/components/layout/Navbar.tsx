// MUI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// Assets
import logo from "../../assets/pokeapi.svg";
// Router
import { Link } from "react-router-dom";
// Components
import { SearchInput } from "../shared/index";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        backgroundColor: "#df5e56",
                        display: "flex",
                        gap: 4,
                        height: "70px",
                    }}
                >
                    <Link to="/">
                        <Box
                            sx={{
                                display: "flex",
                                "@media (max-width: 350px)": { display: "none" },
                            }}
                        >
                            <img
                                src={logo}
                                width={120}
                                height={70}
                                alt="logo"
                            />
                        </Box>
                    </Link>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 600,
                            color: "#fbeae9",
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Pokemon Gallery
                    </Typography>

                    <SearchInput />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
