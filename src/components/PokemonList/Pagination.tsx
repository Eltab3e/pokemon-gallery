// MUI imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// Components
import { StyledButton } from "../shared/index";

interface PaginationProps {
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ onNext, onPrev, hasNext, hasPrev }) => {
    return (
        <Grid
            sx={{ paddingBottom: 3 }}
            xs={12}
            item
            container
            justifyContent="center"
        >
            <Stack
                direction="row"
                spacing={12}
            >
                <StyledButton
                    onClick={onPrev}
                    disabled={!hasPrev}
                >
                    Previous
                </StyledButton>
                <StyledButton
                    onClick={onNext}
                    disabled={!hasNext}
                >
                    Next
                </StyledButton>
            </Stack>
        </Grid>
    );
};

export default Pagination;
