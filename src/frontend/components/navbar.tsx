import { Avatar, Box, Button, Link, Menu, MenuItem} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { fetchByEmail,handleLogOutstate } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate=useNavigate()
    const {loggedIn} = useSelector((state:RootState)=>state.user)
    const [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null)
    const open = Boolean(anchorEl)

    useEffect(()=>{
      const email = localStorage.getItem("email")
      if(email){
        dispatch(fetchByEmail(email))
      }
      else{
        console.log("user not found")
      }
    },[dispatch])

    const handleLogOut=()=>{
      dispatch(handleLogOutstate())
      navigate("/")
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = ()=>{
      
      setAnchorEl(null)
    }

    return (
        <>
  
        <nav className="navbar navbar-expand-lg mb-4 p-2 z-3 z-2"
        style={{background: "rgba(0, 0, 0, 0.5)",backdropFilter:"blur(10px)",borderBottom:"1px solid (255,255,255,0.1)"
        }}
        >
        <div className="container-fluid">
          <Link underline="none" color="white" sx={{fontSize:"30px",fontWeight:"bold"}} href="/">Movibia</Link>
          <Button className="navbar-toggler" style={{borderColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{filter:"invert(1)"}}></span>
          </Button>
          <div className="collapse navbar-collapse ps-0 ps-lg-2" id="navbarSupportedContent">
        
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-lg-3 gap-xl-5 gap-3 ps-0 ps-lg-4 ps-xl-5 ms-xl-5">
              
                <Link underline="none" color="white" aria-current="page" href="/">Home</Link>
                <Link underline="none" color="white" aria-current="page" href="/browse">Browse</Link>
                <Link underline="none" color="white" href="/movies">Movies</Link>
                <Link underline="none" color="white" href="/tvshows">Tv Shows</Link>
                <Link underline="none" color="white" href="/kids">kids</Link>
            </ul>
            <Box sx={{display:"flex",alignItems:"center"}}>

            <Avatar
             sx={{width:"20px",
             height:"20px",
             background:"transparent",
             fontSize:"15px",
             cursor:"pointer" ,            
             }}>
              <SearchIcon/>
              </Avatar>
             

          
              { loggedIn ? (
                <Box sx={{paddingLeft:"20px"}}>
              <Box>
                <Avatar sx={{ cursor: "pointer" }} onClick={handleClick}>
                </Avatar>
                <Menu
                 anchorEl={anchorEl}
                 open={open}
                 onClose={handleClose}
                 disableScrollLock
                 >
                  <MenuItem sx={{display:"flex",gap:"20px"}}>
                    Welcome {localStorage.getItem("username")}
                  <Button sx={{minWidth: 'auto', "&:hover": {backgroundColor: "none"},color:"white", backgroundColor:"rgb(37, 37, 44)",borderRadius:"5px",padding:"5px 10px"}} onClick={handleLogOut}>
                    <LogoutIcon/>
                    </Button>
                  </MenuItem>
                  <MenuItem>
                <Link sx={{width:"100%"}} underline="none" color="black" href="/bookmarks">bookmarks</Link>
                  </MenuItem>
                  
                </Menu>
              </Box>
              </Box>
            ) : (
              <Button sx={{ marginLeft:"20px"}} href="/login" variant="outlined">
                <Link underline="none" sx={{ color: "white"}}>Sign In</Link>
              </Button>
            )}
          
              
              
            </Box>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar;
