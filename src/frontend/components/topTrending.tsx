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
  
    const sortMovies = [...movies].sort(
      (a: any, b: any) => b.vote_average - a.vote_average
    );
    const top10 = sortMovies.slice(0, 10);
  
    return (
      <Box
        sx={{
          backgroundColor: "rgb(17, 16, 20)",
          py: 4,
          borderRadius: 5,
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
  
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                  width: 450,
                  height: 100,
                  margin: "0 auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgb(25, 24, 29)",
                  color: "white",
                  transition: " transform 0.3s ease-in-out ",
            "&:hover": {
              transform: "scale(1.05)",
            },
                }}
              >
                <CardContent
                  sx={{ display: "flex", gap: 4, alignItems: "center" }}
                >
                  <Avatar
                    sx={{
                      width: 35,
                      height: 35,
                      fontSize: 15,
                      textAlign: "center",
                      border: "0.2px solid rgba(255, 255, 255, 0.4)",
                      backgroundColor:
                        hovered === movie.id ? "orange" : "transparent",
                      color: hovered === movie.id ? "black" : "white",
                      transition: "background-color 0.3s, color 0.3s",
                    }}
                  >
                    {`#${index + 1}`}
                  </Avatar>
  
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Typography variant="body1" fontWeight={400}>
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "orange",
                        borderRadius: 1,
                        width: "50px",
                        pl: 1,
                      }}
                    >
                      {movie.vote_average}
                    </Typography>
                  </Box>
                </CardContent>
  
                <CardMedia
                  component="img"
                  sx={{ width: 80 }}
                  image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default TopTrending;
  


