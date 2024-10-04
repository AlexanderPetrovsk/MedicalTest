import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function Contact() {
    const { t, i18n } = useTranslation();
   
    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');

    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(chosenLang);
    }, [i18n, searchParams, chosenLang]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState([]);

    const submitForm = async () => {
        const response = await fetch('https://meditek-api.mk.meditek.com.mk/service_request', {
        // const response = await fetch('http://localhost:8000/service_request', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        });

        const data = await response.json();

        if (!data.success) {
            setErrors(data.errors);

            return;
        }

        setErrors([]);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setPopupStatus(true);
    }

    const [popupStatus, setPopupStatus] = useState(false);

    useEffect(() => {
        if (popupStatus) {
            setTimeout(() => {
                setPopupStatus(false);
            }, 1500)
        }
    }, [popupStatus]);

    return (
        <div className="contact-detail-wrapper container-sm">
            <div className="row mb-5 mt-5">
                <div className="contact-detail col-xl-5 col-12 mb-5">
                    <h2 className="contact-sidebar-title">{t('contact.contactInfo')}</h2>
                    <ul>
                        <li>
                            <div className="contact-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>{t('contact.contact')}</h3>
                                <p>+389 2 61330251</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>{t('contact.email')}</h3>
                                <p>info@meditek.com.mk</p>
                            </div>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <i className="fas fa-location-dot"></i>
                            </div>  
                            <div className="contact-text">
                                <h3>{t('contact.location')}</h3>
                                <p>Londonska nm.10/3/4, Skopje, Macedonia</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="service-form container col-xl-6 col-12 mb-5">
                    <h2 className="service-form-title">{t('service.serviceContact')}</h2>
                    <form>
                        <input  
                            placeholder={ t('service.enterName') }
                            name="full_name"
                            id="full_name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder={ t('service.enterЕmail') }
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder={ t('service.enterSubject') }
                            name="subject"
                            id="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea
                            placeholder={ t('service.enterMessage') }
                            name="message"
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="button" className="cv-btn submitForm" onClick={submitForm}>submit</button>
                        { popupStatus ?
                            <div className='success-popup'>
                                { t('service.successPopup') }
                            </div>  : ''
                        }
                    </form>
                    { errors.map((error, index) => {
                        return (
                            <div className='service-form-error'key={index}>{error.propertyPath} : {error.message}</div>
                        )
                    })}
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