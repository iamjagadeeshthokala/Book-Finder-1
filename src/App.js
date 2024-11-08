import logo from './logo.svg';
import './App.css';
import BookFinder from './components/BookFinder';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
       <BookFinder/>
       <ToastContainer/>

    </div>
  );
}

export default App;
