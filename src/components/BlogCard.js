import React from 'react'

const BlogCard = () => {
    return (
        <>
            <div className="Blog-Card">
                <h1>UI Interactions of the week</h1>
                <span className={'d-flex'}>
                    <p className={'me-1'}>12 Feb 2019</p>
                    <p className={'mx-1'}>|</p>
                    <p className={'ms-1 text-muted'}>Express, Handlers</p>
                </span>
                <p className={'text-start'}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </>
    )
}
export default BlogCard
