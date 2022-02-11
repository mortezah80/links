import React , {useState} from 'react'
import './LinksContent.css'
import LinksC_Filters from './LinksC_Filters'
import LinksC_Search from './LinksC_Search'


function LinksContent() {

  return (
    <div className='LinksContent'>
        <LinksC_Filters/>
        <LinksC_Search/>
    </div>
  )
}

export default LinksContent