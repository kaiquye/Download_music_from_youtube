import './App.css';
import { AppRoutes } from './routes/index';
import { NavBar } from './components/appBar/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
