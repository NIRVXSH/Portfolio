import React, { Component } from 'react'
import profilepic from '../img/Procircle.png'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <div className='aboutall'>
                    <div className="aboutBg">
                        <h3 className='text'>Hi, I'm Sedtanan Mosaleeyanon</h3>
                        <p className='text'>    I'm Sedtanan Mosaleeyanon. You can call me Fook.I want to be a Backend-Developer. 
                            I'm study at King Mongkut's University of Technology North Bangkok .Major College of Industrial Technology.
                            Electrical Engineering Technology(Computer)</p>
                    </div>
                    <br />
                    <div className="aboutBg">
                        <h3 className='text'>MY Education</h3>
                        <div className='text'>
                            -EnET-C KING MONKUT UNIVERSITY TECHNOLOGY OF NORTH 2020 - Present<br/>
                            -Math-Sci STEM Horwang School 2011 - 2016
                        </div>
                    </div>
                    <div className='skill'>
                        <h3 className='text'>My skills</h3>
                        <img src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' alt='' ></img>
                        <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt=''></img>
                        <img src='https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' alt=''></img>
                        <img src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' alt=''></img><br />
                        <img src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/android-%2320232a.svg?style=for-the-badge&logo=android&logoColor=%a4c639' alt=''></img>
                        <img src='https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' alt=''></img>
                        <img src='https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white' alt=''></img>
                        <img src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' alt='docker'></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;