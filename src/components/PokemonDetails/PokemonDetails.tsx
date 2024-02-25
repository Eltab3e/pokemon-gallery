// MUI imports
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
// Hooks
import { Link } from "react-router-dom";
import { useFetchPokemonById } from "../../shared/hooks/useFetchPokemonById";
// Components
import { PokemonTabs } from "./index";
import { ErrorMessage, StyledButton } from "../shared/index";
import { Loader } from "../shared/index";
// Shared
import { Type } from "../../types/pokemons";
import { capitalizeFirstLetter, colors } from "../../utils/utils";

const PokemonDetails: React.FC<{ pokemonId: string }> = ({ pokemonId }) => {
    const { data, isLoading, isError } = useFetchPokemonById(pokemonId);
    const mobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

    const StyledBox = styled(Box)({
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
    });

    const Item = styled(Paper)(() => ({
        display: "flex",
        flexDirection: "column",
        paddingBottom: "4rem",
    }));

    const Section = styled(Box)({
        display: "flex",
        alignItems: "center",
        paddingLeft: mobile ? "0" : "3rem",
    });

    const ColoredContainer = styled(Box)({
        padding: "6px 10px",
        borderRadius: "1rem",
    });

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <ErrorMessage>This pokemon doesn't exist in our database! Try again.</ErrorMessage>;
    }

    return (
        <StyledBox>
            <Box>
                <Link to={"/"}>
                    <StyledButton startIcon={<ArrowBackIosOutlinedIcon />}>Back</StyledButton>
                </Link>
            </Box>

            <Item elevation={5}>
                <Section>
                    <CardMedia sx={{ display: "flex" }}>
                        <img
                            src={data?.sprites.front_default}
                            alt={data?.name}
                            loading="lazy"
                            width={200}
                            height={200}
                            style={{
                                width: mobile ? "100px" : "200px",
                                height: mobile ? "100px" : "200px",
                            }}
                        />
                    </CardMedia>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Typography variant={mobile ? "h5" : "h2"}>
                            {capitalizeFirstLetter(data?.name)}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "7px" }}>
                            {data &&
                                data?.types?.map((type: Type) => (
                                    <ColoredContainer
                                        key={type?.slot}
                                        style={{ backgroundColor: colors[type.type.name] }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="black"
                                        >
                                            {capitalizeFirstLetter(type?.type?.name)}
                                        </Typography>
                                    </ColoredContainer>
                                ))}
                        </Box>
                    </Box>
                </Section>

                <PokemonTabs data={data} />
            </Item>
        </StyledBox>
    );
};

export default PokemonDetails;
