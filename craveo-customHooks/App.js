import Header from "./src/components/Header"
import { Outlet } from "react-router-dom";


export const AppLayout=()=>{
    return (
        <div className="App">
            {/* // Header Component */}
            <Header/>
            <Outlet/>
        </div>
    )
}