import ResponsiveAppBar from "./myComponents/ResponsiveAppBar.js"
import Home from './myComponents/Home.js'
import Stack from 'react-bootstrap/Stack'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack>
          <ResponsiveAppBar/>
          <Home/>
        </Stack>
        
       
      </header>
    </div>
  );
}

export default App;
