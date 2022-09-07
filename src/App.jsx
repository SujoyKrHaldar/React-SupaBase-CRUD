import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Create from "./pages/Create";
import View from "./pages/View";
import Update from "./pages/Update";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        {/* <Toaster /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<View />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
