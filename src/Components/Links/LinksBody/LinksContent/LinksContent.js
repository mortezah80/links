import React , {useState} from 'react'
import './LinksContent.css'
import LinksC_Feed from './LinksC_Feed/LinksC_Feed'
import LinksC_Filters from './LinksC_Filters'
import LinksC_Search from './LinksC_Search'
import LinksC_Sroucefilter from './LinksC_Sroucefilter'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import LinksC_Pagination from './LinksC_Pagination'

function LinksContent() {
  const [ActiveSourceFilter,SetActiveSourceFilter] = useState(1);
  return (
    <div className='LinksContent'>
        <div className='LinksContentStickyContainer'>
        <LinksC_Filters/>
        <LinksC_Search/>
  
          <div className='LinksC_SroucefiltersContainer'>
            <div className='LinksC_SroucefiltersArrow'>
              <AiOutlineArrowRight/>
            </div>
            
            <div className='LinksC_Sroucefilters' >
              <LinksC_Sroucefilter type="instagram" active={ActiveSourceFilter===1? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
              <LinksC_Sroucefilter type="twitter" active={ActiveSourceFilter===2? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
              <LinksC_Sroucefilter type="rss" active={ActiveSourceFilter===3? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
              <LinksC_Sroucefilter type="sheypoor" active={ActiveSourceFilter===4? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
              <LinksC_Sroucefilter type="paper" active={ActiveSourceFilter===5? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
              <LinksC_Sroucefilter type="telegram" active={ActiveSourceFilter===6? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
            </div>
            <div className='LinksC_SroucefiltersArrow'>
              <AiOutlineArrowLeft/>
            </div>
          </div>
          <LinksC_Pagination number={5}/>
        </div>
        <LinksC_Feed/>
    </div>
  )
}

export default LinksContent
