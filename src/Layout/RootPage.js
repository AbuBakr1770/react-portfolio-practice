import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootPage = () => {
    return (
        <>


            <div className="">
                <div className="container">
                    <Header/>
                </div>

                <Outlet/>

                <div className="container">
                    <Footer/>
                </div>
            </div>



        </>
    )
}
export default RootPage
