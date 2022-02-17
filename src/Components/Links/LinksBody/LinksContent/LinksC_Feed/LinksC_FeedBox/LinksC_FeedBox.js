import React , {useState} from 'react'
import './LinksC_FeedBox.css'
import LinksC_FeedBox_Tag from './LinksC_FeedBox_Tag'
import LinksC_FeedBox_KHMTag from './LinksC_FeedBox_KHMTag'
import zIndex from '@material-ui/core/styles/zIndex';

function LinksC_FeedBox(props) {
    let [Showmore,Showmore2,Showmore3,setShowmore,setShowmore2,setShowmore3] = props.Showmores;
    const [ShowDownload , SetShowDownload] = useState(false)
    let FeedBoxzIndexCat = 1;
    const stc = require('string-to-color');
    const mycolor = stc(props.title); // => "#7f1de4"
    const LickC_FeedBoxCats= ["ورزشی" , "پژوهشی" , "مورد علاقه"] ;
    let zProfile = 1;
    const Profiles = [
        "https://pbs.twimg.com/profile_images/1474698191249498113/Tdfnpt-1_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1474390843310186502/yCmv-bQh_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1734008725/IM5L7037_resize_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1320917504013848577/-VTJLuI9_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1478029583081512964/zMVhyhlm_400x400.jpg"
    ]
  return (
    <div className='LinksC_FeedBox'>
        <div className='LicksFeedBoxHeaderContainer'>
            <div className='LicksFeedBox_TopImageContainer'>
                <img className='LicksFeedBox_TopImage' src="https://www.slashgear.com/wp-content/uploads/2019/11/Stormtrooper-Fortnite-1280x720.jpg" alt="hi"/>
            </div>
            <div className='LinksC_FeedBoxHeader'>
                <LinksC_FeedBox_Tag type={3}/>
                <div className='LicksFeedBox_ProfileImageContainer'>
                    <img className='LicksFeedBox_ProfileImage' src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a" alt="hi"/>
                    <div className='LinksC_FeedBoxHeaderDownloadBottomContainer'>
                        <span className='LinksC_FeedBoxHeaderDownloadButton' onClick={() => SetShowDownload(!ShowDownload)}>...</span>
                        <div className='LinksC_FeedBoxHeaderDownloadContainer' style={{display: ShowDownload? "block" : "none"}}>
                            <div className='LinksC_FeedBoxHeaderDownload'><span>دانلود jpg</span></div>
                            <div className='LinksC_FeedBoxHeaderDownload'><span>دانلود png</span></div>
                        </div>
                    </div>
                    
                </div>
                <LinksC_FeedBox_Tag type={4}/>
            </div>
        </div>
        <div className='LinksC_FeedBoxContent'>
            <div className='LinksC_FeedBoxUserContent'>
                <div className='LinksC_FeedBoxUserContentHeader'>
                    <div className='LinksC_FeedBoxUserEdit'>
                        ادیت
                    </div>
                    <div className='LinksC_FeedBoxUserNameId'>
                        <span className='LinksC_FeedBoxUsername'>Armin Mhmdi</span>
                        <span className='LinksC_FeedBoxUserId'>@arminmhd</span>
                    </div>
    
                </div>
                <span className='LinksC_FeedBoxUserBio'>این یک متن تست است به جای بیوی واقعی تا ببینیم در حدود سه خط به چه شکل نمایش داده خواهد شد و ما خواهیم دید که چگونه است در سه خط.</span>
                <div className='LinksC_FeedBoxUserFFDS'>
                    <div className='LinksC_FeedBoxUserFFD'>
                        <span className='LinksC_FeedBoxUserFFDNumber'> 358.8K</span>
                        <span className='LinksC_FeedBoxUserFFDTitle'>دیتاها</span>
                    </div>

                    <div className='LinksC_FeedBoxUserFFD'>
                        <span className='LinksC_FeedBoxUserFFDNumber'>457.2K</span>
                        <span className='LinksC_FeedBoxUserFFDTitle'>فالور ها</span>
                    </div>

                    <div className='LinksC_FeedBoxUserFFD'>
                        <span className='LinksC_FeedBoxUserFFDNumber'>72.4K</span>
                        <span className='LinksC_FeedBoxUserFFDTitle'>فالوینگ ها</span>
                    </div>
                </div>
            </div>
            <div className='LinksC_FeedBoxCategoriesContainer'>
                <span className='LinksC_FeedBoxCategoriesTitle'>دسته بندی های ثبت شده برای لینک مورد نظر</span>
                <div className='LinksC_FeedBoxCategories'>
                    {
                        LickC_FeedBoxCats.map( (word) => {
                            FeedBoxzIndexCat = FeedBoxzIndexCat+1
                            return (
                                <div className='LinksC_FeedBoxCategory' style={{backgroundColor: stc(word), zIndex:FeedBoxzIndexCat }}>
                                    <span>{word.slice(0,1)}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='LinksC_FeedBoxKeysContainer'>
                <div className='LinksC_FeedBoxKHMContainer LinksC_FeedBoxKHMContainer1 '>
                    <div className='LinksC_FeedBoxKHMTitle'>           {/* Keys , Hashtags , MetaData => KHM*/}
                        <span className='LinksC_FeedBoxKHM_TitleName'>کلمات کلیدی</span>
                        <span className='LinksC_FeedBoxKHM_ShowMore' onClick={() => setShowmore(!Showmore)}>{Showmore? "نمایش کمتر" : "نمایش بیشتر"}  </span>
                    </div>
                    <div className='LinksC_FeedBoxKHM'>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        {
                            Showmore ? 
                            <>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            </>
                            :
                            <></>
                        }

                    </div>
                </div>
            </div>
            <div className='LinksC_FeedBoxHashtagsContainer'>
                <div className='LinksC_FeedBoxKHMContainer LinksC_FeedBoxKHMContainer2 '>
                    <div className='LinksC_FeedBoxKHMTitle'>
                        <span className='LinksC_FeedBoxKHM_TitleName'>هشتگ ها </span>
                        <span className='LinksC_FeedBoxKHM_ShowMore'  onClick={() => setShowmore2(!Showmore2)}>{Showmore2? "نمایش کمتر" : "نمایش بیشتر"} </span>
                    </div>
                    <div className='LinksC_FeedBoxKHM'>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        {
                            Showmore2 ? 
                            <>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
            <div className='LinksC_FeedBoxMetaDataContainer LinkC_DotBorderBottom'>
                <div className='LinksC_FeedBoxKHMContainer LinksC_FeedBoxKHMContainer3 '>
                    <div className='LinksC_FeedBoxKHMTitle'>
                        <span className='LinksC_FeedBoxKHM_TitleName'>متا دیتا </span>
                        <span className='LinksC_FeedBoxKHM_ShowMore'  onClick={() => setShowmore3(!Showmore3)}>{Showmore3? "نمایش کمتر" : "نمایش بیشتر"}  </span>
                    </div>
                    <div className='LinksC_FeedBoxKHM'>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        <LinksC_FeedBox_KHMTag text="طبیعت"/>
                        {
                            Showmore3 ? 
                            <>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت های بکر"/>
                            <LinksC_FeedBox_KHMTag text="طبیعت"/>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
            <div className='LinksC_FeedBoxProfilesContainer'>
                <div className='LinksC_FeedBoxProfilesTitle'>
                    <span>ایجاد کننده</span>
                    <span>دسترسی ها</span>
                </div>
                <div className='LinksC_FeedBoxProfiles'>
                    <img className='LinksC_FeedBoxOwnerProfile' src='https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg'/>
                    <div className='LinksC_FeedBoxAccessProfiles'>
                        {
                            Profiles.slice(0,4).map((profileUrl) => {
                                zProfile = zProfile+1
                                return (
                                    <img className='LinksC_FeedBox_AccessProfile' src={profileUrl} style={{zIndex:zProfile}} title="hi"/>
                                )
                            } )
                        }
                        <div className='LinksC_FeedBoxAccessProfilesMore'>
                            <span>+8</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='LinksC_FeedBoxTimes'>
                <span>23 بهمن 1400</span>
                <span>6:24 بعد از ظهر</span>
            </div>
            <div className='LinksC_FeedBoxFooterButtons'>
                <div className='LinksC_FeedBoxFooterButton'><span>ویرایش</span></div>
                <div className='LinksC_FeedBoxFooterButton'><span>حذف</span></div>
                <div className='LinksC_FeedBoxFooterButton LinksC_FeedBoxFooterButtonPurple'><span>مشاهده</span></div>
            </div>
        </div>
    </div>
  )
}

export default LinksC_FeedBox