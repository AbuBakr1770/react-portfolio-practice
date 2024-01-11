import React from 'react'
import './layout.css'
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <>

            <div className={'navbar-header'}>
                <h3 className={'abubakar'}>
                    <NavLink
                        to="/"
                        className={({isActive})=> isActive ? 'active-link' : 'unactive-link' }
                    >
                       <span className={'lemon text-capitalize'}>
                           abu bakar
                       </span>
                    </NavLink>
                </h3>
                <ul className={'navbarcss'}>
                    <li>
                        <NavLink
                            to="/blogs"
                            className={({isActive})=> isActive ? 'active-link' : 'unactive-link' }
                          >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/works"
                            className={({isActive})=> isActive ? 'active-link' : 'unactive-link' }
                        >
                            Works
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({isActive})=> isActive ? 'active-link' : 'unactive-link' }
                        >
                            Contact
                        </NavLink>

                    </li>
                </ul>
            </div>

        </>
    )
}
export default Header
