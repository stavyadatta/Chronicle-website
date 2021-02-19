import React from "react";
import Background_theme from './Images/background_theme.svg';
import First_segment_graphic from './Images/first_segment_graphic.svg'
import "./MainPage.css";



function FirstSegment() {
    return (
        <div className="Main_page_first_segment">
            <div className = "FirstSegment_background">
                <img src={Background_theme} id="background_theme" alt="background_theme"/>
                <img src={First_segment_graphic} id="first_segment_graphic" alt="background_theme"/>

            </div>
            <div>
                <h1 className="Chronicle_heading"> Chronicle</h1>
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