import React from 'react'
import BlogCard from "../components/BlogCard";
import MetaData from "../Layout/MetaData";

const Blogs = () => {
    return (
        <>
            <MetaData title={'Abu Bakr - Blogs'}/>
            <div>
                <div className="Blogs-Container container">


                    <div className="d-flex justify-content-center">


                        <div className="Blog-Cards-div">
                            <div className="blog-heading">
                                <h1>Blogs</h1>
                            </div>


                            <BlogCard/>
                            <BlogCard/>
                            <BlogCard/>
                            <BlogCard/>
                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}
export default Blogs
