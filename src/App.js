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

//for xss
import XSS from "./pages/lab/xss/index"; 
import XSSLab1 from "./pages/lab/xss/lab1/lab1";
import XSSLab2 from "./pages/lab/xss/lab1/lab2";
import XSSLab3 from "./pages/lab/xss/lab1/lab3";
import XSSLab4 from "./pages/lab/xss/lab1/lab4";
import XSSLab5 from "./pages/lab/xss/lab1/lab5";

//for commandinjection
import CommandInjection from './pages/lab/commandinjection/index';
// import CommandInjectionLab1 from './pages/lab/commandinjection/lab/lab1';
import CommandInjectionLab1 from './pages/lab/commandinjection/lab/lab1';
import CommandInjectionLab2 from './pages/lab/commandinjection/lab/lab2';
import CommandInjectionLab3 from './pages/lab/commandinjection/lab/lab3';
import CommandInjectionLab4 from './pages/lab/commandinjection/lab/lab4';

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


                {/* xss */}
                <Route path="/lab/xss" element={<XSS />} />
                <Route path="/lab/xss/lab1" element={<XSSLab1 />} />
                <Route path="/lab/xss/lab2" element={<XSSLab2 />} />
                <Route path="/lab/xss/lab3" element={<XSSLab3 />} />
                <Route path="/lab/xss/lab4" element={<XSSLab4 />} />
                <Route path="/lab/xss/lab5" element={<XSSLab5 />} />

                {/* commandinjection */}
                <Route path="/lab/commandinjection" element={<CommandInjection />} />
                <Route path="/lab/commandinjection/lab1" element={<CommandInjectionLab1 />} />
                <Route path="/lab/commandinjection/lab2" element={<CommandInjectionLab2 />} />
                <Route path="/lab/commandinjection/lab3" element={<CommandInjectionLab3 />} />
                <Route path="/lab/commandinjection/lab4" element={<CommandInjectionLab4 />} />

            </Routes>
        </Router>
    );
}

export default App;
