import "./App.css";
import Signin from "./components/Signin";
import Dashbroad from "./components/Events/Dashbroad";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ position: "relative" }}>
    <Routes>
    <Route path="/" element={<Signin />}/>
    <Route path="/Dashbroad" element={ <Dashbroad />}/>
    
      
       </Routes>
      

      
    </div>
    </BrowserRouter>
  );
}

export default App;
