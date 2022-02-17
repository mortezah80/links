import React from 'react'
import './LinksC_Search.css'
import Select from 'react-select'
import AddForm from '../../AddForm';
import {CgSearch} from 'react-icons/cg'
import {MdPlaylistAdd} from 'react-icons/md'

const options = [
    { value: '0', label: 'بسیار پر تکرار' },
    { value: '1', label: 'پر تکرار' },
    { value: '2', label: 'کم تکرار' },
    { value: '3', label: 'بسیار کم تکرار' }
  ]

function LinksC_Search() {
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
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='LinksC_Search'>
        <div className='LinksC_SelectBoxSearchContainer'>
            <Select className="LinksC_SelectBox" styles={customStyles} options={options} 
            components={{
                IndicatorSeparator: () => null
            }}
            placeholder={<div className='LinksC_SelectPlaceHolder'>دیفالت</div>}
            />
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