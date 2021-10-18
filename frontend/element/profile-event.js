import { useRouter } from 'next/router'
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux"
import { logout, setUserDetails } from "../redux/actions/index"
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
function onChange(value) {
    console.log("Captcha value:", value);
}

function ProfileEvent() {

    const data = useSelector(state => state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const isMember = false;

    useEffect(() => {
        dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
        
    }, [])


    const logoutUser = () => {
        router.push("/");
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        dispatch(logout());
    }

    const [asd, setAsd] = useState();
    const settings = {
        dots: true,
        arrows: true,
        centerMode: false,
        slidesToShow: 2,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        responsive: [
            
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    };
 
    return (
        <>
            <section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)", }}>
                <div>

                    <div className="container" style={{marginTop: "40px", marginBottom: "40px"}}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                    <div className="border-bottom p-4">
                                        <div className="osahan-user text-center">
                                            <div className="osahan-user-media">
                                                <img className="mb-3 rounded-pill shadow-sm mt-1" src={!data ? `images/avatar1.png` : `https://isoi-backend.herokuapp.com/uploads/${data.picture}`} />
                                                <div className="osahan-user-media-body">
                                                    <h6 className="mb-2">{data && data.name}</h6>
                                                    <p class="mb-1">{data && data.phone}</p>
                                                    <p>{data && data.email}</p>
                                                    {isMember && (<p className="text-success font-weight-bold "><i class="fa fa-shield" aria-hidden="true"></i>&nbsp; Member of ISOI-HITK</p>)}
                                                    <br />

                                                    <a onClick={logoutUser} style={{ cursor: 'pointer' }} class="text-primary mr-3" data-target="#edit-profile-modal">
                                                        <i class="icofont-logout" />Logout
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav  flex-column border-0 pt-4" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link href="/profile/dashboard">
                                                <a className="nav-link "><i className="icofont-search-user" /> My Account</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="nav  flex-column border-0 pt-4" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link href="/profile/membership-event">
                                                <a className="nav-link active"><i className="icofont-dropbox" /> Membership Events</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                            <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                            <h4 className="font-weight-bold mt-0 mb-4">Latest Events</h4>
                                <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{ "position": "relative" , marginBottom: "20px" }}>
                                    <Slider ref={c => setAsd(c)}
                                        {...settings}
                                    >
                                        <div
                                            className="item wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dlab-blog style-1 bg-white text-center">
                                                <div className="dlab-media">
                                                    <img src="images/blog/default/thum2.jpg" alt="" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="dlab-title">
                                                        <a href="/blog-large-right-sidebar">Industry Academia Interaction series.</a>
                                                    </h5>
                                                    <p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".</p>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>9th April 2021</li>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>From 7:00 pm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-share"><i className="flaticon-share"></i>
                                                                <ul>
                                                                    <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                                    <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                                    <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="item wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dlab-blog style-1 bg-white text-center">
                                                <div className="dlab-media">
                                                    <img src="images/blog/default/thum2.jpg" alt="" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="dlab-title">
                                                        <a href="/blog-large-right-sidebar">Industry Academia Interaction series.</a>
                                                    </h5>
                                                    <p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".</p>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>9th April 2021</li>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>From 7:00 pm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-share"><i className="flaticon-share"></i>
                                                                <ul>
                                                                    <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                                    <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                                    <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="item wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dlab-blog style-1 bg-white text-center">
                                                <div className="dlab-media">
                                                    <img src="images/blog/default/thum2.jpg" alt="" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="dlab-title">
                                                        <a href="/blog-large-right-sidebar">Industry Academia Interaction series.</a>
                                                    </h5>
                                                    <p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".</p>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>9th April 2021</li>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>From 7:00 pm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-share"><i className="flaticon-share"></i>
                                                                <ul>
                                                                    <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                                    <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                                    <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="item wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dlab-blog style-1 bg-white text-center">
                                                <div className="dlab-media">
                                                    <img src="images/blog/default/thum2.jpg" alt="" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="dlab-title">
                                                        <a href="/blog-large-right-sidebar">Industry Academia Interaction series.</a>
                                                    </h5>
                                                    <p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".</p>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>9th April 2021</li>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>From 7:00 pm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-share"><i className="flaticon-share"></i>
                                                                <ul>
                                                                    <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                                    <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                                    <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="item wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dlab-blog style-1 bg-white text-center">
                                                <div className="dlab-media">
                                                    <img src="images/blog/default/thum2.jpg" alt="" />
                                                </div>
                                                <div className="dlab-info">
                                                    <h5 className="dlab-title">
                                                        <a href="/blog-large-right-sidebar">Industry Academia Interaction series.</a>
                                                    </h5>
                                                    <p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".</p>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>9th April 2021</li>
                                                            <li className="post-date"><i className="flaticon-clock m-r10"></i>From 7:00 pm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="dlab-meta meta-bottom">
                                                        <ul>
                                                            <li className="post-share"><i className="flaticon-share"></i>
                                                                <ul>
                                                                    <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                                    <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                                    <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br />
                                                    <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section >
            
        </>
    )
}

export default ProfileEvent;
