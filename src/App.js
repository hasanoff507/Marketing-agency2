import React,{useState} from "react";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Loader from "./components/Loader/index"

function App() {
const [loader, setLoader] = useState(true)
setTimeout(()=>{
setLoader(false)
},3000)
  
  return (
    <>
           {


loader === true ? <Loader/> : (
<>
<BrowserRouter>
                   <Routes>
                       <Route path={"/"} element={<Home/>}/>
                       <Route path="/success" element={ <Success/>} />
                   </Routes>
               </BrowserRouter>
                <Footer />
</>
)
           }     

         
               
    </>
  );
}

export default App;
