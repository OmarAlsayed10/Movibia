import { memo, useRef } from "react";
import Movies from "../components/movies";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Browse = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:991px)");

  const scrollMovies = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollSteps = 1100;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollSteps : scrollSteps,
        behavior: "smooth",
      });
    }
  };

  const Section = ({
    title,
    to,
    refContainer,
    sortBy,
  }: {
    title: string;
    to: string;
    refContainer: React.RefObject<HTMLDivElement>;
    sortBy: "popularity" | "release_date_desc" | "this_week";
  }) => (
    <Box mt={5}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h5" color="white">
            {title}
          </Typography>
          <IconButton component={Link} to={to} sx={{ color: "white" }}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
        {!isMobile && (
          <Box display="flex" gap={1}>
            <Avatar
              sx={{
                cursor: "pointer",
                color: "black",
                backgroundColor: "white",
                width: 32,
                height: 32,
              }}
              onClick={() => scrollMovies(refContainer, "left")}
            >
              <ArrowLeftIcon fontSize="small" />
            </Avatar>
            <Avatar
              sx={{
                cursor: "pointer",
                color: "black",
                backgroundColor: "white",
                width: 32,
                height: 32,
              }}
              onClick={() => scrollMovies(refContainer, "right")}
            >
              <ArrowRightIcon fontSize="small" />
            </Avatar>
          </Box>
        )}
      </Box>
      <Movies ref={refContainer} sortBy={sortBy} />
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Section
        title="Most Watched This Week"
        to="top-watchedlist"
        refContainer={ref1}
        sortBy="popularity"
      />
      <Section
        title="Coming Soon"
        to="top-watchedlist"
        refContainer={ref2}
        sortBy="release_date_desc"
      />
      <Section
        title="Released This Week"
        to="top-watchedlist"
        refContainer={ref3}
        sortBy="this_week"
      />
    </Container>
  );
};

export default memo(Browse);
