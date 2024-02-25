// MUI imports
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// Assets
import logo from "../../assets/pokeapi.svg";
// Hooks
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../../shared/contexts/searchContext";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    color: alpha(theme.palette.common.white, 0.5),
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 999,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: "16ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const Navbar = () => {
    const { searchQuery, handleSearch } = useSearch();
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
    };

    const handleSearchIconClick = () => {
        if (searchQuery.trim() !== "") {
            // Navigate to individual Pokemon's page
            navigate(`/pokemon/${searchQuery.trim().toLowerCase()}`);
            // Clear the search input
            handleSearch("");
        } else {
            // Navigate to the default page if no search query
            navigate("/");
        }
    };

    const handleSearchSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        handleSearchIconClick();
    };

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

                    <Search>
                        <form onSubmit={handleSearchSubmit}>
                            <SearchIconWrapper onClick={handleSearchIconClick}>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                value={searchQuery}
                                onChange={handleChange}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </form>
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
