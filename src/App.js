import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route path='/' component={HomeScreen} exact></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
