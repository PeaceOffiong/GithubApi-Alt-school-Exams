import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home, Repositories, SingleRepository, ErrorPage, TestErrorBoundary } from "./Pages";


function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Repositories" element={<Repositories />} />
        <Route
          path="Repositories/SingleRepositories/:id"
          element={<SingleRepository />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/testerrorboundary" element={<TestErrorBoundary />}></Route>
      </Routes>
    </section>
  );
}

export default App;
