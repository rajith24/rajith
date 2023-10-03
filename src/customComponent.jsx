import React, { useRef, useEffect, useState } from 'react';
import Resume from './Resume.pdf';
import { Link,useNavigate  } from 'react-router-dom';

function DesignDiv() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);

    const [containerDimensions, setContainerDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const handleHoverEmail = () => {
        setIsHoveredEmail(!isHoveredEmail);
    };
    const handleHoverLinkedIn = () => {
        setIsHoveredLinkedIn(!isHoveredLinkedIn);
    };
    useEffect(() => {
        const path = document.querySelector('#welcome_path');
        // Add a class to the path to trigger the animation
        path.classList.add('animate-path');
    }, []);


    const handleDownload = () => {
        // Specify the file path or URL of your resume
        const resumeFilePath = Resume;
    
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = resumeFilePath;
        anchor.download = 'Resume_Rajith.pdf'; // The desired filename for download
        anchor.style.display = 'none';
    
        // Append the anchor to the document and trigger the click event
        document.body.appendChild(anchor);
        anchor.click();
    
        // Clean up by removing the anchor element
        document.body.removeChild(anchor);
      };
    
      const handleExplore = () => {
        // Redirect to a new link, e.g., '/newpage'
        navigate('/rajith/portfolio');
      };

    return (
        <React.Fragment>
        {/* <div className="col-sm-2 col-md-3 col-lg-6"></div> */}
        <div className='main-container col-xs-12 col-sm-12 col-md-9 col-lg-6' style={{
            position: 'absolute',
            zIndex: 1,
        }}>
            <header style={{ justifyContent: "space-between", display: "flex" }}>
                <svg width="200" height="200" data-name="corner-top-left" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none" }} data-inlinesvg=".inlineSvgFile-6">
                    <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0" stopColor="rgb(192,86,123)" className="gradient1"></stop>
                        <stop offset=".5" stopColor="rgb(178,134,86)" className="gradient2"></stop>
                        <stop offset="1" stopColor="rgb(192,86,123)" className="gradient1"></stop>
                    </linearGradient>
                    </defs>
                    {/* <path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z">
                    </path> */}
                    <path fill="url('#grad1')" d="M8 0h192l-20 20H25a5 5 0 0 0-5 5v155L0 200V8a8 8 0 0 1 8-8Z">
                    </path>
                </svg>
                <div style={{ justifyContent: "space-between", display: "flex", height: "min-content", margin: "10px" }}>
                    <ul>
                        <li className="email" onMouseEnter={handleHoverEmail}
                            onMouseLeave={handleHoverEmail}>
                            <a
                                aria-label="Email"
                                href="mailto:rajithrahul24@gmail.com?subject=Mail from rajithPortfolio"
                            >
                                <svg style={{ transform: "scale(1.1)" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className={`email-icon ${isHoveredEmail ? 'hovered' : ''}`}>
                                    <path d="M47 34.837V52h7.533C56.448 52 58 50.448 58 48.533V29.486L47 34.837zM47 32l11-7.333v-5.426c0-1.914-.812-3.781-2.325-4.953-2.336-1.809-5.515-1.673-7.665.151L47 15.232V32zM19.814 33.822L32 41 44.349 33.726 43.443 18.023 32 27 20.718 18.149zM17.153 32.102v-16.75L15.99 14.44c-2.15-1.823-5.329-1.961-7.664-.151C6.812 15.46 6 17.328 6 19.243v5.424L17.153 32.102zM6 29.486v19.047C6 50.448 7.552 52 9.467 52H17V34.837L6 29.486z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" className={`email-icon1 ${isHoveredEmail ? '' : 'hovered'}`}>
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                                    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                                    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
                                    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" /></svg>




                            </a>
                        </li>

                        <li className="github" onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>
                            <a
                                aria-label="GitHub"
                                href="https://github.com/rajith24?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg style={{ transform: "scale(1.2)" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className={`svg-icon ${isHovered ? 'hovered' : ''}`} >
                                    <path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" className={`svg-icon1 ${isHovered ? '' : 'hovered'}`}>
                                    <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
                                </svg>
                            </a>
                        </li>

                        <li className="linkedin" onMouseEnter={handleHoverLinkedIn}
                            onMouseLeave={handleHoverLinkedIn}>
                            <a
                                aria-label="LinkedIn"
                                href="https://www.linkedin.com/in/rajith-rahul-kumar-a55398120/"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-inlinesvg=".inlineSvgFile-5"
                            >
                                <svg style={{ transform: "scale(.9)" }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className={`linkedin-icon ${isHoveredLinkedIn ? 'hovered' : ''}`}>
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className={`linkedin-icon ${isHoveredLinkedIn ? '' : 'hovered'}`}>
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>
            </header>

            <div className='inner-container'>


                <main className="projects-overview">
                    <div className="main-message"> <div className="welcome-message"> <div id="welcome">
                        <svg id="welcome_svg" xmlns="http://www.w3.org/2000/svg" width="605.44" height="122.24" viewBox="0 0 1892 382" data-inlinesvg=".inlineSvgFile-7">
                            <path id="welcome_path" stroke="none" strokeMiterlimit="10" strokeWidth="2" style={{ strokeDasharray: "9541.93, 9541.93", strokeDashoffset: "7156", transition: "fill 1s ease-in-out 0s", stroke: "rgb(204, 204, 204)" }}
                                d="M673 52h13v286h-13V52ZM21 68h15l11.67 35 25.66 76 31.33 92L121 319c1.18-7.67 5.08-16.57 7.66-24l14.65-42 44.36-127 15.75-45c3.77-10.08 3.22-12.74
                                 9.6-12.98 10.02-.39 8.61 1.39 13.32 14.98l15.33 44 40.99 117L309 319c1.13-7.32 8.11-26.23 10.95-34l14-41 10.74-32 29.98-87 14.66-43c4.29-12.86 3.55-13.88 10.67-14h8l-13.69 
                                 40-38.65 113-27.33 80L316 338h-7c-8.14-.05-7.4-.24-12.33-15l-15.34-44-39.99-114L214 87c-1.18 7.63-4.52 14.73-7 22l-15 43-30.31 87-15.27 44-12.75 37c-1.05 3.14-4.63 14.5-6.51 16.4-1.95 1.98-9.36 2.07-11.94 
                                 1.31-3.99-1.18-6.58-12.8-7.89-16.71l-16.66-49L21 68Zm570 230c2.38 2.41 7.16 6.17 5.83 10-.99 2.86-6.43 7.08-8.83 9.13-8.01 6.86-18.98 13.19-29 16.54-31.99 10.67-70.69 
                                 6.18-98-14.15-17.58-13.08-30.45-33.18-35.5-54.52-3.02-12.77-2.65-24.03-2.5-37 .31-26.02 14.43-53.95 34-70.7 29.18-24.98 77.82-27.22 110-6.76 15.48 9.85 25.23 22.2 33.24 38.46 8.78 17.81 9.76 31.68 9.76 
                                 51H457l-22 1 3.5 22c2.11 8.93 6.03 17.29 10.94 25 22.1 34.72 69.57 48.39 107.56 33.54 20.65-8.08 22.5-15.31 34-23.54Zm320-1c12.51 5.34 10.73 10.47 1.91 18.57-8.18 7.52-16.65 12.67-26.91 16.83-27.39 
                                 11.09-63.18 8.47-89-5.71-56.7-31.15-64.76-116.41-20.96-161.69 16.95-17.52 41.58-27.96 65.96-28h13c17.15.2 38.68 7.29 52 18.09 3.48 2.82 13.82 11.03 13.1 15.87-.31 2.1-2.54 3.96-4.12 5.19-1.79 1.39-2.96 
                                 1.94-4.98 2.85-16.12-22.52-41.49-30.31-68-30-13.46.16-31.78 6.35-43 13.7-48.27 31.58-51.35 106.37-9 144.13 32.26 28.76 94.69 27.83 120-9.83Zm130-159.58c31.95-3.9 65.11 6.25 86.83 30.58 14.22 15.93 24.14 40.56 24.17 
                                 62v17c-.32 26.84-16.35 57.76-38 73.41-21.5 15.54-41.23 18.89-67 18.59-7.87-.1-18.5-2.52-26-5-31.73-10.49-54.2-35.62-62.1-68-3.13-12.81-3.05-22.06-2.9-35 .18-14.98 5.27-32.93 12.51-46 12.61-22.75 33.41-38.61 
                                 58.49-45.25l14-2.33ZM1229 184c2.81-11.94 13.43-23.44 23-30.63 20.75-15.58 38.22-16.66 63-16.37 10.93.13 25.57 4.26 35 9.75 11.55 6.71 21.12 16.99 26.56 29.25l5.44 14c3.84-16.33 17.18-31.14 31-39.95 20.33-12.95 
                                 36.95-13.32 60-13.05 21.62.26 42.69 11.59 55.22 29 14.93 20.75 13.78 43.98 13.78 68v104h-13V215c-.03-18.87-8.14-40.46-23-52.53-21.85-17.76-59.06-17.22-83-3.96-7.55 4.19-14.03 9.9-19.56 16.49-19.32 23.02-18.44 
                                 47.97-18.44 76v87h-13V221c-.03-17.84-4.92-39.43-17.32-52.83-19.51-21.09-55.03-24.08-80.68-13.72-11.39 4.6-21.2 12.02-28.91 21.55-18.09 22.38-17.09 46.16-17.09 73v89h-13V138h13v29l1 17Zm542 114c2.39 2.42 7.16 6.17 
                                 5.83 10-.91 2.65-6.56 7.66-8.83 9.56-8.97 7.53-18.99 12.76-30 16.58-30.89 10.72-70.81 4.63-97-14.9-48.89-36.45-51.28-121.31-5-160.94 14.53-12.44 35.76-21.21 55-21.3h13c8.96.11 17.63 2.32 26 5.31 23.27 8.31 40.35 24.18 
                                 50.69 46.69 7.74 16.84 10.31 32.6 10.31 51h-175c.03 34.99 20.14 67.24 53 80.55 13.99 5.67 25.24 6.47 40 6.45 15.51-.02 33.42-5.67 46-14.78l16-14.22Zm7-69c-.24-26.58-16.1-55.62-39-69.24-24.94-14.85-59.06-14.85-84 0-18.23 
                                 10.85-30.98 29.82-36.11 50.24l-2.89 19h162Zm-1180 0c-2.27-28.02-15.25-54.79-40-69.55-29.57-17.64-72.11-13.53-96.96 10.64-15.37 14.94-24.57 37.54-25.04 58.91h162Zm445-79.7c-32.04 5.95-54.87 20.41-67.55 51.7-4.06 10.03-6.4 
                                 24.18-6.45 35-.18 39.89 18.04 74.6 58 86.98 5.76 1.78 15.05 3.95 21 4.02 18.01.21 32.87-1.63 49-10.51 49.02-27.01 55.84-102.96 18.71-142.4-18.76-19.93-46.02-27.44-72.71-24.79Zm799 165.55c4.74-1.3 9.69-1.39 13.67 1.95 7.18 
                                 6.01 5.14 18.08-3.67 21.46-14.63 5.61-25.63-14.82-10-23.41Z"></path>
                        </svg> </div>
                        <div className="nameAnimate" style={{ marginLeft: "30px" }}>
                            <h1>Hi, I'm Rajith</h1>
                        </div>
                        <div className="nameTextAnimate" style={{ marginLeft: "30px" }}>
                            <h3>Software Developer</h3>
                        </div>
                        <span style={{ color: 'antiquewhite' }}>

                            <p>Accomplished web developer with a strong track record of creating web applications compliant with DIN ISO standards.</p>
                            <p>Proficient in designing and implementing UI/UX components that enhance connectivity and visualization of Azure cloud services.</p>
                            <p>Passionate about crafting cutting-edge, pixel-perfect interfaces and delivering intuitive UX/UI experiences. </p>
                            <p>Explore my Resume to discover more about my skills and accomplishments.</p>

                        </span> </div>

                    </div>
                </main>


            </div>
            <footer>
                <div className='btn-box' onClick={handleDownload}>
                    <a className='btn'> Download CV</a>
                </div>

                <div className='btn-box' style={{marginLeft:"330px"}} onClick={handleExplore}>
                    <a className='btn' > Explore</a>
                </div>

                {/* <svg width="300" height="300" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none", float: "right" }} data-inlinesvg=".inlineSvgFile-4">
                <path fill="url('#grad1')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"></path></svg> */}

                {/* <svg width="100" height="100" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none", float: "right" }} data-inlinesvg=".inlineSvgFile-4">
  <path fill="url('#grad1')" d="M92 100H0l6.667-6.667H85a5 5 0 0 0 5-5V6.667L100 0v92a8 8 0 0 1-8 8Z"></path>
</svg> */}

                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none", float: "right" }} data-inlinesvg=".inlineSvgFile-4">
                    <path fill="url('#grad1')" d="M192 200H0l20-20h155a5 5 0 0 0 5-5V20l20-20v192a8 8 0 0 1-8 8Z" />
                </svg>




            </footer>
        </div>
        </React.Fragment>
    );
}

export default DesignDiv;
