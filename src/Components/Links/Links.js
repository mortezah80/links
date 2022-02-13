import React , {useState} from 'react'
import './Links.css'
import Links_HeaderSource from './Links_HeaderSource'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import LinksBody from './LinksBody/LinksBody';

function Links() {
  const [LHActiveButton , setLHActiveButton] = useState(1)

  return (
    <div className='Links'>
        <div className='LinksHeader'>
            <div className='LinksTopHeader'>

            </div>
            <div className='LinksHeaderContent'>
                <div className='LinksHeaderButtons'>
                    <div className={['LinksHeaderButtonContainer' , LHActiveButton===1? 'LinksHeaderButtonActive' : ''].join(' ')} onClick={() => setLHActiveButton(1)}>
                        <div className='LinksHeaderButton LinksHeaderButtonContainer1'>
                            <span>س</span>
                        </div>
                        <span>سلام</span>
                    </div>
                    <div className={['LinksHeaderButtonContainer' , LHActiveButton===2? 'LinksHeaderButtonActive' : ''].join(' ')} onClick={() => setLHActiveButton(2)}>
                        <div className='LinksHeaderButton LinksHeaderButtonContainer2'> 
                            <span>خ</span>
                        </div>
                        <span>خداحافظی</span>
                    </div>
                    <div className={['LinksHeaderButtonContainer' , LHActiveButton===3? 'LinksHeaderButtonActive' : ''].join(' ')} onClick={() => setLHActiveButton(3)}>
                        <div className='LinksHeaderButton LinksHeaderButtonContainer3'>
                            <span>م</span>
                        </div>
                        <span></span>
                    </div>

                </div>
                <div className='LinksHeaderSources'>
                    <Swiper
                        dir="rtl"
                        slidesPerView={5}
                        spaceBetween={0}
                        slidesPerGroup={3}
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                        centeredSlidesBounds={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Links_HeaderSource type="telegram" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="instagram" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="twitter" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="rss" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="sheypoor" /></SwiperSlide>
                        <SwiperSlide><Links_HeaderSource type="telegram" /></SwiperSlide>
                        
                    </Swiper>
                    
                    
                    
                </div>

            </div>
        </div>
        <LinksBody/>
    </div>
  )
}

export default Links