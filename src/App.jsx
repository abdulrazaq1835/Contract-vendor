import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Contracts from "./pages/Contracts";
import NewContract from "./pages/NewContract";
import Footer from "./components/Footer";
import NotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/contracts" element={<Contracts/>} />
          

<Route path="/new-contract" element={<NewContract />} />

<Route path="*" element={<NotFound />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
