import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/Navbar1";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Logs from "./pages/Logs";
// import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import React,{useState} from "react";
import { SearchData } from "./components/UseContext";
export default function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <SearchData.Provider value={{value, setValue}}>
        <BrowserRouter>
          <NavScrollExample />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Logs" element={<Logs />} /> */}
            {/* <Route path="/Player/:moviename" element={<Player />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SearchData.Provider>


    </>
  );
}

// import "bootstrap/dist/css/bootstrap.min.css";
// import NavScrollExample from "./components/Navbar1";
// import Home from "./pages/Home";
// import Player from "./pages/Player";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavScrollExample />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Player/:moviename" element={<Player />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
