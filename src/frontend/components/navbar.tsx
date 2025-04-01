import { Avatar, Box, Button, Link } from "@mui/material";

const Navbar = () => {
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
          {/* <form className="position-relative d-flex justify-content-end">
              <input className="form-control me-2 my-3 my-lg-0 me-0 me-lg-5"
               style={{    background:" rgba(255, 255, 255, 0.2)",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "20px",
                outline: "none",
                width:"300px",
                height:"30px",
                transition: "all 0.3s ease-in-out",}}
               type="search"
               placeholder="Search"
               aria-label="Search"
               />
            </form> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-lg-3 gap-xl-5 gap-3 ps-0 ps-lg-4 ps-xl-5 ms-xl-5">
              
                <Link underline="none" color="white" aria-current="page" href="/">Home</Link>
                <Link underline="none" color="white" aria-current="page" href="/browse">Browse</Link>
                <Link underline="none" color="white" href="/movies">Movies</Link>
                <Link underline="none" color="white" href="/tvshows">Tv Shows</Link>
                <Link underline="none" color="white" href="/kids">kids</Link>
            </ul>
            <div className="d-flex ps-0 ps-lg-2 pt-3 pt-lg-0 align-items-center">

            <Avatar
             sx={{width:"20px",
             height:"20px",
             background:"transparent",
             fontSize:"15px",
             cursor:"pointer",
             
             }}>
              <i className="text-white bi bi-search top-0 fw-ligher"></i> 
              </Avatar>
              <Avatar sx={{
                 width:"20px",
                  height:"20px",
                  background:"transparent",
                  fontSize:"17px",
                  margin:"0 15px",
                  cursor:"pointer",
              }}><i className="bi bi-bookmark text-white"></i>
              </Avatar >

              <Box>
                <Box sx={{display:"flex" , flexDirection:"column",alignItems:"center",margin:"5px"}}>
                <Avatar></Avatar>
                </Box>
               <Button className="d-none" variant="outlined" sx={{color:'white'}}> <Link underline="none" href="/login"> sign in</Link> </Button>
              </Box>
              
            </div>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar;
