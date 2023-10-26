import Compforlist from "../Components/Compforlist";
import { Link } from "react-router-dom";
export default function HomePage(){
    return(
        <>
        <Compforlist/>
        <h1>Welcome to Sample React App</h1>
        <Link to={"/listpage"}>List Page</Link><br/><br/>       
        <Link to={"/addpage"}>Add Page</Link><br/><br/>
        <Link to={"/editpage"}>Edit Page</Link>
        {/* <h1>Welcome to Sample React App</h1> */}
        </>
    )
}