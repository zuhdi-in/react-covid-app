import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        {/*
        * Render Halaman Home
        * Jika ingin diubah, maka ubah di Halaman Home.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<Indonesia />} />
          <Route path="/covid/provinsi" element={<Provinsi />} />
        </Routes>
      </Layout>
      
    </>
  );
}

export default App;
