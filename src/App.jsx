import { useState } from "react";
import { Box, Grid, Typography,Button,Modal } from "@mui/material";
import { gridStyles } from "./App.styles";
import { pink } from '@mui/material/colors';
import NextButton from "./components/nextButton/NextButton";

function App() {
  const color=pink[500];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <>
  <Grid container spacing={2}>
    <Grid  size={{ xs: 12, md: 12, lg:12 }} sx={gridStyles.grid}>
      <Box >
        <Typography variant="h5" sx={gridStyles.typo} >
          Bienvenido
        </Typography>
      </Box>
    </Grid>
    <Grid  size={{ xs: 12, md: 8, lg:8 }} sx={gridStyles.grid}>
      <Box >
        <Typography variant="h1" sx={gridStyles.typo} >
          1 de 2 
        </Typography>
      </Box>
    </Grid>
    <Grid  size={{ xs: 12, md: 4, lg:4 }} sx={{...gridStyles.grid, display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button onClick={handleOpen}>Open modal</Button>
      </Box>
    </Grid>
  </Grid> 

  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={gridStyles.modal}>
    <Grid container spacing={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Grid item xs={12} md={6} lg={6} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography variant="h6" sx={gridStyles.typo}>
          Agregar item
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Grid container spacing={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Grid item xs={12} md={6} lg={6}>
          <h2>Nombre</h2>
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
          <h2>Nombre</h2>
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
          <h2>Nombre</h2>
          </Grid>
        </Grid>
       
      </Grid>
    </Grid>
  </Box>
</Modal>
  
  </>;
}

export default App;
