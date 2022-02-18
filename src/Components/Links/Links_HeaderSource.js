import React from 'react'
import './Links_HeaderSource.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import {BsCollectionFill} from 'react-icons/bs'

function Links_HeaderSource(props) {
  let LHIconColor = "LH_telegramIconBack"
  if (props.type==="telegram") {
    LHIconColor = "LH_telegramIconBack"
  }
  if (props.type==="instagram") {
    LHIconColor = "LH_instgramIconBack"
  }
  if (props.type==="twitter") {
    LHIconColor = "LH_twitterIconBack"
  }
  if (props.type==="rss") {
    LHIconColor = "LH_rssIconBack"
  }
  if (props.type==="sheypoor") {
    LHIconColor = "LH_sheypoorIconBack"
  }
  if (props.type==="paper") {
    LHIconColor = "LH_paperIconBack"
  }
  return (
    <div className='Links_HeaderSource'>
        <div className={['LH_Icon',LHIconColor].join(" ")}>
          {
              props.type==="all" ?
              <BsCollectionFill className="LH_allIcon"/>:
              props.type==="telegram" ?
              <FaTelegramPlane className="LH_telegramIcon"/> :
              props.type==="instagram" ?
              <AiFillInstagram className="LH_instgramIcon"/> :
              props.type==="twitter" ? 
              <AiFillTwitterCircle className="LH_twitterIcon"/> :
              props.type==="rss" ?
              <BiRss className="LH_rssIcon"/> :
              props.type==="paper" ?
              <ImNewspaper className="LH_paperIcon" /> :
              props.type==="sheypoor" ?
              <ImBullhorn className="LH_sheypoorIcon"/>:
              null
          }
        </div>
        <div className='Links_HeaderSourceContentContainer Links_HeaderSourceContentContainer1'>
          <span className='LHBox_Number'>245.452 </span>
          <span className='LHBox_describe'>لینک های ثبت شده ی تلگرام</span>
        </div>
        <div className='Links_HeaderSourceContentContainer Links_HeaderSourceContentContainer2'>
          <span className='LHBox_Number'>245.452 </span>
          <span className='LHBox_describe'>لینک های ثبت شده ی تلگرام</span>
 
        </div>
        <div className={['LHBox_Percent',LHIconColor].join(" ")}><span>35%</span></div>
    </div>
  )
}

export default Links_HeaderSource