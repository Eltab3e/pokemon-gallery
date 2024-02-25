import { ReactNode } from "react";
// MUI imports
import Button, { ButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

interface StyledButtonProps extends ButtonProps {
    children: ReactNode;
    startIcon?: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({
    children,
    onClick,
    disabled,
    startIcon,
    ...rest
}) => {
    const theme = useTheme();

    return (
        <Button
            {...rest}
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon}
            sx={{
                fontWeight: 600,
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                },
            }}
        >
            {children}
        </Button>
    );
};

export default StyledButton;
