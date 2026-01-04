import Header from "./src/components/Header"
import { Body } from "./src/components/Body"
import { Outlet } from "react-router"


export const AppLayout=()=>{
    return (
        <div className="App">
            {/* // Header Component */}
            <Header/>
            <Outlet/>
        </div>
    )
}