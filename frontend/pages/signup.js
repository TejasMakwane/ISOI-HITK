import Head from "next/head";
import SignupForm from "../element/signupform";
import Footer from "../layout/footer";
import Header from "../layout/header";


function ContactUs1() {
	return (
		<>
			<Head>
				<title>ISOI-HITK | Signup</title>
			</Head>
			<Header />
			<div className="page-content bg-white">


				{/* <!-- Get A Quote --> */}
				<SignupForm />

				{/* <!-- Call To action --> */}
				<section style={{ "backgroundImage": "url(images/background/bg5.jpg)", "backgroundSize": "cover" }}>
					<div className="container">
						<div className="row action-box style-1 align-items-center">
							<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="section-head style-1">
									<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
									<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
								</div>
							</div>
							<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</>
	)
}

export default ContactUs1;