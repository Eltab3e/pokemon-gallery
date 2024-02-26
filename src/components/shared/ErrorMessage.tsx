// MUI imports
import theme from "../../theme";
import { styled } from "@mui/system";
// React
import { ReactNode } from "react";

const ErrorContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
});

const Message = styled("span")({
    color: theme.palette.secondary.main,
});

const ErrorMessage = ({ children }: { children: ReactNode }) => {
    return (
        <ErrorContainer>
            <Message>{children}</Message>
        </ErrorContainer>
    );
};

export default ErrorMessage;
