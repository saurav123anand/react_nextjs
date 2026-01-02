import { Body } from "./components/Body"
import Header from "./components/Header"

export const AppLayout=()=>{
    return (
        <div className="App">
            {/* // Header Component */}
            <Header/>
            {/* // Body Component */}
            <Body/>
            {/* // Footer Component */}
        </div>
    )
}