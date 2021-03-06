import React from 'react'
import './LinksC_Sroucefilter.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import {BsCollectionFill} from 'react-icons/bs'


function LinksC_Sroucefilter(props) {
  let LCSIconColor = "LCS_telegramIconBack"
  if (props.type==="telegram") {
    LCSIconColor = "LCS_telegramIconBack"
  }
  if (props.type==="instagram") {
    LCSIconColor = "LCS_instgramIconBack"
  }
  if (props.type==="twitter") {
    LCSIconColor = "LCS_twitterIconBack"
  }
  if (props.type==="rss") {
    LCSIconColor = "LCS_rssIconBack"
  }
  if (props.type==="sheypoor") {
    LCSIconColor = "LCS_sheypoorIconBack"
  }
  if (props.type==="paper") {
    LCSIconColor = "LCS_paperIconBack"
  }
  const handleClick = () => {
    if (props.type==="telegram") {
      props.SetActiveSourceFilter(6)
    }
    if (props.type==="instagram") {
      props.SetActiveSourceFilter(1)
    }
    if (props.type==="twitter") {
      props.SetActiveSourceFilter(2)
    }
    if (props.type==="rss") {
      props.SetActiveSourceFilter(3)
    }
    if (props.type==="sheypoor") {
      props.SetActiveSourceFilter(4)
    }
    if (props.type==="paper") {
      props.SetActiveSourceFilter(5)
    }
  }


  return (
    <div className={['LinksC_SroucefilterContainer',, props.active? "LinksC_SroucefilterActive" : ""].join(" ")} onClick={handleClick}>
        <div className={['LinksC_Sroucefilter'].join(" ")}>

            {
              props.type==="all" ?
              <BsCollectionFill className="LCS_allIcon LCS_Icon" />:
              props.type==="telegram" ?
              <FaTelegramPlane className="LCS_telegramIcon LCS_Icon"/> :
              props.type==="instagram" ?
              <AiFillInstagram className="LCS_instgramIcon LCS_Icon"/> :
              props.type==="twitter" ? 
              <AiFillTwitterCircle className="LCS_twitterIcon LCS_Icon"/> :
              props.type==="rss" ?
              <BiRss className="LCS_rssIcon LCS_Icon"/> :
              props.type==="paper" ?
              <ImNewspaper className="LCS_paperIcon LCS_Icon" /> :
              props.type==="sheypoor" ?
              <ImBullhorn className="LCS_sheypoorIcon LCS_Icon"/>:
              null
          }
                   
        </div>
          {
              props.type==="all" ?
              <span className='LinksC_SroucefilterTitle'>??????</span>:
              props.type==="telegram" ?
              <span className='LinksC_SroucefilterTitle'>???????????? </span> :
              props.type==="instagram" ?
              <span className='LinksC_SroucefilterTitle'>????????????????????</span> :
              props.type==="twitter" ? 
              <span className='LinksC_SroucefilterTitle'>???????????? </span> :
              props.type==="rss" ?
              <span className='LinksC_SroucefilterTitle'>?????????????? </span> :
              props.type==="paper" ?
              <span className='LinksC_SroucefilterTitle'>?????????????? </span> :
              props.type==="sheypoor" ?
              <span className='LinksC_SroucefilterTitle'>?????????? </span> :
              null
          }

    </div>
  )
}

export default LinksC_Sroucefilter
