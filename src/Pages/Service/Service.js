import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function Service() {
    const { t, i18n } = useTranslation();

    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');

    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(chosenLang);
    }, [i18n, searchParams, chosenLang]);
   
    return (
        <div className="service-main-wrapper">
            <div className="service-container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-5">
                        <h2 className="service-title ">{t('service.service')}</h2>
                        <p className="service-description mt-3">{t('service.serviceDescription')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;