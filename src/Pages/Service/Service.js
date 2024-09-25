function Service() {
    return (
        <div className="service-main-wrapper">
            <div className="service-container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-5">
                        <h2 className="service-title ">Service</h2>
                        <p className="service-description mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris mi. Cras efficitur mi arcu, id volutpat nunc eleifend eget.
                            Quisque quis nibh a leo bibendum facilisis vel tristique justo. Nulla lobortis felis tortor, quis fringilla turpis laoreet vitae.
                            Aenean ornare mi lacus, quis hendrerit ipsum consectetur aliquet. Suspendisse dictum, elit eu porta bibendum, nisi est ornare mi, et tempus nisl purus non sapien.
                            Vestibulum sit amet ultrices nisi. Aenean ac odio aliquam, hendrerit felis ut, eleifend odio.
                        </p>
                    </div>
                    <div className="service-form container col-lg-6 col-md-12">
                        <h2 className="service-form-title">Service Contact</h2>
                        <form>
                            <input type="text" placeholder="Enater your name" name="full_name" id="full_name" className="require" />
                            <input type="text" placeholder="Enter your email" name="email" id="email" className="require" data-valid="email" data-error="Email should be valid." />
                            <input type="text" placeholder="Enter your subject" name="subject" id="subject" className="require" />
                            <textarea placeholder="Message here" name="message" id="message" className="require"></textarea>
                            <button type="button" className="cv-btn submitForm">submit</button>
                            <div className="response"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;