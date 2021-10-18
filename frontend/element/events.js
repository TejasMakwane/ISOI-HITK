import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from 'next/link';


function Events() {
	const isMember = useSelector(state => state.memberDetails);
	const pEvents = useSelector(state => state.pEvents);
	console.log(pEvents);


	return (
		<>
			{/* <!-- Blog Large --> */}
			<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)", "backgroundSize": "contain" }}>
				<div className="container">

					{!isMember && (<div className="col-lg-12">
						<h2 className="blog-title">First get Your Membership </h2>
					</div>)}

					{isMember && (<div className="row extra-blog style-1">
						<div className="col-lg-12">
							<h2 className="blog-title">Resent Events </h2>
						</div>
						{
							pEvents.map((currElem) => {
								return (
									<div className="col-lg-4 col-md-4" key={currElem._id}>
										<div className="dlab-blog style-1 bg-white text-center m-b30">
											<div className="dlab-media">
												<img src={!pEvents ? `https://isoi-backend.herokuapp.com/uploads/poster/${currElem.eventPoster}` : `https://isoi-backend.herokuapp.com/uploads/poster/ISOI-Poster-1633931782725.png`} alt="Event Poster" />
											</div>
											<div className="dlab-info">
												<h5 className="dlab-title">
													<Link href={{ pathname: '/membership-events-details', query: { id : currElem._id } }}>{currElem.eventName}</Link>
												</h5>
												<p className="m-b0">{currElem.eventDescription}</p>
												<div className="dlab-meta meta-bottom">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>{currElem.eventDate}</li>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>From {currElem.eventTime}</li>
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
								)
							})
						}
					</div>)}
				</div>
			</section>

		</>
	)
}

export default Events;