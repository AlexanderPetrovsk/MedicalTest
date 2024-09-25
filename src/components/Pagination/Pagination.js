import { useState } from "react";

function Pagination(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(props.items.length / props.perPage);
    const paginationPages  = [];

    const handlePaginateClick = (paginateForward) => {
        if (
            ( paginateForward && currentPage >= totalPages)
            || (!paginateForward && currentPage <= 1)
        ) {
            return;
        }
        
        props.onChange(paginateForward ? currentPage + 1 : currentPage - 1);
        setCurrentPage(paginateForward ? currentPage + 1 : currentPage - 1);
    }

    const createPagesArray = () => {
        if (totalPages < 5) {
            for (let i = 1; i <= totalPages; i++) {
                paginationPages.push(i);
            }

            return;
        }

        if (currentPage >= totalPages - 3) {
            paginationPages.pop();

            for (let i = totalPages - 3; i <= totalPages; i++) {

                if (i <= totalPages) {
                    paginationPages.push(i);
                }
            }

            return;
        }

        for (let i = currentPage; i <= currentPage + 2; i++) {
            paginationPages.push(i);
        }

        paginationPages.push('...');

        paginationPages.push(totalPages);

    }

    createPagesArray();

    return (
        <div className="pagination-container">
            <ul>
                <li onClick={() => { handlePaginateClick(false) }}><i className="fa-solid fa-chevron-left"></i></li>
                { paginationPages.map((page, index) => {
                    return (
                        <li
                            className={` ${currentPage === page ? 'cv-page-active' : ''}`}
                            onClick={() => {
                                if (typeof page !== 'number') {
                                    return;
                                }

                                props.onChange(page);
                                setCurrentPage(page);
                            }}
                            key={index}
                        >
                            {page}
                        </li>
                    )
                })}
                <li onClick={() => { handlePaginateClick(true) }}><i className="fa-solid fa-chevron-right"></i></li>
            </ul>
        </div>
    )
}

export default Pagination;