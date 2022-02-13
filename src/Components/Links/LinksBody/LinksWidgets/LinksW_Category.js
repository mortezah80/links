import React from 'react'
import './LinksW_Category.css'

function LinksW_Category(props) {
    const stc = require('string-to-color');
    const mycolor = stc(props.title); // => "#7f1de4"
  return (
    <div className='LinksW_Category'>
        <div className='LinksW_CategoryBoxTitle'>
            <div className='LinksW_CategoryBox' style={{backgroundColor:mycolor}}>
                <span>{props.title.slice(0,1)}</span>
            </div>
            <span className='LinksW_CategoryTitle'>{props.title}</span>
        </div>
 
        <div className='LinksW_CategoryNumber'>
            <span>{props.number}</span>
        </div>
    </div>
  )
}

export default LinksW_Category