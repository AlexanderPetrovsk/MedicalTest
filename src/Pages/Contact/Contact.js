function Contact() {
    return (
        <div className="container-sm">
            <div className="row align-items-center mb-5 mt-5">
                <div className="contact-detail col-12 mb-5">
                    <h2 className="contact-sidebar-title">Contact Info</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    <ul>
                        <li>
                            <div className="contact-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>Contact</h3>
                                <p>+389 2 61330251</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>info@meditek.com.mk</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <i className="fas fa-location-dot"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>Location</h3>
                                <p>Londonska nm.10/3/4, Skopje, Macedonia</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-12">
                    <div className="iframe-container">
                    <iframe
                        className="responsive-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0154127533897!2d21.388566476090748!3d41.99994477122867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354157f57ca3757%3A0x522013157d4cd1c7!2zTUVESVRFSyAo0JzQldCU0JjQotCV0Jop!5e0!3m2!1sen!2smk!4v1727207907022!5m2!1sen!2smk"
                        style={ { border: 0 } }
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="location"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;