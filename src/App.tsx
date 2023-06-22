import HomePage from './Pages/HomePage/HomePage';
import ShowPage from './Pages/ShowPage/ShowPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shows/:id" element={<ShowPage match={{
            params: {
              id: ''
            }
          }} />}/>

      </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
