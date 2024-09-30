import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function Service() {
    const { t, i18n } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState([]);

    const submitForm = async () => {
        const response = await fetch('https://meditek-api.mk.meditek.com.mk/index.php/service_request', {
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
    }

    const [searchParams] = useSearchParams();

    useEffect(() => {
        i18n.changeLanguage(searchParams.get('lang'));
    }, [i18n, searchParams]);

    return (
        <div className="service-main-wrapper">
            <div className="service-container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-5">
                        <h2 className="service-title ">{t('service.service')}</h2>
                        <p className="service-description mt-3">{t('service.serviceDescription')}</p>
                    </div>
                    <div className="service-form container col-lg-6 col-md-12">
                        <h2 className="service-form-title">{t('service.serviceContact')}</h2>
                        <form>
                            <input type="text" placeholder="Enater your name" name="full_name" id="full_name" onChange={(e) => setName(e.target.value)}/>
                            <input type="text" placeholder="Enter your email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder="Enter your subject" name="subject" id="subject" onChange={(e) => setSubject(e.target.value)}/>
                            <textarea placeholder="Message here" name="message" id="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button type="button" className="cv-btn submitForm" onClick={submitForm}>submit</button>
                            <div className="response"></div>
                        </form>
                        { errors.map((error, index) => {
                            return (
                                <div className='service-form-error'key={index}>{error.propertyPath} : {error.message}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;