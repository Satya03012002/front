import React, {useEffect, useState} from 'react'
import axios from "axios"
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBIcon,MDBBtn,  MDBInput,} from 'mdb-react-ui-kit';
import Popupform from './Popupform';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Card(props) {

  const handleclose = () => {
    props.onClose();
  };


    const [check, setcheck] = useState(true); 
    const [edit, setedit] = useState(false);


    const handleClick = () => {
        if(check){
            setcheck(false);
        }else{
            setcheck(true); 
        }
    
      
    }
    


    const handleDelete = () => {
        props.onDelete(props.email);
      };
    
    // const navigate = useNavigate();
    // const handleDelete = async()=>{
    //     const data = await deletedata();
    //     await navigate("/");
    //     await navigate("/blogs")
    //     console.log(data);
  
    //   }




  return (
    <div>
        <MDBCol>
        <MDBCard>
          <MDBCardImage
            src=  {props.src}
            alt='...'
            position='top'
          />
             {/* <MailOutlineIcon/> */}
          <MDBCardBody>
            <MDBCardTitle>{props.username}</MDBCardTitle>
         
            <MDBCardText>
            <MDBIcon far icon="envelope" /> {props.email}
            </MDBCardText>
            <MDBCardText>
            <MDBIcon fas icon="phone" /> {props.phone}
            </MDBCardText>
            <MDBCardText>
            <MDBIcon fas icon="globe" />  {props.website}
            </MDBCardText>
          </MDBCardBody>
          <MDBRow>
          <MDBCol><MDBBtn color='light' rippleColor='dark'  onClick={handleClick}>{ check ? <MDBIcon style={{color: "red"}} far icon="heart" />:<MDBIcon style={{color: "red"}} fas icon="heart" /> }</MDBBtn></MDBCol>
          {/* <MDBCol><MDBBtn color='light' rippleColor='dark' ><MDBIcon far icon="edit" onClick={handleEdit}/><Popupform trigger = {edit} onClose= {handleClose}/></MDBBtn></MDBCol> */}
          
          <MDBCol> 
           

            <Popup trigger={<MDBBtn color='light' rippleColor='dark' ><MDBIcon far icon="edit" /></MDBBtn>} modal>
      {close => (
        <div className="card-popup">
        <form style={{margin : "20px"}}>
        <MDBCol> <p><span style={{color:"red"}}>*</span>Name:</p>  <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' /></MDBCol>
        {/* <MDBCol>  <p>Email:</p>  <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' /></MDBCol> */}
        <MDBCol>  <p><span style={{color:"red"}}>*</span>Email:</p> <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' /></MDBCol>
        <MDBCol> <p><span style={{color:"red"}}>*</span>Phone:</p>   <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' /></MDBCol>
        <MDBCol> <p><span style={{color:"red"}}>*</span>website: </p>  <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='website' /></MDBCol>
                <MDBRow>
                  <MDBCol>  <MDBBtn type='submit' className='mb-4' block  onClick={close}> Cancel </MDBBtn></MDBCol>
                  <MDBCol>  <MDBBtn type='submit' className='mb-4' block  onClick={close}> OK </MDBBtn></MDBCol>
                </MDBRow>

              </form>
         
        </div>
      )}
    </Popup>
            </MDBCol>

          <MDBCol><MDBBtn color='light' rippleColor='dark'  onClick={handleDelete}><MDBIcon fas icon="trash" /></MDBBtn></MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>

    </div>
  )
}

export default Card