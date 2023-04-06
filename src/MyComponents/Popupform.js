import React from 'react'
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function Popupform(props) {

    const handleclose = () => {
        props.onClose();
      };
    

  return  (props.trigger) ?(
    <div>
         <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='website' />
      <MDBRow>
        <MDBCol>  <MDBBtn type='submit' className='mb-4' block onClick={handleclose}> Cancel </MDBBtn></MDBCol>
        <MDBCol>  <MDBBtn type='submit' className='mb-4' block> OK </MDBBtn></MDBCol>
      </MDBRow>
    
    </form>
    </div>
  ) :"";
  
}

export default Popupform