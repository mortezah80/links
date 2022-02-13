import React , {useState} from 'react'
import './LinksC_FeedBox_Tag.css'

function LinksC_FeedBox_Tag(props) {
    let LinksTag = "LinksC_FeedBox_Tag1";
    if(props.type===2) {
        LinksTag = "LinksC_FeedBox_Tag2"
    }
    if(props.type===3) {
        LinksTag = "LinksC_FeedBox_Tag3"
    }
    if(props.type===4) {
        LinksTag = "LinksC_FeedBox_Tag4"
    }
    if(props.type===5) {
        LinksTag = "LinksC_FeedBox_Tag5"
    }
    if(props.type===6) {
        LinksTag = "LinksC_FeedBox_Tag6"
    }
    if(props.type===8) {
        LinksTag = "LinksC_FeedBox_Tag8"
    }

    return (
        <div className={['LinksC_FeedBox_Tag',LinksTag].join(" ")}>
            <span>تایپ</span>
        </div>
    )
}

export default LinksC_FeedBox_Tag