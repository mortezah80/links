import React from 'react'
import './LinksC_Search.css'

import AddForm from '../../AddForm';
import {CgSearch} from 'react-icons/cg'
import {MdPlaylistAdd} from 'react-icons/md'
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

function LinksC_Search() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  
  return (
    <div className='LinksC_Search'>
        <div className='LinksC_SelectBoxSearchContainer'>
          <FormControl className={classes.margin}>
            {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
            <NativeSelect
              classes={{
                root: classes.selectEmpty,
                select: classes.select
              }}
              size="small"
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option className='LinksCoption' value={10}>گزینه ی اول </option>
              <option className='LinksCoption' value={20}>گزینه ی دوم</option>
              <option className='LinksCoption' value={30}>گزینه ی سوم</option>
            </NativeSelect>
          </FormControl>
        </div>
        <input type="text" name="name" className='LinksC_SearchInput' placeholder='متن مورد نظر خود را وارد کنید' />
        <div className='LinksC_SearchButtons'>
          <div className='LinksC_SearchButton'>
          <AddForm open={open} setOpen={setOpen}/>
            <div className='LinksC_SearchButton LinksC_SearchButton1'>
                <span>جست و جو</span>
                <CgSearch className='LinksC_SearchButtonIcon'/>
            </div>
          </div>

          <div className='LinksC_AddButton' onClick={handleOpen}> 
              <span>افزودن</span>
              <MdPlaylistAdd className='LinksC_SearchButtonIcon'/>
          </div>
       
        </div>
    </div>
  )
}

export default LinksC_Search