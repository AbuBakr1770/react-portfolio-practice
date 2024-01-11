import React from 'react'
import DownloadResume from "../containers/DownloadResume";
import './Pages.css'
import RecentPosts from "../containers/RecentPosts";
import FeaturedWorks from "../containers/FeaturedWorks";
import MetaData from "../Layout/MetaData";
import icon from '../assets/favicon.ico'

const HomePage = () => {
    return (
        <>
            <MetaData title={'Abu Bakr - Home'} icon={icon}/>

            <div className="">
                <DownloadResume/>
                <RecentPosts/>
                <FeaturedWorks/>
            </div>

        </>
    )
}
export default HomePage
