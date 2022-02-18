import React from 'react'
import './LinksC_Pagination.css'

function LinksC_Pagination(props) {
  return (
    <div className='LinksC_PaginationContainer'>
        <span className='LinksC_PaginationResult LinksC_PaginationBeforeRes'>صفحه 5 از 251</span>
        <div className='LinksC_PaginationButtonNumbersContainer'>
          <div className='LinksC_PaginationButton'><span>قبلی</span></div>
          <div className='LinksC_PaginationNumbers'>
              <div className='LinksC_PaginationNumber LinksC_PaginationNumberResNone'><span>{props.number-2}</span></div>
              <div className='LinksC_PaginationNumber'><span>{props.number-1}</span></div>
              <div className='LinksC_PaginationNumberCurrent'><span>{props.number}</span></div>
              <div className='LinksC_PaginationNumber'><span>{props.number+1}</span></div>
              <div className='LinksC_PaginationNumber LinksC_PaginationNumberResNone'><span>{props.number+2}</span></div>
          </div>
          <div className='LinksC_PaginationButton'><span>بعدی</span></div>
          <div className='LinksC_PaginationGoToContainer LinksC_PaginationBeforeRes'>
            <span className='LinksC_PaginationGoToTitle'>رفتن به صفحه :</span>
            <div className='LinksC_PaginationGoToInputContainer'>
              <input className='LinksC_PaginationGoToInput' placeholder='وارد کنید' />
            </div>
            
          </div>
        </div>
        <div className='LinksC_PaginationResultGotoResponsive'>
            <span className='LinksC_PaginationResult'>صفحه 5 از 251</span>
            <div className='LinksC_PaginationGoToContainer'>
              <span className='LinksC_PaginationGoToTitle'>رفتن به صفحه :</span>
              <div className='LinksC_PaginationGoToInputContainer'>
                <input className='LinksC_PaginationGoToInput' placeholder='وارد کنید' />
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default LinksC_Pagination