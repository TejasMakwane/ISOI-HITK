import React, { Fragment , useEffect } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import AllEventDatatable from "../components/event/AllEvent/AllEventDatatable";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const AllEvent = () => {

    const data = useSelector(state => state.user);
	const history = useHistory();

	useEffect(() => {
		if(!data){
			history.push("/login")
		}
	})

    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <PageTitle activeMenu="Event Datatable" motherMenu="Table" />
                    <div className="row">
                        <AllEventDatatable></AllEventDatatable>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AllEvent;
