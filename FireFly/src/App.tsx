import { Route, Routes } from "react-router";
import "./App.css";
import Conflicts from "./pages/Conflicts";
import Potential from "./pages/Potential";
import Events from "./pages/Events";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Conflicts />}></Route>
        <Route path='/Conflicts' element={<Conflicts />}></Route>
        <Route path='/Potential' element={<Potential />}></Route>
        <Route path='/Events' element={<Events />}></Route>
      </Routes>
    </>
  );
}

export default App;
