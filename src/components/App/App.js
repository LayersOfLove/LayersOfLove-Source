import './App.css';
import Header from '../Header'
import SelectionGrid from '../SelectionGrid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Canvas from '../Canvas';
import InstructionBar from '../InstructionBar';
import Description from '../Description';
import CanvasShareBar from '../CanvasShareBar';
import Footer from '../Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <SelectionGrid />
        <Grid container>
          <Grid item md={3}>
            <InstructionBar />
          </Grid>
          <Grid item md={9}>
            <Canvas />
            <CanvasShareBar />
          </Grid>
          <Grid item xs={12}>
            <Description />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
