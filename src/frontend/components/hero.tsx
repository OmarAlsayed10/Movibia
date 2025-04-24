import { Box, Button, Container, IconButton, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Movie } from "../interfaces/interface";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Hero = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const limitedMovies = movies.slice(0, 10);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        height: "650px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false} // 👈 hide bullets
        showStatus={false}
        interval={4000}
        dynamicHeight={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                bottom: 20,
                right: 130,
                zIndex: 4,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <ArrowBackIos fontSize="small" />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: "absolute",
                bottom: 20,
                right: 10,
                zIndex: 4,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          )
        }
      >
        {limitedMovies.map((movie: Movie, index: number) => (
          <Box
            key={movie.id}
            sx={{
              position: "relative",
              height: "650px",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.6,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to left, rgba(113, 87, 87, 0.06) 30%, rgba(42, 42, 101, 0.38) 100%)",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "5%",
                transform: "translateY(-50%)",
                zIndex: 2,
                maxWidth: "500px",
                color: "white",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {movie.title}
              </Typography>
              <Typography sx={{ fontSize: "1rem", mt: 1,textAlign:"left" }}>
                {movie.overview}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgb(25, 24, 29)",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "70%",
                  p: 2,
                  borderRadius: "15px",
                  margin: "20px auto",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "1rem", color: "rgb(213, 213, 213)" }}>
                    Rating
                  </Typography>
                  <Typography>{movie.vote_average}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "1rem", color: "rgb(213, 213, 213)" }}>
                    Release Date
                  </Typography>
                  <Typography sx={{ fontWeight: 300 }}>
                    {movie.release_date || "N/A"}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "orange" }}
                component={Link}
                href={`/movie/${movie.id}`}
              >
                View Details
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: 20,
                right: 50,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "20px",
                padding: "4px 12px",
                zIndex: 3,
              }}
            >
              {index + 1} / {limitedMovies.length}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default Hero;
