// MUI imports
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../shared/contexts/searchContext";
// Components
import { SnackBar } from "../shared/index";

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

const SearchInput = () => {
    const { searchQuery, handleSearch } = useSearch();
    const navigate = useNavigate();
    const [showEmptySearchSnackbar, setShowEmptySearchSnackbar] = useState(false);

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
            // Show snackbar if user submitted an empty string
            setShowEmptySearchSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setShowEmptySearchSnackbar(false);
    };

    const handleSearchSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        handleSearchIconClick();
    };

    return (
        <>
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

            <SnackBar
                open={showEmptySearchSnackbar}
                onClose={handleCloseSnackbar}
                message="Please enter a pokemon's name."
            />
        </>
    );
};

export default SearchInput;
