// MUI imports
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
// Utils
import { formatStats } from "../../utils/utils";
import { PokemonDetailsResponse } from "../../types/pokemons";

interface PokemonTabsProps {
    data: PokemonDetailsResponse;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const mobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ paddingLeft: mobile ? 3 : 6, paddingTop: 3 }}>{children}</Box>
            )}
        </div>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

const Text = styled(Typography)({
    fontWeight: "600",
    paddingBottom: "1rem",
});

const PokemonTabs: React.FC<PokemonTabsProps> = ({ data }) => {
    const mobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ paddingLeft: mobile ? 0 : 6 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="pokemon details tabs"
                >
                    <Tab
                        label={<Typography>STATS</Typography>}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={<Typography>MOVES</Typography>}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={<Typography>ABILITIES</Typography>}
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>

            <Box>
                <CustomTabPanel
                    value={value}
                    index={0}
                >
                    {data?.stats &&
                        data?.stats.map((stat) => (
                            <Grid
                                container
                                item
                                xs={8}
                                sm={5}
                                md={4}
                                lg={3}
                                key={stat.stat.name}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <Grid
                                    item
                                    xs={9}
                                    sm={8}
                                    sx={{
                                        borderRight: 2,
                                        borderColor: "divider",
                                    }}
                                >
                                    <Text>{formatStats(stat.stat.name)}</Text>
                                </Grid>

                                <Grid item>
                                    <Typography>{stat.base_stat}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                </CustomTabPanel>

                <CustomTabPanel
                    value={value}
                    index={1}
                >
                    <List sx={{ overflow: "auto", maxHeight: 300 }}>
                        {data?.moves &&
                            data?.moves.map((move) => (
                                <ListItem key={move.move.name}>
                                    <Text>{formatStats(move.move.name)}</Text>
                                </ListItem>
                            ))}
                    </List>
                </CustomTabPanel>

                <CustomTabPanel
                    value={value}
                    index={2}
                >
                    <List>
                        {data?.abilities &&
                            data?.abilities.map((ability) => (
                                <ListItem key={ability.ability.name}>
                                    <Text>{formatStats(ability.ability.name)}</Text>
                                </ListItem>
                            ))}
                    </List>
                </CustomTabPanel>
            </Box>
        </Box>
    );
};

export default PokemonTabs;
