// MUI imports
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";

interface AutohideSnackbarProps {
    open: boolean;
    onClose: () => void;
    message: string;
}

const AutohideSnackbar: React.FC<AutohideSnackbarProps> = ({ open, onClose, message }) => {
    const theme = useTheme();

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            message={message}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            sx={{
                marginTop: 6,
                [theme.breakpoints.down("sm")]: {
                    marginTop: 8,
                },
            }}
        />
    );
};

export default AutohideSnackbar;
