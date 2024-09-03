import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddEmployee from "./components/AddEmployee";
import Home from "./components/Home";


export default function App() {
  return (
    <>
     
     <Router>
       <Navbar />
       <Routes>
         {/* // http://localhost:3000  */}
         <Route path='/' exact element = {<Home />}></Route>
         {/* // http://localhost:3000/addEmployee  */}
         <Route path='/add-employee' element = {<AddEmployee />}></Route>
       </Routes>
     </Router>
    </>
  )
}