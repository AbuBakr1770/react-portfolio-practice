import React from 'react'
import profileimg from '../assets/Ellipse1.png'
import profileimg2 from '../assets/abubakar.jpg'

const DownloadResume = () => {
    return (
        <>
        <div className="download-resume-div container">
            <div className="row download-resume-div2 ">
                <div className="col-md-6">
                    <div className="detail-text-div">
                        <h1 className={''}>
                            Hi, I am John,
                            Creative Technologist
                        </h1>

                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>

                        <div className="download-resume-btn-div">
                            <button className={'download-resume-btn'}>
                                Download Resume
                            </button>
                        </div>


                    </div>

                </div>

                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="img-cover">
                            <img className={'profile-img'} src={profileimg} alt={'profile image'}/>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    </>)
}
export default DownloadResume
