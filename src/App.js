import "./App.css";
import Signin from "./components/Signin";
import Dashboard from "./components/Events/Dashboard";
import NewEvent from "./components/Events/NewEvent";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboardlist from "./components/Events/Dashboardlist";

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ position: "relative" }}>
    <Routes>
    <Route path="/" element={<Signin />}/>
    <Route path="/Dashboard" element={ <Dashboard />}/>
    <Route path="/new-event" element={ <NewEvent />}/>
    <Route path="/Dashboardlist" element={ <Dashboardlist />}/>
    
      
       </Routes>
      

      
    </div>
    </BrowserRouter>
  );
}

export default App;
