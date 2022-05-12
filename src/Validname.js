import React,{useState}from 'react'

 function Validname(){
     const[formvalues,setFormValues]=useState({title:'',fname:'',lname:'',dob:'',email:'',password:'',cpassword:'',});
     const[formerrors,setFormErrors]=useState({title:'',fname:'',lname:'',dob:'',email:'',password:'',cpassword:''});
     const[onsubmit,setOnSubmit]=useState(false)
     const handleChange=(e)=>{
         const {name,value}=e.target;
         setFormValues({...formvalues,[name]:value});
     }
     const handleSubmit=(e)=>{
         e.preventDefault();
         if(formvalues.title!==""){

             setOnSubmit(true)
         }
         else{
            setFormErrors({...formerrors,title:alert("Title Required:")});
         }
         if(!formvalues.fname!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,fname:alert("Firstname Required")});
         }

         if(formvalues.lname!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,lname:alert("Lastname Required")});
         }
         if(formvalues.dob!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,dob:alert("Date Of Birth Required")});
         }
         if(formvalues.email!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,email:alert("Email Required")});
         }
         if(formvalues.password!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,password:alert("Password Required")});
         }

         if(formvalues.cpassword!==""){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,cpassword:alert("Confirm password Required")});
         }

         if(formvalues.password!==formvalues.cpassword){
            setOnSubmit(true)
         }
         else {
            setFormErrors({...formerrors,password:alert("Password mismatched")});
         setOnSubmit(false)
         }
     }
    return (
        <div>
        {!onsubmit&&<div>
         <div className='ab'>
          <div className='b lead me-5'>
          <label>Title</label>
          <label>FirstName</label>
          <label>LastName</label>
          
          </div>
  
  
         <div className='c lead'>
         <select className='bx5  border border-danger' name='title' onChange={handleChange} value={formvalues.title}>
          <option>Select</option>
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
          </select>
          <input type="text" className='bx6 border border-danger' placeholder='Firstname' name='fname' onChange={handleChange} value={formvalues.fname}></input> 
          <input type="text" className='bx7 border border-danger' placeholder='Lastname'  name='lname' onChange={handleChange} value={ formvalues.lname}></input> 
          </div>
  
          <div className='d'>
            <label>Date of Birth</label>
            <label>Email</label>
          </div>
          <div className='e'>
          <input type="date" className='bx3 border border-danger' placeholder='Date of Birth' name='dob' onChange={handleChange} value={formvalues.dob}></input>
          <input type="text"  className='bx4 border border-danger' placeholder='Email' name='email' onChange={handleChange} value={formvalues.email}></input> 
          </div>
  
          <div className='f'>
            <label>Password</label>
            <label>Confirm Password</label>
          </div>
          <div className='g'>
            <input type='password' className='bx1  border border-danger' placeholder='Password' name='password' onChange={handleChange} value={formvalues.password}></input>
            <input type='password' className='bx2 border border-danger' placeholder='Password' name="cpassword" onChange={handleChange} value={formvalues.cpassword}></input>
          </div>
  
          <form>
          <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck" name="agree"  onChange={handleChange}></input>
          <label class="custom-control-label" for="customCheck">agree Terms & Conditions</label>
          </div>
         </form>
  
         <div className='h'>
           <button class="btn btn-primary border border-danger" onClick={handleSubmit}>Submit</button>
           <button class="btn btn-secondary border border-danger" >Reset</button>
         </div>
         </div>
         
         
         </div>}

         <div >
         { onsubmit&&<div className='outp'>
          <label><h3  className='text text-decoration-underline ' >{ formvalues.title}</h3></label>
           <label><h3 className='text text-decoration-underline '>{ formvalues.fname}</h3></label>
           <label><h3 className='text text-decoration-underline '>{ formvalues.lname}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline'>{formvalues.dob}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline '>{formvalues.email}</h3></label><br></br>
           <label><h3 className='text text-decoration-underline'>{ formvalues.agree}</h3></label>
           </div>}
           </div>

         
        
        </div>
      )
}

export default Validname