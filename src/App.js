import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home, Repositories, SingleRepository, ErrorPage } from "./Pages";


function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repositories" element={<Repositories />}>
          <Route path=":id" element={ <SingleRepository/>} />
        </Route>
        <Route path="*" element={ <ErrorPage/>} />
      </Routes>
    </section>
  );
}

export default App;
