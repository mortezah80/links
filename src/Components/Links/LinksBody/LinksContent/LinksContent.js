import React , {useState} from 'react'
import './LinksContent.css'
import LinksC_Feed from './LinksC_Feed/LinksC_Feed'
import LinksC_Filters from './LinksC_Filters'
import LinksC_Search from './LinksC_Search'
import LinksC_Sroucefilter from './LinksC_Sroucefilter'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import LinksC_Pagination from './LinksC_Pagination'
import { useMediaQuery } from 'react-responsive'
import Drawer from '@material-ui/core/Drawer';
import {HiMenu} from 'react-icons/hi'
import { makeStyles } from '@material-ui/core/styles';
import LinksWidgetsDrawer from '../LinksWidgets/LinksWidgetsDrawer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

function LinksContent(props) {
  const q1200 = useMediaQuery({ query: '(max-width: 1260px)' })
  const q1110 = useMediaQuery({ query: '(max-width: 1110px)' })
  const q885 = useMediaQuery({ query: '(max-width: 885px)' })
  const q815 = useMediaQuery({ query: '(max-width: 815px)' })
  const q657 = useMediaQuery({ query: '(max-width: 657px)' })
  const q585 = useMediaQuery({ query: '(max-width: 585px)' })
  const q407 = useMediaQuery({ query: '(max-width: 407px)' })
  const useStyles = makeStyles({
    paper: {
      background: '#313A57',
      color: 'white'
    }
  });
  const styles = useStyles();    

  const q590 = useMediaQuery({ query: '(max-width: 590px)' })
  const q460 = useMediaQuery({ query: '(max-width: 460px)' })
  const [ActiveSourceFilter,SetActiveSourceFilter] = useState(1);
  return (
    <div className='LinksContent'>
        <div className='LinksContentStickyContainer'>
        <LinksC_Filters/>
        <LinksC_Search/>
  
          <div className='LinksC_SroucefiltersContainer'>
            {/*<div className='LinksC_SroucefiltersArrow'>
              <AiOutlineArrowRight/>
          </div>*/}
            
            <div className='LinksC_Sroucefilters' >
            <Swiper
                    
                    dir="rtl"
                    slidesPerView={q407? 3 : q585? 4 : 6}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    grabCursor={true}
                
                    loopFillGroupWithBlank={true}
                    centeredSlidesBounds={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation= { {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }
                    }
                    modules={[Pagination, Navigation]}
                   
                >
                    <div className="mySwiper">
                    <SwiperSlide> <LinksC_Sroucefilter type="instagram" active={ActiveSourceFilter===1? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    <SwiperSlide> <LinksC_Sroucefilter type="twitter" active={ActiveSourceFilter===2? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    <SwiperSlide><LinksC_Sroucefilter type="rss" active={ActiveSourceFilter===3? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    <SwiperSlide><LinksC_Sroucefilter type="sheypoor" active={ActiveSourceFilter===4? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    <SwiperSlide><LinksC_Sroucefilter type="paper" active={ActiveSourceFilter===5? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    <SwiperSlide><LinksC_Sroucefilter type="telegram" active={ActiveSourceFilter===6? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/></SwiperSlide>
                    </div>
                </Swiper>
              {/*
                q460 ?
                <>
                <LinksC_Sroucefilter type="instagram" active={ActiveSourceFilter===1? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                <LinksC_Sroucefilter type="twitter" active={ActiveSourceFilter===2? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                </>
                :
                q590 ?
                <>
                  <LinksC_Sroucefilter type="instagram" active={ActiveSourceFilter===1? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="twitter" active={ActiveSourceFilter===2? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="rss" active={ActiveSourceFilter===3? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="sheypoor" active={ActiveSourceFilter===4? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                </> :
                <>
                  <LinksC_Sroucefilter type="instagram" active={ActiveSourceFilter===1? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="twitter" active={ActiveSourceFilter===2? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="rss" active={ActiveSourceFilter===3? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="sheypoor" active={ActiveSourceFilter===4? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="paper" active={ActiveSourceFilter===5? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                  <LinksC_Sroucefilter type="telegram" active={ActiveSourceFilter===6? true : false} SetActiveSourceFilter = {SetActiveSourceFilter}/>
                </>
              */ }
                </div>
              
            {/*<div className='LinksC_SroucefiltersArrow'>
              <AiOutlineArrowLeft/>
            </div>*/}
          </div>
          <div className='LinksC_PaginationContainerinContent'>
            <LinksC_Pagination number={5}/>
          </div>
      
        </div>
        <div className='LinksC_PaginationContainerinContentRes'>
            <LinksC_Pagination number={5}/>
        </div>
        <LinksC_Feed/>
        
        <Drawer classes={{ paper: styles.paper }} className="Links_Drawer" anchor={'right'} open={props.DP_DrawerB} onClose={() => props.setDP_DrawerB(false)} >
              <LinksWidgetsDrawer/>
        </Drawer>
    </div>
  )
}

export default LinksContent
