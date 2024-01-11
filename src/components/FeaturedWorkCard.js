import React from 'react'
import featuredimg from "../assets/Rectangle30.png";
import './components.css'


const FeaturedWorkCard = () => {
    return (
        <div className={'featured-work-card'}>
            <div className="row">
                <div className="col-md-3">
                    <div className="">
                        <img src={featuredimg} className={'img-fluid'} alt={'feature-work-img'}/>
                    </div>

                </div>
                <div className="col-md-9">
                    <div className="">
                        <h2 className={'my-3'}>Designing Dashboards</h2>
                        <div className="d-flex align-items-center">
                            <p className={'me-3 featured-card-tag'}>2020</p>
                            <p className={'text-muted'}>Dashboard</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedWorkCard
