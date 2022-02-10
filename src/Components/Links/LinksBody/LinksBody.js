import React , {useState} from 'react'
import './LinksBody.css'
import LinksContent from './LinksContent/LinksContent'
import LinksWidgets from './LinksWidgets/LinksWidgets'

function LinksBody() {
  return (
    <div className='LinksBody'>
        <LinksWidgets/>
        <LinksContent/>
    </div>
  )
}

export default LinksBody