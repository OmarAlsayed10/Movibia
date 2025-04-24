import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { memo, useEffect } from "react";
import {
  getWatchList,
  removeFromWatchList,
} from "../redux/slices/watchlistSlice";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Link,
  Typography,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SaveList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);
  const loading = useSelector((state: RootState) => state.watchlist.loading);
  const storedId = localStorage.getItem("id");
  const userId = Number(storedId);

  useEffect(() => {
    if (storedId) {
      dispatch(getWatchList({ userId }));
    }
  }, [dispatch]);

  const handleRemove = (movieId: number) => {
    if (storedId) {
      dispatch(removeFromWatchList({ userId, movieId }));
    }
  };

  if (loading) {
    return (
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", mt: 10 }}
      >
        <CircularProgress color="primary" />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {watchlist.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h4" color="white">
            No movies in watchlist
          </Typography>
          <Typography color="white">
            Browse movies and begin your journey!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {watchlist.map((movie) => (
            <Grid
              item
              key={movie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ display: "flex" }}
            >
              <Link
                href={`/movie/${movie.id}`}
                sx={{
                  textDecoration: "none",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "rgb(37, 37, 44)",
                    color: "white",
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                  >
                    <CardContent sx={{ padding: 1 }}>
                      <Box
                        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                      >
                        <Typography fontWeight="bold">{movie.title}</Typography>
                        <Typography fontSize="0.85rem">
                          PG: {movie.adult ? "18+" : "PG"}
                        </Typography>
                        <Typography fontSize="0.85rem">
                          Release: {movie.release_date || "N/A"}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "orange",
                            borderRadius: 1,
                            width: "fit-content",
                            px: 1,
                            fontSize: "0.75rem",
                          }}
                        >
                          {movie.vote_average}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <DeleteIcon
                        sx={{ cursor: "pointer", color: "white" }}
                        onClick={(e: any) => {
                          e.preventDefault();
                          handleRemove(movie.id);
                        }}
                      />
                    </CardActions>
                  </Box>

                  <CardMedia
                    component="img"
                    sx={{
                      width: 100,
                      height: "auto",
                      objectFit: "cover",
                      borderTopRightRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                    image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default memo(SaveList);
