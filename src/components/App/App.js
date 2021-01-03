import './App.css';
import MyAppBar from '../AppBar/AppBar'
import SelectionGrid from '../SelectionGrid/SelectionGrid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Canvas from '../Canvas/Canvas';
import LayerControlBar from '../LayerControlBar/LayerControlBar';

export default function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Container maxWidth="md">
        <SelectionGrid />
        <Grid container>
          <Grid item xs={9}>
            <Canvas />
          </Grid>
          <Grid item xs={3}>
            <LayerControlBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
