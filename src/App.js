import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/landingpage";
import Insight from "./pages/insight/insight"; 
import Lab from "./pages/lab/lab";  

import WindowsPentesting from "./pages/insight/windows";
import Linux from "./pages/insight/linux/Linux";  // ✅ FIXED IMPORT
import SqlInjection from "./pages/lab/sql-injection/index";  
import Lab1 from "./pages/lab/sql-injection/lab1/lab1";  
import Lab2 from "./pages/lab/sql-injection/lab2/lab2";  
import Lab3 from "./pages/lab/sql-injection/lab3/lab3"; 
import SQLInjectionFlag1 from "./pages/lab/sql-injection/lab1/sql_injection_flag1";
import SQLInjectionFlag2 from "./pages/lab/sql-injection/lab2/sql_injection_flag2";

import WebPentesting from "./pages/insight/webs/WebPentesting";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/insight" element={<Insight />} />
                <Route path="/lab" element={<Lab />} />  
                <Route path="/lab/sql-injection" element={<SqlInjection />} />  
                <Route path="/lab/sql-injection/lab1" element={<Lab1 />} />  
                <Route path="/lab/sql-injection/lab2" element={<Lab2 />} />
                <Route path="/lab/sql-injection/lab3" element={<Lab3 />} />
                <Route path="/lab/sql-injection/lab1/sql_injection_flag1" element={<SQLInjectionFlag1 />} />
                <Route path="/lab/sql-injection/lab2/sql_injection_flag2" element={<SQLInjectionFlag2 />} />
                <Route path="/insight/webs/WebPentesting" element={<WebPentesting />} />

                <Route path="/insight/windows" element={<WindowsPentesting />} />
                <Route path="/insight/linux" element={<Linux />} />  {/* ✅ FIXED PATH */}
            </Routes>
        </Router>
    );
}

export default App;
