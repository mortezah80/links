import React , {useState} from 'react'
import './LinksContent.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import {BsCollectionFill} from 'react-icons/bs'

function LinksContent() {
  const[LCActiveButton , setLCActiveButton] = useState(1);
  return (
    <div className='LinksContent'>
        <div className='LinksC_Filters'>
            <div className='LinksC_MultiBottun'>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===1 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(1)}>
                    <span><FaTelegramPlane className="LH_telegramIcon LC_Icon"/></span>
                </div>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===2 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(2)}>
                    <span><AiFillInstagram className="LH_instgramIcon LC_Icon"/></span>
                </div>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===3 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(3)}>
                    <span><BiRss className="LH_rssIcon LC_Icon"/></span>
                </div>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===4 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(4)}>
                    <span><AiFillTwitterCircle className="LH_twitterIcon LC_Icon"/></span>
                </div>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===5 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(5)}>
                    <span><ImBullhorn className="LH_sheypoorIcon LC_Icon"/></span>
                </div>
                <div className={['LinksC_MultiBottun_Button', LCActiveButton===6 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(6)}>
                    <span> <ImNewspaper className="LH_paperIcon LC_Icon" /> </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinksContent