
import React, {useEffect, useState} from 'react'
import axios from "axios"
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';
import Card from './Card';
import Popup from 'reactjs-popup';

import { useNavigate } from 'react-router-dom';

function  Page1() {
 
    const[boxdata, setboxdata] = useState([])

   

    
    const getImageUrl = async()=>{
       
            try{
            
    
              const res = await axios.get(`http://localhost:8000/signin/data`);//https://jsonplaceholder.typicode.com/users
              
              const data = await res.data;
              //console.log(data)

              // data.map((obj)=>{setboxdata([...boxdata,obj])})
             setboxdata(data.map((obj)=>({...obj,})))
              if(data){
                   console.log("data")
                  console.log(boxdata)
              }
          
            }catch(err){
              alert(err)
            }


    }
    console.log(boxdata.length)


    const navigate = useNavigate();
    const handleDelete = async(email)=>{
        
      setboxdata(boxdata.filter(data => data.email !== email));
       
  
      }


    useEffect(() => {
        const subscribe = () => {
            getImageUrl();


        }
        return subscribe();

        //getImageUrl();

    }, []);

  return (
    <div >
    
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin :"auto auto"}}>
    
    {boxdata.map((image)=>{
      
        return<> <Card username = {image.name}  src=  {`https://avatars.dicebear.com/v2/avataaars/${image.username}.svg?options[mood][]=happy`} email = {image.email} phone = {image.phone} website =  {image.website} onDelete={handleDelete}/>
     </>
    })}

   
    </MDBRow>  
    </div>
  )
}

export default  Page1
