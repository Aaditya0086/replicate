import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainDesign from "./components/design/MainDesign.js";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          {/* <Navbar refToScrollCertifications={scrollToComponentRefCe} refToScrollProducts={scrollToComponentRefP} refToScrollAbout={scrollToComponentRefA} refToScrollContact={scrollToComponentRefCo} refToScrollMap={scrollToComponentRefM} /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={<MainDesign/>}
            />

            {/* <Route exact path="/members" element={<Members />} /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
