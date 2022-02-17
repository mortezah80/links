import React,{useState} from 'react'
import './LinksC_Filters.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import {BsCollectionFill} from 'react-icons/bs'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select'

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 44,
      height: 22,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(20px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#0085FE',
          opacity: 1,
          border: 'none',

        },
      },
      '&$focusVisible $thumb': {
        color: '#0085FE',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 16,
      height: 16,
      marginTop:"1.8px",
      marginLeft:"3px",
    },
    track: {
      borderRadius: 36 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  const options = [
    { value: '0', label: 'بسیار پر تکرار' },
    { value: '1', label: 'پر تکرار' },
    { value: '2', label: 'کم تکرار' },
    { value: '3', label: 'بسیار کم تکرار' }
  ]


function LinksC_Filters() {
    const customStyles = {
        control: (base, state) => ({
          ...base,
         /* background: "rgb(55, 141, 216,0.2)",*/
          color:"#3f97df",
          borderRadius: "7px",
          boxShadow: state.isFocused ? null : null,
          /*borderColor: state.isFocused ? "yellow" : "green",
          "&:hover": {
            borderColor: state.isFocused ? "red" : "blue"
          },*/

          width:130,
          backgroundColor:"rgba(38, 178, 233, 0.121)",
          borderColor :"rgb(55, 141, 216,0.1)",
          "&:hover": {
            borderColor: "rgb(55, 141, 216,0.5)"
          }
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'rgb(55, 141, 216)',
          fontSize:'11px',
          fontWeight:"bold",
 
        }),
        dropdownIndicator: base => ({
          ...base,
          fontSize:'8px',
          color: "#838AA4" ,
 
          "&:hover": {
            color: "rgb(55, 141, 216,0.8)" 
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          fontSize:'11px',
        })
      };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const[LCActiveButton , setLCActiveButton] = useState(1);
  return (
    <div className='LinksC_Filters'>
        <div className='LinksC_SelectBoxesSwitch'>
            <div className='LinksC_SelectBoxContainer LinksC_SelectBoxContainer1'>
            <Select  className="LinksC_SelectBox" styles={customStyles}  options={options} 
                components={{
                IndicatorSeparator: () => null
                }}
                placeholder={<div className='LinksC_SelectPlaceHolder'>دیفالت</div>}
                height={14}
            />
            </div>
            <div className='LinksC_SelectBoxContainer'>
            <Select className="LinksC_SelectBox" styles={customStyles} options={options} 
            components={{
                IndicatorSeparator: () => null
            }}
            placeholder={<div className='LinksC_SelectPlaceHolder'>دیفالت</div>}
            />
            </div>
            <div className='LinksC_FiltersSwitchContainer'>
            <FormControlLabel
                color='primary' 
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            />
            <span className='LinksC_FiltersSwitchTitle'>تایتل سوییچ</span>
            </div>
        </div>


        <div className='LinksC_MultiBottun'>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===1 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(1)}>
                <span><FaTelegramPlane className={["LC_Icon", LCActiveButton===1 ? "LH_telegramIcon": ""].join(" ")}/></span>
                <span className='LinksC_MultiBottun_ButtonTitle'>تلگرام</span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===2 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(2)}>
                <span><AiFillInstagram className={["LC_Icon", LCActiveButton===2 ? "LH_instgramIcon": ""].join(" ")}/></span>
                <span className='LinksC_MultiBottun_ButtonTitle'>اینستاگرام</span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===3 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(3)}>
                <span><BiRss className={["LC_Icon", LCActiveButton===3 ? "LH_rssIcon": ""].join(" ")}/></span>
                <span className='LinksC_MultiBottun_ButtonTitle'>خبرخوان</span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===4 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(4)}>
                <span><AiFillTwitterCircle className={["LC_Icon", LCActiveButton===4 ? "LH_twitterIcon": ""].join(" ")}/></span>
                <span className='LinksC_MultiBottun_ButtonTitle'>توییتر</span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===5 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(5)}>
                <span><ImBullhorn className={["LC_Icon", LCActiveButton===5 ? "LH_sheypoorIcon": ""].join(" ")}/></span>
                <span className='LinksC_MultiBottun_ButtonTitle'>شیپور</span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===6 ? "LinksC_MultiBottun_ButtonActive " : ""].join(" ")} onClick={() => setLCActiveButton(6)}>
                <span> <ImNewspaper className={["LC_Icon", LCActiveButton===6 ? "LH_paperIcon": ""].join(" ")}/> </span>
                <span className='LinksC_MultiBottun_ButtonTitle'>روزنامه</span>
            </div>
        </div>

    </div>
  )
}

export default LinksC_Filters