import React from 'react'
import FeaturedWorkCard from "../components/FeaturedWorkCard";
import MetaData from "../Layout/MetaData";

const WorksPage = () => {
    return (
        <>
            <MetaData title={'Abu Bakr - Works'}/>
            <div className={'container'}>
                <div className="work-heading">
                    <h2>
                        Work
                    </h2>
                </div>

                <div className="">
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                </div>
            </div>
        </>

    )
}
export default WorksPage
