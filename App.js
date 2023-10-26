import { Routes, Route } from "react-router-dom";
import FirstList from "./Pages/List";
import AddPage from "./Pages/Add";
import EditPage from "./Pages/Edit";
import HomePage from "./Pages/HomePage";

export default function App(){
    return(
        <div>
            <Routes>
                <Route index element={<HomePage/>}/>
                {/* <Route path="/"/> */}
                <Route path="/listpage" element={<FirstList/>}/>
                <Route path="/addpage" element={<AddPage/>}/>
                <Route path="/editpage" element={<EditPage/>}/>
            </Routes>
        </div>
    )
}
