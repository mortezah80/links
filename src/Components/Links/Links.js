import React , {useState} from 'react'
import './Links.css'
import Links_HeaderSource from './Links_HeaderSource'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import LinksBody from './LinksBody/LinksBody';
import { useMediaQuery } from 'react-responsive'
import {HiMenu} from 'react-icons/hi'

function Links() {
  const [DP_DrawerB,setDP_DrawerB] = useState(false)
  const [LHActiveButton , setLHActiveButton] = useState(1)
  const q1200 = useMediaQuery({ query: '(max-width: 1260px)' })
  const q1110 = useMediaQuery({ query: '(max-width: 1110px)' })
  const q885 = useMediaQuery({ query: '(max-width: 885px)' })
  const q815 = useMediaQuery({ query: '(max-width: 815px)' })
  const q657 = useMediaQuery({ query: '(max-width: 657px)' })
  const q483 = useMediaQuery({ query: '(max-width: 483px)' })
  return (
    <div className='Links'>
        <div className='LinksHeader'>
            <div className='LinksTopHeader'>
                <div className='LinksTopHeaderContent'>
                    <div className='LinksTopHeaderContent_Icon' onClick={() => setDP_DrawerB(true)}>
                        <div><HiMenu className='LinksTopHeaderContent_IconSelf'/></div>  
                    </div>
                    <span className='LinksTopHeaderContentSpan'>لینک ها</span>
                    <span className='LinksTopHeaderContentSpan'>ساعت و تاریخ</span>
                </div>
            </div>
            <div className='LinksHeaderContent'>
                <div className='LinksHeaderButtons'>
                    <div className='LinksHeaderButtonDescribeContainer'>
                        <div className={['LinksHeaderButtonContainer' , LHActiveButton===1? 'LinksHeaderButtonActive LinksHeaderButtonActive1' : ''].join(' ')} onClick={() => setLHActiveButton(1)}>
                            <div className='LinksHeaderButton LinksHeaderButtonContainer1'>
                                <span>سلام</span>
                            </div>
                        </div>
                        <span className='LinksHeaderButtonDescribe'>توضیح سلام</span>
                    </div>
                    <div className='LinksHeaderButtonDescribeContainer'>
                        <div className={['LinksHeaderButtonContainer' , LHActiveButton===2? 'LinksHeaderButtonActive LinksHeaderButtonActive2' : ''].join(' ')} onClick={() => setLHActiveButton(2)}>
                            <div className='LinksHeaderButton LinksHeaderButtonContainer2'> 
                                <span>خدافظی</span>
                            </div>
                        </div>
                        <span className='LinksHeaderButtonDescribe'>توضیح خدافظی</span>
                    </div>
                    <div className='LinksHeaderButtonDescribeContainer'>
                        <div className={['LinksHeaderButtonContainer' , LHActiveButton===3? 'LinksHeaderButtonActive LinksHeaderButtonActive3' : ''].join(' ')} onClick={() => setLHActiveButton(3)}>
                            <div className='LinksHeaderButton LinksHeaderButtonContainer3'>
                                <span>مهربانی</span>
                            </div>
                            
                        </div>
                        <span className='LinksHeaderButtonDescribe'>توضیح مهربانی</span>
                    </div>
                </div>
                <div className='LinksHeaderSources'>
                    <Swiper
                    
                        dir="rtl"
                        slidesPerView={q483 ? 1 : q657 ? 2 : q815 ? 3 : q885 ? 2 : q1110 ? 3 : q1200 ? 4 : 5}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                        centeredSlidesBounds={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                       
                    >
                        <div className="mySwiper">
                        <SwiperSlide><Links_HeaderSource type="telegram" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="instagram" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="twitter" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="rss" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="sheypoor" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="telegram" /></SwiperSlide>
                        </div>
                    </Swiper>
                    
                    
                    
                </div>

            </div>
        </div>
        <LinksBody DP_DrawerB={DP_DrawerB} setDP_DrawerB={setDP_DrawerB}/>
    </div>
  )
}

export default Links