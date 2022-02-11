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
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
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
          background: "rgb(55, 141, 216,0.2)",
          color:"#3f97df",
          borderRadius: "7px",
          boxShadow: state.isFocused ? null : null,
          /*borderColor: state.isFocused ? "yellow" : "green",
          "&:hover": {
            borderColor: state.isFocused ? "red" : "blue"
          }*/
          height: 1,
          width:150,
          borderColor :"transparent",
          "&:hover": {
            borderColor: "transparent"
          }
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'rgb(55, 141, 216)',
          fontSize:'13px',
          fontWeight:"bold"
        }),
        dropdownIndicator: base => ({
          ...base,
          fontSize:'8px',
          color: "#838AA4" ,
          "&:hover": {
            color: "white" 
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        option: (styles, {isFocused, isSelected}) => ({
          ...styles,
          background: isFocused
              ? 'hsla(291, 64%, 42%, 0.5)'
              : isSelected
                  ? 'hsla(291, 64%, 42%, 1)'
                  : undefined,
          zIndex: 1
      }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0,
          backgroundColor:'#838AA4',
          color:'white',
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
            <div className='LinksC_SelectBoxContainer'>
            <span className='LinksC_SelectBoxTitle'>گروه یک</span>
            <Select  className="LinksC_SelectBox" styles={customStyles}  options={options} 
                components={{
                IndicatorSeparator: () => null
                }}
                placeholder={<div className='LinksC_SelectPlaceHolder'>دیفالت</div>}
            />
            </div>
            <div className='LinksC_SelectBoxContainer'>
            <span className='LinksC_SelectBoxTitle'>گروه دو</span>
            <Select className="LinksC_SelectBox" styles={customStyles} options={options} 
            components={{
                IndicatorSeparator: () => null
            }}
            placeholder={<div className='LinksC_SelectPlaceHolder'>دیفالت</div>}
            />
            </div>
            <div>
            <FormControlLabel
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                label="تایتل سوییچ"
            />
            </div>
        </div>


        <div className='LinksC_MultiBottun'>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===1 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(1)}>
                <span><FaTelegramPlane className="LH_telegramIcon LC_Icon"/></span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===2 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(2)}>
                <span><AiFillInstagram className="LH_instgramIcon LC_Icon"/></span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===3 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(3)}>
                <span><BiRss className="LH_rssIcon LC_Icon"/></span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===4 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(4)}>
                <span><AiFillTwitterCircle className="LH_twitterIcon LC_Icon"/></span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===5 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(5)}>
                <span><ImBullhorn className="LH_sheypoorIcon LC_Icon"/></span>
            </div>
            <div className={['LinksC_MultiBottun_Button', LCActiveButton===6 ? "LinksC_MultiBottun_ButtonActive" : ""].join(" ")} onClick={() => setLCActiveButton(6)}>
                <span> <ImNewspaper className="LH_paperIcon LC_Icon" /> </span>
            </div>
        </div>

    </div>
  )
}

export default LinksC_Filters