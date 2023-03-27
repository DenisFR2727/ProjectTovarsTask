import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<Main/>} />
               <Route path="/tovarlist" element={<Main selectedMenu="Tovar List"/>} />
               <Route path="/addtovars" element={<Main selectedMenu="Add Tovars"/>} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}
export default App;
