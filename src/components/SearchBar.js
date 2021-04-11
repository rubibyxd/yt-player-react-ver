import React from 'react'

function SearchBar () {
    return (
        <>
            <div className="serch-container">
                <h2 className="pageTitle">YT video Player</h2>
                <div className="search-bar">
                    <input type="text" className="search-area" placeholder="輸入影片關鍵字..."/>
                    <div className="search-btn">查詢</div>
                </div>
            </div>
        </>
    )
}

export default SearchBar
