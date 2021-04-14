import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

Pagination.propTypes = {
    page: PropTypes.number,
    totalVideo: PropTypes.array,
    setNewPage: PropTypes.func
}

function Pagination (props) {
    const [nowPage, setNowPage] = useState(props.page)
    const [pageArr, setPageArr] = useState([])
    const [totalBtns, setTotalBtns] = useState([])

    // 頁碼一組只出現幾個
    const pageRange = 5
    // 現在在這組頁碼的第幾個index(頁)
    const pageIndex = parseInt(nowPage / pageRange)

    useEffect(() => {
        if (props.totalVideo && props.totalVideo.length > 0) createPageArr()
    }, [])

    useEffect(() => {
        props.setNewPage(nowPage)
        const newArr = totalBtns[pageIndex]
        if (newArr) setPageArr(newArr)
    }, [nowPage, pageIndex, props.totalVideo])

    function firstPage () {
        setNowPage(0)
    }

    function lastPage () {
        const lastPage = totalBtns.length
        setNowPage(lastPage)
    }

    function nextPage () {
        if (nowPage >= totalBtns.length) return
        const newPage = parseInt(nowPage + 1)
        setNowPage(newPage)
    }

    function prePage () {
        if (nowPage === 0) return
        const newPage = parseInt(nowPage - 1)
        setNowPage(newPage)
    }

    function createPageArr () {
        // 將拿到的資料深拷貝
        const arr = JSON.parse(JSON.stringify(props.totalVideo))
        // 建立一個空陣列的變數
        const newArr = []
        // 將接到的資料用forEach整理
        arr.forEach((item, index) => {
            // 決定每筆資料在哪一頁,pages = 每幾筆資料是一頁
            // EX. 0 / 5 = 0 (第0頁)、 12 / 5 = 2 (第2頁) ...
            const pages = parseInt(index / pageRange)
            // 當index可被整除就新增一空陣列
            if (index % pageRange === 0) newArr.push([])
            // 將index的數字倒入newArr的空陣列中變成頁碼
            newArr[pages].push(index)
        })
        // pageIndex = parseInt(nowPage / pageRange)
        setTotalBtns(newArr)
        // 0       1     ...
        // [[0-4], [5-9] ...]
        const newPageArr = newArr[pageIndex]
        setPageArr(newPageArr)
    }

    const onePage = (
        <>
            <div className="page-num-container">
                <div className='page-btn btn--active'>1</div>
            </div>
        </>
    )

    const display = (
        <>
            <div className="page-handler" onClick={prePage}>
                    上一頁
            </div>
            <div className="page-num-container">
                {nowPage > 4 ? <div className="page-btn" onClick={firstPage}>1</div> : null}
                { nowPage >= 5 ? <div className="page-btn">...</div> : null }
                {pageArr.map((item, index) => {
                    return (
                        <div className={ index === nowPage % pageRange
                            ? 'page-btn btn--active'
                            : 'page-btn' }
                        key={item - 1}
                        onClick={() => {
                            const newPage = parseInt(item)
                            setNowPage(newPage)
                        }}>
                            {item + 1}
                        </div>
                    )
                })}
                { totalBtns.length > pageRange && nowPage < totalBtns.length - 4
                    ? <div className="page-btn">...</div>
                    : null }
                { nowPage !== totalBtns.length && nowPage <= totalBtns.length - 5
                    ? <div className="page-btn" onClick={lastPage}>{totalBtns.length + 1}</div>
                    : null}
            </div>
            <div className="page-handler" onClick={nextPage}>
                    下一頁
            </div>
        </>
    )

    return (
        <>
            <div className="pagination-container">
                {pageArr && pageArr.length > 0 ? display : onePage}
            </div>
        </>
    )
}

export default Pagination
