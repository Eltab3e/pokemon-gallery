// MUI imports
import Box from "@mui/system/Box";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
// Router
import { Link } from "react-router-dom";
// Utils
import { PokemonDetailsResponse, PokemonFlavorResponse } from "../../types/pokemons";
import { capitalizeFirstLetter, colors, findEngLang, formatText } from "../../utils/utils";

interface PokemonCardProps {
    details: PokemonDetailsResponse;
    flavors: PokemonFlavorResponse;
}

const StyledCard = styled(Box)({
    width: 220,
    height: 340,
    border: "1px solid #d3d3d3",
});

const ColoredContainer = styled(Box)({
    padding: "6px 10px",
    borderRadius: "1rem",
});

const PokemonCard: React.FC<PokemonCardProps> = ({ details, flavors }) => {
    const englishFlavor = findEngLang(flavors?.flavor_text_entries);

    return (
        <StyledCard>
            <Link
                to={`/pokemon/${details.id}`}
                key={details.id}
                style={{ textDecoration: "none" }}
            >
                {details && (
                    <CardActionArea>
                        <CardMedia
                            sx={{
                                backgroundColor: "#f6f5f5",
                                width: 218,
                                height: 140,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                width="140px"
                                height="140px"
                                src={details?.sprites?.front_default}
                                alt={details?.name}
                                loading="lazy"
                            />
                        </CardMedia>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                textAlign: "start",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                {capitalizeFirstLetter(details?.name)}
                            </Typography>

                            {flavors && (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {capitalizeFirstLetter(formatText(englishFlavor.flavor_text))}
                                </Typography>
                            )}

                            <Box sx={{ display: "flex", gap: "7px" }}>
                                {details &&
                                    details?.types?.map((type) => (
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
                        </CardContent>
                    </CardActionArea>
                )}
            </Link>
        </StyledCard>
    );
};

export default PokemonCard;
