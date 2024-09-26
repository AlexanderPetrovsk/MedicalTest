import { useParams } from "react-router-dom";

function NewsDetail(props) {
    const { id } = useParams();
    const product = props.data.find(item => parseInt(item.id) === parseInt(id));

    return (
        <div className="news-detail-main-wrapper">
            <div className="container">
                <div className="row mb-5 mt-5">
                    <div className="news-detail-container">
                        <div className="news-details-box">
                            <div className="news-details-inner">
                                <div className="news-details-img">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="news-details-content mb-5">
                                    <h4>{ product.title }</h4>
                                    <p>{ product.description }</p>
                                </div>

                            </div>
                            <div className="news-detail-date">
                                <div>JULY 29, 2021</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;