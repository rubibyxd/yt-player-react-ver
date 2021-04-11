import React from 'react'

function Pagination () {
    return (
        <>
            <div className="pagination-container">
                <div className="page-handler">
                    上一頁
                </div>
                <div className="page-num-container">
                    <div className="page-btn">1</div>
                    <div className="page-btn">...</div>
                    <div className="page-btn"></div>
                    <div className="page-btn">...</div>
                    <div className="page-btn"></div>
                </div>
                <div className="page-handler">
                    下一頁
                </div>
            </div>
        </>
    )
}

export default Pagination
