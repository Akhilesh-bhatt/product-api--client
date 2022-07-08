import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
