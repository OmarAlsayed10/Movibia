import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store/store";
import { addToWatchList } from "../redux/slices/watchlistSlice";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  Chip,
  Snackbar,
  Alert,
  Grid2
} from "@mui/material";


const MovieDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movies);
  const { items: watchlist } = useSelector((state: RootState) => state.watchlist);
  const userId = Number(localStorage.getItem("id"));

  const [movie, setMovie] = useState<Movie | null>(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<"success" | "info">("success");

  const handleAdd = (movie: any) => {
    const alreadyExists = watchlist.some((m) => m.id === movie.id);

    if (alreadyExists) {
      setSnackMessage("This movie is already in your watchlist.");
      setSnackSeverity("info");
      setSnackOpen(true);
    } else if (userId) {
      dispatch(addToWatchList({ userId, movie }));
      setSnackMessage("Movie added to your watchlist.");
      setSnackSeverity("success");
      setSnackOpen(true);
    }
  };

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);

  const { id } = useParams();

  useEffect(() => {
    if (movies.length > 0) {
      const foundMovie = movies.find((m: any) => m.id === Number(id));
      setMovie(foundMovie || null);
    }
  }, [id, movies]);

  if (!movies.length)
    return <Typography color="white" align="center">Loading movies...</Typography>;
  if (!movie)
    return <Typography color="white" align="center">Movie not found</Typography>;

  return (
    <Box sx={{ px: 2, mt: 5 }}>
      <Grid2
        container
        spacing={8}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Grid2 item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "#1c1c1c",
              display: "flex",
              justifyContent: "center",
              p: 1,
              width: "400px",
              borderRadius: 3,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "400px", borderRadius: 3 }}
              image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </Card>
        </Grid2>

        <Grid2
          item
          xs={12}
          md={6}
          sx={{
            color: "white",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "center" },
          }}
        >
          <Typography variant="h3" mt={2}>
            {movie.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              py: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Chip
              label={movie.adult ? "NC-17" : "PG"}
              sx={{ color: "white", p: 2, backgroundColor: "rgb(14, 11, 30)" }}
              size="small"
            />
            <Chip
              label={
                <>
                  <i className="bi bi-calendar pe-2"></i>
                  {movie.release_date}
                </>
              }
              sx={{ color: "white", backgroundColor: "rgb(14, 11, 30)" }}
            />
            <Chip
              label={
                <>
                  <i className="bi bi-ticket-perforated-fill pe-2"></i>
                  {movie.vote_average}
                </>
              }
              sx={{ color: "white", backgroundColor: "rgb(14, 11, 30)" }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{ xs: "center", md: "left", my: 2, width: "50%" }}
          >
            {movie.overview}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "orange" }}
              onClick={() => handleAdd(movie)}
              startIcon={<i className="bi bi-bookmark-plus"></i>}
            >
              Add to Watch List
            </Button>
          </Box>
        </Grid2>
      </Grid2>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackSeverity}
          onClose={() => setSnackOpen(false)}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default memo(MovieDetails);
