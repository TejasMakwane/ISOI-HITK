import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
//** Import Image */

import profile from "../../images/profile/profile.png";

const AdminProfile = () => {
    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row page-titles mx-0">
                        <div className="col-sm-6 p-md-0">
                            <div className="welcome-text">
                                <h4>Howdy, Welcome Back!</h4>
                                <p className="mb-0">Your ISOI_HITK Dashboard </p>
                            </div>
                        </div>
                        <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"#"}>App</Link></li>
                                <li className="breadcrumb-item active"><Link to={"#"}>Profile</Link></li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="profile card card-body px-3 pt-3 pb-0">
                                <div className="profile-head">
                                    <div className="photo-content">
                                        <div className="cover-photo"></div>
                                    </div>
                                    <div className="profile-info">
                                        <div className="profile-photo">
                                            <img src={profile} className="img-fluid rounded-circle" alt="profile" />
                                        </div>
                                        <div className="profile-details">
                                            <div className="profile-name px-3 pt-2">
                                                <h4 className="text-primary mb-0">
                                                    Heritageit Admin
                                                </h4>
                                                <p>Systems Administrator</p>
                                            </div>
                                            <div className="profile-email px-2 pt-2">
                                                <h4 className="text-muted mb-0">
                                                    hello@email.com
                                                </h4>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AdminProfile;
