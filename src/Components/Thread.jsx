import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";
import '../CSS/Thread.css';
import NavBar2 from './NavBar2';
import BackToTop from './BackToTop';


const Thread = () => {
    return ( 
        <div className = 'thread'>
         <NavBar2  contact = 'other-pages' links = 'link page-link'/>
            {/* <> */}
            <div className='Tweets'>
            {/* <br></br><br></br> */}
                <div className="centerContent" width= "85%">
                    <div className="selfCenter standardWidth" width= "85%">
                        <TwitterTimelineEmbed sourceType="collection"
                            id="1205542982310596608"
                            options={{ 
                                height: "2400px", 
                                width: "100%"
                             }} 
                            // transparent 
                            // noHeader="true"
        //   noBorders="true"
        //   noFooter="true"
                            />
                    </div>
                </div>
            </div>
            {/* </> */}
            <BackToTop page={'thread'} />
        </div>
        
    )
}

export default Thread;