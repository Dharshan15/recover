import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Recoverpage from './recoverpage';
import Passreset from './passreset';
import Passwordreset from './passwordreset';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' element={<Recoverpage />}></Route>
      <Route path='/pwdreset' element={<Passwordreset />}></Route>
      <Route path='/otp' element={<Passreset />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
