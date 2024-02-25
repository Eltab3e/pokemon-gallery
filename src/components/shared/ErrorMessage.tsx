import { ReactNode } from "react";
import { styled } from "@mui/system";
import theme from "../../theme";

const Message = styled("span")({
    color: theme.palette.secondary.main,
});

const ErrorMessage = ({ children }: { children: ReactNode }) => {
    return <Message>{children}</Message>;
};

export default ErrorMessage;
