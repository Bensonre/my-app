import React, { useState } from 'react';
import logo from './MeLogo.svg';

export default function Icon({ icon }) {
    const [animated, setAnimated] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setAnimated(() => true) 
                document.getElementsByClassName("App-logo")[0].style.cssText = "animation-iteration-count: infinite";
                } 
            }
            onMouseLeave ={
                () => {
                    document.getElementsByClassName("App-logo")[0].style.cssText = "animation-iteration-count: 1";
                }
            }
            onAnimationEnd={() => setAnimated(() => false)
            }
         >
            <img src={logo} className={animated ? 'App-logo animated' : 'App-logo'} alt="logo" />
        </div>
    );
}