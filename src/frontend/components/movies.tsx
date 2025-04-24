import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store/store";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Movie } from "../interfaces/interface";

type Props = {
  sortBy?: "popularity" | "release_date_desc" | "this_week";
};

const Movies = forwardRef<HTMLDivElement, Props>(({ sortBy = "popularity" }, ref) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movies);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => scrollRef.current!);

  useEffect(() => {
    dispatch(movieAction());
  }, [dispatch]);

  if (!movies) {
    return <Typography>No movies available</Typography>;
  }

  let sortedMovies = [...movies];

  if (sortBy === "popularity") {
    sortedMovies.sort((a: Movie, b: Movie) => b.popularity - a.popularity);
  } else if (sortBy === "release_date_desc") {
    sortedMovies.sort(
      (a: Movie, b: Movie) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  } else if (sortBy === "this_week") {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    sortedMovies = sortedMovies
      .filter((m: Movie) => new Date(m.release_date) >= oneWeekAgo)
      .sort(
        (a: Movie, b: Movie) =>
          new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
  }

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        gap: 3,
        pb: 2,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {sortedMovies.map((movie: Movie) => (
        <Card
          key={movie.id}
          sx={{
            width: 160,
            backgroundColor: "black",
            color: "white",
            flex: "0 0 auto",
            position: "relative",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onMouseEnter={() => setHoveredItem(movie.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              sx={{ height: 240 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <CardContent sx={{ p: 1.5 }}>
              <Typography variant="body2" fontWeight="bold">
                {movie.title}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </Box>
  );
});

export default Movies;

