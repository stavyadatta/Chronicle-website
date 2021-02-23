import React from "react";
import Background_theme from './Images/background.png';
import First_segment_graphic from './Images/first_segment_graphic.svg'
import "./MainPage.css";

// * mobile screen */ @media screen and (max-width: ..px) { /* all code for screen size goes here */ } /* laptop screen */ @media screen and (max-width: ..px) { /* all code for screen size goes here */ } 


function MainPage(){
    return (
        <div className="home_page">
            <FirstSegment/>
            <TopButtons/>
            <SecondSegment/>
        </div>
    );
}


function TopButtons() {
    return(
        <div>
            <h5 id="home_top"> Home </h5>
            <h5 id="schedule_top"> Schedule </h5>
            <h5 id="FAQ_top"> FAQ </h5>
        </div>
    )
}

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
                <p className = "Hackathon_description">Chronicle is an annual hackathon hosted by the Google Developers 
                Student Club - University of Melbourne (DSC Unimelb). This year, it’ll be held virtually and open to all university students around the world. 
                The theme for this year is Consumer Tech: Make It a Reality.  Consumer Technology is any 
                kind of technology that an individual, company or organization would purchase for completing tasks and meeting their needs. </p>
                <button className="sign_up"> Sign Up</button>
                <button className='DSC_unimelb'>DSC Unimelb</button>
            </div>
        </div>
    )
}

function SecondSegment() {
    return (
        <div className="Mainpage_second_segment">
            <h1 className="Schedule_theme">Schedule</h1>
            <button id="day_1">Day 1</button>
            <button id="day_2">Day 2</button>
            <button id="day_3">Day 3</button>
            <SecondSegmentPlan/>
        </div>
    )
}

function SecondSegmentBtns() {
    return (
        <div >
            
        </div>
    )
}

function SecondSegmentPlan() {
    return (
        <div className="Plan_First_Day">
            <h2> Friday, 19th March (AEDT)</h2>
            <h4> Opening Ceremony            5:30PM</h4>
            <h4> Start Hacking               6:30PM</h4>
        </div>
    )
}

export default MainPage;