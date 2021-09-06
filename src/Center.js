import React from 'react';
import './Center.css';
import {Android,Apple} from '@material-ui/icons';
import CenterBox from './CenterBox';



function Center(){
    return (
        <>
        <div className="center">
        <div className="center__header">
        <div className="center__headerbox">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg" alt="uber eats" />
        <h1>   There's more to love in the app </h1>
        <p>
            <Apple />
            <span>   iPhone </span>
        </p>
        <p>  
        <Android  />
        <span>  Android </span>
        </p>

        </div>

        </div>
        <div className="center__center">
        <CenterBox  title="feed your employees"  description="create a business account"   imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"   />
        <CenterBox title="your restaurant deliverd"  description="add your restaurant"   imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg" />
        <CenterBox title="deliver with uber eats"  description="sign up to deliver"   imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg" />


        </div>
        <div className="center__footer">
            <div className="center__footercity">
                <div className="city__header">
                <h3>   Cities near me </h3>
                <h2>   View all 500+ cities  </h2>


                </div>
                <div className="city__map">
                <iframe 

                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652151.2747342857!2d71.6326860125!3d26.63073975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1617816959877!5m2!1sen!2sin"

                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="cities near me "
                />
                </div>
                <div className="city__citylist">
                <p> Atlanta</p>
              <p> Austin</p>
              <p>Baltimore-Maryland </p>
              <p> Boston</p>
              <p> Charlotte</p>
              <p>Chicago </p>

              <p> Dallas-Fort Worth </p>
              <p>Denver</p>
              <p>Las Vegas</p>
              <p>Los Angeles</p>
              <p>Miami </p>
              <p>Minneapolis - St. Paul </p>

              <p> New York City </p>
              <p> Orange County</p>
              <p> Palm Springs </p>
              <p> Philadelphia</p>
              <p> Phoenix</p>
              <p> Portland</p>

              <p> Sacramento</p>
              <p> San Diego</p>
              <p> San Francisco Bay Area</p>
              <p> Seattle</p>
              <p> Tampa Bay</p>
              <p> Washington D.C.</p>

                </div>

            </div>
            <div className="center__footercountry">

                <h3>   Countries with uber eats </h3>
                <div className="country__countrylist">
                
<p> United States</p>
              <p>Spain </p>
              <p>Brazil </p>
              <p>Mexico </p>
              <p> France</p>
              <p>Japan </p>
              <p>Canada </p>
              <p>Australia </p>
              <p>Poland </p>
              <p>United Kingdom </p>
              <p>Italy </p>
              <p> Portugal</p>
              <p>Switzerland </p>
              <p>Chile </p>
              <p> New Zealand</p>
              <p> Taiwan (ROC)</p>
              <p> South Africa</p>
              <p>Belgium </p>
              <p> Ecuador</p>
              <p>Ireland </p>
              <p>Sri Lanka </p>
              <p>Dominican Republic </p>
              <p>Sweden </p>
              <p>Guatemala </p>

                </div>
            </div>
        </div>

        </div>

       


        </>
    )
}



export default Center