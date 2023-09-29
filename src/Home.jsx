import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import ProgrammerModel from './programmer.jsx';
import CustomComponent from './customComponent.jsx';


function Home() {

    const [welcomeAnimationLoaded, setWelcomeAnimationLoaded] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setWelcomeAnimationLoaded(true);
        }, 5000)

    }, [])

    return (
        <React.Fragment>

            <ProgrammerModel />
            <div className="App">
                {welcomeAnimationLoaded ?
                    <React.Fragment>

                        <CustomComponent />
                    </React.Fragment>

                    : <div class="diagonal-container">
                        <div class="left-half"></div>
                        <div class="right-half"></div>
                        <h2 className="welcome">
                            <span>W</span>
                            <span>E</span>
                            <span>L</span>
                            <span>C</span>
                            <span>O</span>
                            <span>M</span>
                            <span>E</span>
                        </h2>
                    </div>}


            </div>
        </React.Fragment>
    );
}

export default Home;
