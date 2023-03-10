import List from './components/List';
import Map from './components/Map';
import PlaceDesc from './components/PlaceDesc';
import { CssBaseline, Grid } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <CssBaseline/>
      <Navbar />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>      
      <PlaceDesc />      
    </>
  );
}

export default App;
