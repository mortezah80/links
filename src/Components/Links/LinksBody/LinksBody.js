import React , {useState} from 'react'
import './LinksBody.css'
import LinksContent from './LinksContent/LinksContent'
import LinksWidgets from './LinksWidgets/LinksWidgets'

function LinksBody(props) {
  return (
    <div className='LinksBody'>
        <LinksWidgets/>
        <LinksContent DP_DrawerB={props.DP_DrawerB} setDP_DrawerB={props.setDP_DrawerB}/>
    </div>
  )
}

export default LinksBody