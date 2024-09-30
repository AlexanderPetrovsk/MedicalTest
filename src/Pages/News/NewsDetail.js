import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import { getNewsContent, getNewsTitle } from "../../utils/common";

function NewsDetail(props) {
    const { id } = useParams();
    const newsArticle = props.data.find(item => parseInt(item.id) === parseInt(id));

    const getDate = (date) => {
        return new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric'});
    }

    return (
        <div className="news-detail-main-wrapper">
            <div className="container">
                <div className="row mb-5 mt-5">
                    <div className="news-detail-container">
                        <div className="news-details-box">
                            <div className="news-details-inner">
                                <div className="news-details-img">
                                    <img src={newsArticle.image} alt="" />
                                </div>
                                <div className="news-details-content mb-5">
                                    <h4>{ getNewsTitle(newsArticle) }</h4>
                                    { parse(getNewsContent(newsArticle)) }
                                </div>

                            </div>
                            <div className="news-detail-date">
                                <div>{ getDate(newsArticle.createdOn) }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;