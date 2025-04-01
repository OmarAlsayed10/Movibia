import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(212, 212, 212)",
          width: "60%",
          borderRadius: "5px",
          
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
            
          height: "50px",
          display: "flex",
          alignItems: "center",
          padding: "0 15px",
          
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
    }
  },
});

export default theme;
