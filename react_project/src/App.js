import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import Create from "./components/Create";
import Error from "./components/Error";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Note from "./components/Note";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="main">
<Router>
<Header></Header>
<Routes>
<Route exact path = '/' element = {<Main/>}/>
<Route path = '/about' element = {<About/>}/>
<Route path = '/create' element = {<Create/>}/>
<Route exact path = '/note' element = {<Note/>}/>
<Route exact path = '/note/:noteURL' element = {<Note/>}/>
<Route component = {<Error/>}/>

</Routes>
<Footer></Footer>
</Router>
    </div>
  );
}

export default App;
