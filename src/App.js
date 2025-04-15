import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';

import LandingPage from "./pages/home/landingpage";
import Insight from "./pages/insight/insight"; 
import Lab from "./pages/lab/lab"; 
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";  

import WebPentesting from "./pages/insight/webs/WebPentesting";
import WindowsPentesting from "./pages/insight/windows/windows";
import Linux from "./pages/insight/linux/Linux";  // ✅ FIXED IMPORT


// sql injection
import SqlInjection from "./pages/lab/sql-injection/index";  
import Lab1 from "./pages/lab/sql-injection/lab1/lab1";  
import SQLInjectionFlag1 from "./pages/lab/sql-injection/lab1/sql_injection_flag1";
import Lab2 from "./pages/lab/sql-injection/lab2/lab2";  
import Lab3 from "./pages/lab/sql-injection/lab3/lab3"; 
import Lab4 from "./pages/lab/sql-injection/lab4/lab4"; 



//for xss
import XSS from "./pages/lab/xss/index"; 
import XSSLab1 from "./pages/lab/xss/lab1/lab1";
import XSSLab2 from "./pages/lab/xss/lab1/lab2";
import XSSLab3 from "./pages/lab/xss/lab1/lab3";
import XSSLab4 from "./pages/lab/xss/lab1/lab4";
import XSSLab5 from "./pages/lab/xss/lab1/lab5";
import XSSLab6 from "./pages/lab/xss/lab1/lab6";

//for commandinjection
import CommandInjection from './pages/lab/commandinjection/index';
import CommandInjectionLab1 from './pages/lab/commandinjection/lab/lab1';
import CommandInjectionLab2 from './pages/lab/commandinjection/lab/lab2';
import CommandInjectionLab3 from './pages/lab/commandinjection/lab/lab3';
import CommandInjectionLab4 from './pages/lab/commandinjection/lab/lab4';

//information disclosure
import InformationDisclosure from './pages/lab/informationdisclosure/index';
import InformationDisclosureLab1 from './pages/lab/informationdisclosure/lab/lab1';
import InformationDisclosureLab2 from './pages/lab/informationdisclosure/lab/lab2';
import InformationDisclosureLab3 from './pages/lab/informationdisclosure/lab/lab3';
import InformationDisclosureLab4 from './pages/lab/informationdisclosure/lab/lab4';
import InformationDisclosureLab5 from './pages/lab/informationdisclosure/lab/lab5';


//PathTraversal
import PathTraversal from './pages/lab/pathtraversal/index';
import PathTraversalLab1 from './pages/lab/pathtraversal/lab/lab1';
import PathTraversalLab2 from './pages/lab/pathtraversal/lab/lab2';
import PathTraversalLab3 from './pages/lab/pathtraversal/lab/lab3';
import PathTraversalLab4 from './pages/lab/pathtraversal/lab/lab4';


//ssti
import SSTI from './pages/lab/ssti/index';
import SSTILab1 from './pages/lab/ssti/lab/lab1';
import SSTILab2 from './pages/lab/ssti/lab/lab2';
import SSTILab3 from './pages/lab/ssti/lab/lab3';

//ssrf
import SSRF from './pages/lab/ssrf/index';
import SSRFLab1 from './pages/lab/ssrf/lab/lab1';
import SSRFLab2 from './pages/lab/ssrf/lab/lab2';
import SSRFLab3 from './pages/lab/ssrf/lab/lab3';
import SSRFLab4 from './pages/lab/ssrf/lab/lab4';
import SSRFLab5 from './pages/lab/ssrf/lab/lab5';

//file upload
import FileUpload from './pages/lab/fileupload/index';
import FileUploadLab1 from './pages/lab/fileupload/lab/lab1';
import FileUploadLab2 from './pages/lab/fileupload/lab/lab2';
import FileUploadLab3 from './pages/lab/fileupload/lab/lab3';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/insight" element={<Insight />} />
                <Route path="/lab" element={<Lab />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />  

                <Route path="/insight/webs/WebPentesting" element={<WebPentesting />} />
                <Route path="/insight/windows" element={<WindowsPentesting />} />
                <Route path="/insight/linux" element={<Linux />} />  

                <Route path="/lab/sql-injection" element={<SqlInjection />} />  
                <Route path="/lab/sql-injection/lab1" element={<Lab1 />} />  
                <Route path="/lab/sql-injection/lab2" element={<Lab2 />} />
                <Route path="/lab/sql-injection/lab3" element={<Lab3 />} />
                <Route path="/lab/sql-injection/lab4" element={<Lab4 />} />
                <Route path="/lab/sql-injection/lab1/sql_injection_flag1" element={<SQLInjectionFlag1 />} />
                

                {/* xss */}
                <Route path="/lab/xss" element={<XSS />} />
                <Route path="/lab/xss/lab1" element={<XSSLab1 />} />
                <Route path="/lab/xss/lab2" element={<XSSLab2 />} />
                <Route path="/lab/xss/lab3" element={<XSSLab3 />} />
                <Route path="/lab/xss/lab4" element={<XSSLab4 />} />
                <Route path="/lab/xss/lab5" element={<XSSLab5 />} />
                <Route path="/lab/xss/lab6" element={<XSSLab6 />} />

                {/* commandinjection */}
                <Route path="/lab/commandinjection" element={<CommandInjection />} />
                <Route path="/lab/commandinjection/lab1" element={<CommandInjectionLab1 />} />
                <Route path="/lab/commandinjection/lab2" element={<CommandInjectionLab2 />} />
                <Route path="/lab/commandinjection/lab3" element={<CommandInjectionLab3 />} />
                <Route path="/lab/commandinjection/lab4" element={<CommandInjectionLab4 />} />

               {/* informationdisclosure */}
               <Route path="/lab/informationdisclosure" element={<InformationDisclosure />} />
               <Route path="/lab/informationdisclosure/lab1" element={<InformationDisclosureLab1 />} />
               <Route path="/lab/informationdisclosure/lab2" element={<InformationDisclosureLab2 />} />
               <Route path="/lab/informationdisclosure/lab3" element={<InformationDisclosureLab3 />} />
               <Route path="/lab/informationdisclosure/lab4" element={<InformationDisclosureLab4 />} />
               <Route path="/lab/informationdisclosure/lab5" element={<InformationDisclosureLab5 />} />
                
                {/* pathtraversal */}
                <Route path="/lab/pathtraversal" element={<PathTraversal />} />
                <Route path="/lab/pathtraversal/lab1" element={<PathTraversalLab1 />} />
                <Route path="/lab/pathtraversal/lab2" element={<PathTraversalLab2 />} />
                <Route path="/lab/pathtraversal/lab3" element={<PathTraversalLab3 />} />
                <Route path="/lab/pathtraversal/lab4" element={<PathTraversalLab4 />} />

                {/* SSTI */}
                <Route path="/lab/ssti" element={<SSTI />} />
                <Route path="/lab/ssti/lab1" element={<SSTILab1 />} />
                <Route path="/lab/ssti/lab2" element={<SSTILab2 />} />
                <Route path="/lab/ssti/lab3" element={<SSTILab3 />} />

                {/* SSRF */}
                <Route path="/lab/ssrf" element={<SSRF />} />
                <Route path="/lab/ssrf/lab1" element={<SSRFLab1 />} />
                <Route path="/lab/ssrf/lab2" element={<SSRFLab2 />} />
                <Route path="/lab/ssrf/lab3" element={<SSRFLab3 />} />
                <Route path="/lab/ssrf/lab4" element={<SSRFLab4 />} />
                <Route path="/lab/ssrf/lab5" element={<SSRFLab5 />} />
                
                {/* File Upload */}
                <Route path="/lab/fileupload" element={<FileUpload />} />
                <Route path="/lab/fileupload/lab1" element={<FileUploadLab1 />} />
                <Route path="/lab/fileupload/lab2" element={<FileUploadLab2 />} />
                <Route path="/lab/fileupload/lab3" element={<FileUploadLab3 />} />
            </Routes>
        </Router>
    );
}

export default App;
