import React from 'react'
import './LinksC_Pagination.css'

function LinksC_Pagination(props) {
  return (
    <div className='LinksC_PaginationContainer'>
        <div className='LinksC_PaginationButton'><span>قبلی</span></div>
        <div className='LinksC_PaginationNumbers'>
            <div className='LinksC_PaginationNumber'><span>{props.number-2}</span></div>
            <div className='LinksC_PaginationNumber'><span>{props.number-1}</span></div>
            <div className='LinksC_PaginationNumberCurrent'><span>{props.number}</span></div>
            <div className='LinksC_PaginationNumber'><span>{props.number+1}</span></div>
            <div className='LinksC_PaginationNumber'><span>{props.number+2}</span></div>
        </div>
        <div className='LinksC_PaginationButton'><span>بعدی</span></div>
    </div>
  )
}

export default LinksC_Pagination