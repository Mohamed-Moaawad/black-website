import React from 'react'
import './SocialMediaLinks.css'

const SocialMediaLinks = () => {
    return (
        <>
                    <div className="links-social-media">
                    <div className="icons">
                        <div className="icon">
                        <a href="https://www.linkedin.com/in/mohamed-moawad-993a21261/" target='_blank'><i className="fa-brands fa-linkedin-in"></i><span>linkedin</span></a>
                        
                        </div>
                                    <div className="icon">
                                        <a href="https://twitter.com/Mohamed_M3awad" target='_blank'><i className="fa-brands fa-twitter"></i><span>twitter</span></a>
                                    </div>
                                    <div className="icon">
                                    <a href="https://www.facebook.com/profile.php?id=100026932089840" target='_blank'><i className="fa-brands fa-facebook-f"></i><span>facebook</span></a>
                                        
                                    </div>
                                    <div className="icon">
                                        <a href="https://www.instagram.com/mohamed_muoawad/" target='_blank'><i className="fa-brands fa-instagram"></i><span>instagram</span></a>
                                    </div>
                    </div>
                    <span className='line'></span>
                    <p>follow us</p>
                </div>
        </>
    )
}

export default SocialMediaLinks
