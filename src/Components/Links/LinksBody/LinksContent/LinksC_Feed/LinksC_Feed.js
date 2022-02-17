import React , {useState} from 'react'
import './LinksC_Feed.css'
import LinksC_FeedBox from './LinksC_FeedBox/LinksC_FeedBox'

function LinksC_Feed() {
  const [Showmore , setShowmore] = useState(false)
  const [Showmore2 , setShowmore2] = useState(false)
  const [Showmore3 , setShowmore3] = useState(false)
  let Showmores = [Showmore,Showmore2,Showmore3,setShowmore,setShowmore2,setShowmore3]
  return (
    <div className='LinksC_Feed'>
        <LinksC_FeedBox Showmores={Showmores} />
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
        <LinksC_FeedBox Showmores={Showmores}/>
    </div>
  )
}

export default LinksC_Feed