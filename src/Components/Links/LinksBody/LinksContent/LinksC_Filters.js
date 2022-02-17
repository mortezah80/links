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
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  root: {
    minWidth: 60,
    padding: 0,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold"
  },
  selectEmpty: {
    paddingLeft: "6px",
    backgroundColor: "#3f51b5"
  },
  select: {
    color: "white",
    "&:not([multiple]) option": {
      backgroundColor: "lightgray"
    }
  }
});



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    height:'10px',
  },
  input: {
    color:'rgb(70, 153, 222)',
    fontWeight:'bold',
    fontFamily:'Shabnam',
    height:'20px',
    width:'100px',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'rgba(203, 229, 254,0.6)',
    border: 'none',
    fontSize: 11,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      border: '1px solid rgba(21, 229, 254,1)',
      backgroundColor:'rgba(203, 229, 254,0.8)'
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

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



function LinksC_Filters() {
  const classes = useStyles();
  const [age1, setAge1] = React.useState('');
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const [age2, setAge2] = React.useState('');
  const handleChange2 = (event) => {
    setAge2(event.target.value);
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
            <FormControl className={classes.margin}>
            {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
            <NativeSelect
              classes={{
                root: classes.selectEmpty,
                select: classes.select
              }}
              size="small"
              id="demo-customized-select-native"
              value={age1}
              onChange={handleChange1}
              input={<BootstrapInput />}
            >
              <option className='LinksCoption' value={10}>گزینه ی اول </option>
              <option className='LinksCoption' value={20}>گزینه ی دوم</option>
              <option className='LinksCoption' value={30}>گزینه ی سوم</option>
            </NativeSelect>
            </FormControl>
            </div>
            <div className='LinksC_SelectBoxContainer'>
            <FormControl className={classes.margin}>
            {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
            <NativeSelect
              classes={{
                root: classes.selectEmpty,
                select: classes.select
              }}
              size="small"
              id="demo-customized-select-native"
              value={age2}
              onChange={handleChange2}
              input={<BootstrapInput />}
            >
              <option className='LinksCoption' value={10}>گزینه ی اول </option>
              <option className='LinksCoption' value={20}>گزینه ی دوم</option>
              <option className='LinksCoption' value={30}>گزینه ی سوم</option>
            </NativeSelect>
          </FormControl>
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