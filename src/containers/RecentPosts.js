import React from 'react'
import './containers.css'
import RecentPostCard from "../components/RecentPostCard";

const RecentPosts = () => {
    return (
        <>
            <div className="Recent-post-div ">
                <div className="d-flex justify-content-between container">
                    <p>Recent posts</p>
                    <a href="/#" className={'text-decoration-none'}>View all</a>
                </div>

                <div className="Recent-posts container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="Recent-Post-Card">
                                <RecentPostCard/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Recent-Post-Card">
                                <RecentPostCard/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default RecentPosts
