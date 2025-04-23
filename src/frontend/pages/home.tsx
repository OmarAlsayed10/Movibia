import { Box, Grid } from "@mui/material";
import Hero from "../components/hero";
import TopTrending from "../components/topTrending";
import Browse from "./browse";

const Home = () => {
    return (
        <>
            <Hero />

            <Box sx={{ flexGrow: 1, px: 2, mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Browse />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TopTrending />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;
