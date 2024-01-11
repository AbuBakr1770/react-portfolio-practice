import React from 'react'
import './components.css'

const RecentPostCard = () => {
    return (
        <>

                <div className="Recent-post-card">
                    <h3>
                        Making a design system from scratch
                    </h3>

                    <div className="d-flex mt-4">
                        <p className={'me-2'}>
                            12 Feb 2020
                        </p>
                        <p className={'mx-1'}>
                            |
                        </p>

                        <p className={'ms-2'}>
                            Design,Pattern
                        </p>
                    </div>

                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>

                </div>


        </>
    )
}
export default RecentPostCard
