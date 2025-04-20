import { Box, Typography, Link as MuiLink, Container, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        color: "white",
        mt: 5,
        py: 3,
      }}
    >
      <Container maxWidth="xl">

        <Box textAlign="center" mb={3}>
          <Link  href="/" sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
          <Typography variant="h3">
            Movibia
          </Typography>
          </Link>
        </Box>

        <Box display="flex" justifyContent="center" gap="50px" marginBottom="40px">
          <Box display="flex" flexDirection="column" gap="10px" alignItems="start">
          <Typography  sx={{fontSize:"20px"}}>Company</Typography>
          <Link href="/about" sx={{textDecoration:"none",color:"rgba(255,255,255,0.7)" , fontSize:"13px"}}>About</Link>
          <Link href="/contact" sx={{textDecoration:"none",color:"rgba(255,255,255,0.7)" , fontSize:"13px"}}>Partners</Link>         
          </Box>
          <Box display="flex" flexDirection="column" gap="10px" alignItems="start">
          <Typography  sx={{fontSize:"20px"}}>Support</Typography>
          <Link href="/contact" sx={{textDecoration:"none",color:"rgba(255,255,255,0.7)" , fontSize:"13px"}}>contact us</Link>
          <Link href="/contact" sx={{textDecoration:"none",color:"rgba(255,255,255,0.7)" , fontSize:"13px"}}>Community Forms</Link>
          <Link href="/contact" sx={{textDecoration:"none",color:"rgba(255,255,255,0.7)" , fontSize:"13px"}}>Billing questions</Link>
          
          </Box>
    
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">

          <Typography variant="body2">
            &copy; 2024 Reserved to{" "}
            <MuiLink href="https://github.com/OmarxKira" target="_blank" sx={{ color: "white", textDecoration: "underline" }}>
              OmarAlsayed
            </MuiLink>
          </Typography>

          <Box display="flex" gap={2}>
            <MuiLink href="https://www.facebook.com/profile.php?id=100029446595732" target="_blank" sx={{ color: "white" }}>
              <FacebookIcon fontSize="large" />
            </MuiLink>
            <MuiLink href="https://www.linkedin.com/in/omar-alsayed-101089233/" target="_blank" sx={{ color: "white" }}>
              <LinkedInIcon fontSize="large" />
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
