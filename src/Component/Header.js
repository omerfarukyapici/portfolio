import './Header.css';
import Logo from './İmg/logo.png';

import { useState } from 'react';

const Header = () => {


    const [contact, setContact] = useState(false)


    return (
        <div className="Header">
            <div className='Header-Content'>
                <div>
                    <a href='#/'  >
                        <img src={Logo} alt='' />

                    </a>
                </div>
                <div className='project'>
                    <div>
                        <a href='#/projects'>
                            Projects
                            <div className='hideEmoji'>💻</div>
                        </a>
                    </div>

                    <button className='showContactButton' onClick={() => {
                        setContact( !contact )
                    }}>
                        Contact


                        {
                            contact ? 

                            <div className='contact'>

                                <div className='letsContact'>LETS CONTACT</div>
                                <a href = "mailto: developeromerfarukyapici@gmail.com"> developeromerfarukyapici@gmail.com </a>
                                <a target="_blank" href="https://www.linkedin.com/in/%C3%B6mer-faruk-yap%C4%B1c%C4%B1-57b5b11b6/"> Linkedin </a>
                                <a target="_blank" href="https://twitter.com/DeveloperOmer"> Twitter  </a>

                            </div>

                            : null
                        }
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Header;