import React from 'react'
import {Helmet} from "react-helmet";
import defaultIcon from '../assets/favicon.ico'

const MetaData = (props) => {
    const {title, icon} = props
    return (
        <div>
            <Helmet>
                <title>
                    {title}
                </title>
                <link rel="icon" href={icon ? icon : defaultIcon}/>
            </Helmet>
        </div>
    )
}
export default MetaData
