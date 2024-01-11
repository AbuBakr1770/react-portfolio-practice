import React from 'react'
import FeaturedWorkCard from "../components/FeaturedWorkCard";

const FeaturedWorks = () => {
    return (
        <div className="container mt-5">

            <div >
                <p>Featured works</p>
            </div>

            <div className="Featured-works-cards">
                    <FeaturedWorkCard/>
            </div>

            <div className="Featured-works-cards">
                    <FeaturedWorkCard/>
            </div>

            <div className="Featured-works-cards">
                    <FeaturedWorkCard/>
            </div>
            
            <div className="Featured-works-cards">
                    <FeaturedWorkCard/>
            </div>
        </div>
    )
}
export default FeaturedWorks
