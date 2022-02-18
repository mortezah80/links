import React from 'react'
import './AddForm.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import {BiCommentDetail} from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'

  

function AddForm(props) {
  const q589 = useMediaQuery({ query: '(max-width: 589px)' })
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:q589? 'center' :'left',
      paddingLeft:q589? '0px' : '40px',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

    const classes = useStyles();
  
    const handleClose = () => {
      props.setOpen(false);
    };
  
  return (
    <div className='AddForm'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className="LinksFormContainer">
            <div className="LinksFormHeaderContainer">
                <BiCommentDetail className="LinksFormHeaderIcon"/>
                <div className="LinksFormHeader">
                    <span className="LinksFormHeaderTitle">لیست دسته بندی های موجود</span>
                    <span className="LinksFormHeaderDescribe">لیست دسته بندی های موجود برای لینک های ثبت شده</span>
                </div>
            </div>
            <div className="LinksFormInputContainerGrid">
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="text" />
                    <span className="LinksFormInputTitle">نام کاربری</span>
                </div>
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="text" />
                    <span className="LinksFormInputTitle">رمز عبور</span>
                </div>
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="text" />
                    <span className="LinksFormInputTitle">شماره موبایل</span>
                </div>
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="text" />
                    <span className="LinksFormInputTitle">کشور</span>
                </div>
            </div>
            <div class="LinksFormEmailContainer">
                <input required="required" class="form-field" type="email" placeholder="Email"/>
                <span>@gmail.com</span>
            </div>
            <div className="LinksFormInputContainerGrid LinksFormInputContainerGrid2 ">
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="password" />
                    <span className="LinksFormInputTitle">پسورد</span>
                </div>
                <div className="LinksFormInputContainer">
                    <input required="required" className="LinksFormInput" type="password" />
                    <span className="LinksFormInputTitle">تکرار پسورد</span>
                </div>
            </div>
            <div className='LinksFormBigInputContainer'>
                <span className='LinksFormBigInputTitle'>اطلاعات تکمیلی را بنویسید</span>
                <textarea  className="LinksFormBigInput"  />
            </div>
            <div className='LinksFormButtons'>
                <div className='LinksFormButton LinksFormButton1'><span>اضافه کردن</span></div>
                <div className='LinksFormButton LinksFormButton2'><span>گزینه ی دیگر</span></div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default AddForm