import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Avatar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { useEffect, useState } from "react";
import { movieAction } from "../redux/slices/movieSlice";
import { Movie } from "../interfaces/interface";
import { Link } from "react-router-dom";

const TopTrending = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movies);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);

  const top10 = [...movies]
    .sort((a:Movie, b:Movie) => b.vote_average - a.vote_average)
    .slice(0, 10);

  return (
    <Box
      sx={{
        backgroundColor: "rgb(17, 16, 20)",
        py: 4,
        borderRadius: 5,
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "white", textAlign: "center" }}
        fontWeight={600}
        mb={4}
      >
        Top Trending
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {top10.map((movie: Movie, index: number) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              onMouseEnter={() => setHovered(movie.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgb(25, 24, 29)",
                color: "white",
                borderRadius: 3,
                width: "100%",
                maxWidth: 600,
                mx: "auto",
                height: { xs: "auto", sm: 150 },
                px: 2,
                py: 1,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flex: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 35,
                    height: 35,
                    fontSize: 15,
                    backgroundColor: hovered === movie.id ? "orange" : "transparent",
                    color: hovered === movie.id ? "black" : "white",
                    border: "1px solid rgba(255,255,255,0.4)",
                    transition: "0.3s",
                  }}
                >
                  #{index + 1}
                </Avatar>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                  <Typography fontWeight="bold" fontSize={{ xs: "1rem", sm: "1.1rem" }}>
                    {movie.title}
                  </Typography>
                  <Typography fontSize="0.85rem" color="text.white">
                    PG: {movie.adult ? "18+" : "PG"}
                  </Typography>
                  <Typography fontSize="0.85rem" color="text.white">
                    Release: {movie.release_date || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: "orange",
                      borderRadius: 1,
                      width: "fit-content",
                      px: 1.2,
                      fontSize: "0.75rem",
                      mt: 0.5,
                    }}
                  >
                    {movie.vote_average}
                  </Typography>
                </Box>
              </CardContent>

              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: "auto",
                  borderRadius: 1,
                  ml: 2,
                }}
              />
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TopTrending;
