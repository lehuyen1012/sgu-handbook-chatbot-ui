// 2.50.0
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ChatBot from "./components/ChatBot";
import FAQPage from "./pages/FAQPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
    useEffect(() => {}, []);
    const [currentPage, SetCurrentPage] = useState("Home");
    return (
        <BrowserRouter>
            <div className="overflow-hidden">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="chat" element={<ChatBot />} />
                    <Route path="faq" element={<FAQPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
