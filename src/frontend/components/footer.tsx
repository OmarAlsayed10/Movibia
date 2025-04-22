import { Box, Container,Typography, Link, Divider, IconButton, Grid2 } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)",
             backdropFilter: "blur(10px)",
             borderTop: "1px solid rgba(255,255,255,0.1)", mt: 10, py: 6,
             color:"white"}}>

      <Container maxWidth="lg">
        <Grid2 container sx={{justifyContent:"space-between",flexDirection:{xs:"column",md:"row"},gap:"80px"}}>   
          <Grid2>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="h5" fontWeight="bold">Movibia</Typography>
            </Box>
            <Typography variant="body2" color="white" mb={2}>
             
            </Typography>
          
            <Box display="flex" gap={1}>
              <IconButton href="https://www.facebook.com/profile.php?id=100029446595732"  color="inherit"><FacebookIcon /></IconButton>
              <IconButton href="https://www.linkedin.com/in/omar-alsayed-101089233/" color="inherit"><LinkedInIcon /></IconButton>
              <IconButton href="https://github.com/OmarAlsayed10" color="inherit"><GitHubIcon /></IconButton>
            </Box>
          </Grid2>
         
          <Grid2>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Box sx={{display:"flex", flexDirection:"column", gap:"8px"}}>
            <Link href="#" color="white" underline="none" display="block">Billing questions</Link>
            <Link href="#" color="white" underline="none" display="block">Help Center</Link>
            </Box>
          </Grid2>

         
          <Grid2>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Company
            </Typography>
            <Box sx={{display:"flex", flexDirection:"column", gap:"8px"}}>
            <Link href="/about" color="white" underline="none" display="block">About Us</Link>
            <Link href="#" color="white" underline="none" display="block">Privacy Policy</Link>
            <Link href="#" color="white" underline="none" display="block">Terms of Service</Link>
            <Link href="#" color="white" underline="none" display="block">Contact</Link>
            </Box>
          </Grid2>
        </Grid2>

        
        <Divider sx={{ mt: 4, mb: 2 }} />
        <Typography variant="body2" color="white" align="center">
          © 2025 All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

