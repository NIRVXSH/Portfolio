import React, { Component } from 'react';
import github from '../img/icon/github.png';
import instagram from '../img/icon/ig.png';
import facebook from '../img/icon/Facebook.png';
import tiktok from '../img/icon/tiktok.png';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/NIRVXSH" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                </a>
               
                <a href="https://www.facebook.com/Rocket.love.love555/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/fook_stn/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@nirvxsh?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="tiktok" className="social-icon" />
                </a>
            </div>
        );
    }
}

export default Social;
