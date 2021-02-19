import React from "react";
import "./MainPage.css"


function FirstSegment() {
    let heading = 'Chronicle';
    let subheading = 'Consumer Tech: Make it a reality'
    return (
        <div className="Main_page_first_segment">
            <div className = "FirstSegment_background">
                
            </div>
            <div>
                <h1 className="Chronicle_heading"> {heading}</h1>
                <h1 className = "Hackathon_detail"> Hackathon 2021</h1>
                <h2 className = "Hackathon_topic">Consumer Tech: make it a reality</h2>
                <h2 className = "Hackathon_date">15th – 21st of March</h2>
                <p className = "Hackathon_description">Chronicle is an annual hackathon hosted by the Google Developers Student Club - University of Melbourne (DSC Unimelb). This year, it’ll be held virtually and open to all university students around the world. 

    The theme for this year is Consumer Tech: Make It a Reality.  Consumer Technology is any kind of technology that an individual, company or organization would purchase for completing tasks and meeting their needs. </p>
            </div>
        </div>
    )
}

function MainPage(){
    return (
        <div className="home_page">
            <FirstSegment/>
        </div>
    );
}

export default MainPage;