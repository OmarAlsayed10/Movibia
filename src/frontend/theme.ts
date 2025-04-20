import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(212, 212, 212)",
          width: "60%",
          borderRadius: "5px",
          '&.Mui-focusVisible': {
            backgroundColor: "transparent",
          }
          
        },
      },
    },
    
    MuiInputBase: {
      styleOverrides: {
        root: {
            
          display: "flex",
          alignItems: "center",
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px rgb(212, 212, 212) inset',
          
          },
          
        },
        input: {
          fontSize: "18px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
            border:"none",
          transition: "all 0.3s ease-in-out",
          
        },
        shrink: {
          top: "-12px",
          left:"-10px",
          fontSize: "18px",
        },
        
      },
    },
    MuiOutlinedInput:{
        styleOverrides:{
            notchedOutline:{
                border:"none"
            }
        }
    },
    MuiMenuItem:{
      styleOverrides:{
        root:{
          backgroundColor:"transparent",
          transition:"none",
          "&:hover":{
            transition:"none",
            backgroundColor:"transparent"
          },
          "&:active":{
            transition:"none",
            backgroundColor:"transparent"
          },
          '&.Mui-focusVisible': {
            backgroundColor: "transparent",
          }
        }
      },
      defaultProps:{
        disableRipple:true
      }
    },
    MuiMenu:{
      styleOverrides:{
        root:{
          backgroundColor:"transparent",
          transition:"none",
          "&:hover":{
            transition:"none",
            backgroundColor:"transparent"
          },
          "&:active":{
            transition:"none",
            backgroundColor:"transparent"
          },
          
          
        }
      }
    },
   
   
  },
});

export default theme;
