import { Routes, Route } from "react-router-dom";
import FirstList from "./Pages/List";

export default function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<FirstList/>}/>
            </Routes>
        </div>
    )
}
