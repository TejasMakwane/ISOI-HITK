import React, { Fragment } from "react";

import Multistep from "react-multistep";

import StepOne from "./FreeStepOne";
import StepTwo from "./FreeStepTwo";
import StepThree from "./FreeStepThree";
import PageTitle from "../../../layouts/PageTitle";

const FreeEvent = () => {
   const steps = [
      { name: "Event Info", component: <StepOne /> },
      { name: "Event Details", component: <StepTwo /> },
      { name: "Contact Details", component: <StepThree /> },
   ];
   const prevStyle = {
      background: "#F7FAFC",
      borderWidth: "0px",
      color: "#333333",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "600",
      padding: "0.55em 2em",
      border: "1px solid #EEEEEE",
      marginRight: "1rem",
   };
   const nextStyle = {
      background: "#DD2F6E",
      borderWidth: "0px",
      color: "#fff",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "600",
      padding: "0.55em 2em",
   };
   return (
      <Fragment>
         <PageTitle headingPara="Your Event Createing dashboard" activeMenu="Free Event Detail" motherMenu="Event" />

         <div className="row">
            <div className="col-xl-12 col-xxl-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Free Event Details</h4>
                  </div>
                  <div className="card-body">
                     <form
                        onSubmit={(e) => e.preventDefault()}
                        id="step-form-horizontal"
                        className="step-form-horizontal"
                     >
                        <Multistep
                           showNavigation={true}
                           steps={steps}
                           prevStyle={prevStyle}
                           nextStyle={nextStyle}
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default FreeEvent;
