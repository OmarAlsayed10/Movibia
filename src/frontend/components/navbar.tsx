import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchByEmail, handleLogOutstate } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state: RootState) => state.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const open = Boolean(anchorEl);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(fetchByEmail(email));
    } else {
      console.log("user not found");
    }
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(handleLogOutstate());
    navigate("/");
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
  
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          <Link href="/" underline="none" color="inherit">
            Movibia
          </Link>
        </Typography>


        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: { md: 3, lg: 4 },
            alignItems: "center",
          }}
        >
          {["Home", "Browse", "Movies", "Tv Shows", "Kids"].map((page) => (
            <Link
              key={page}
              href={`/${page === "Home" ? "" : page.toLowerCase().replace(" ", "")}`}
              underline="none"
              color="white"
              sx={{ fontSize: "1rem" }}
            >
              {page}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchBar />

          {loggedIn ? (
            <Box>
              <Avatar
                sx={{ cursor: "pointer", width: 40, height: 40 }}
                onClick={handleClick}
              />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", width: 200 }}>
                  <Typography variant="body2">
                    Welcome {localStorage.getItem("username")}
                  </Typography>
                  <IconButton size="small" onClick={handleLogOut}>
                    <LogoutIcon sx={{backgroundColor: "rgb(25, 24, 29)",color:"white",borderRadius:"7px",padding:"7px",fontSize:"30px"}} />
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/bookmarks" underline="none" color="black" sx={{ width: "100%" }}>
                    Bookmarks
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              variant="outlined"
              href="/login"
              sx={{ color: "white", borderColor: "white",p:"5px" }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>


      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {["Home", "Browse", "Movies", "Tv Shows", "Kids"].map((page) => (
            <ListItem button key={page} onClick={() => toggleDrawer(false)}>
              <Link
                href={`/${page === "Home" ? "" : page.toLowerCase().replace(" ", "")}`}
                underline="none"
                color="inherit"
                sx={{ width: "100%" }}
              >
                <ListItemText primary={page} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
