import axios from 'axios';


const URL = `http://localhost:8000/api/`

export const loginUser = async(email,password) => {
    try{
    
        let json = {email,password}
        let response = await axios.post(`${URL}users/login`,json)
        let{_id,role} = response.data;
        localStorage.setItem('Id',_id);
        console.log('ok',role)
        return role;
      
      }catch(ex){
       console.log('Error:',ex)
      }
}




export const addUser = async(firstName,lastName,email,password,role,profileImage)=>{
  try{
   let data = new FormData();
   data.append('firstName',firstName) 
   data.append('lastName',lastName) 
   data.append('password',password)
   data.append('email',email)
   data.append('role',role)
   data.append('profileImage',profileImage)

    let response = await axios.post(`${URL}users/`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })

   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}


export const users = async()=>{
   try{
       
    let response = await axios.get(`${URL}users/`)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}


export const getSingleUser = async(id)=>{

  try{   
    let response = await axios.get(`${URL}users/${id}`)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}


export const updateUser = async(id,firstName,lastName,email,password,role,profileImage)=>{
  try{
   let data = new FormData();
   data.append('firstName',firstName) 
   data.append('lastName',lastName) 
   data.append('password',password)
   data.append('email',email)
   data.append('role',role)
   data.append('profileImage',profileImage)
   
   console.log('profileImage',profileImage)
  let response = await axios.put(`${URL}users/${id}`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })
   
    console.log('DATA',response.data)
   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}



export const getUserSupervisors = async(role)=>{

  try{
    
    let response = await axios.get(`${URL}users/getSupervisors/${role}`)
    console.log('res',response.data)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}



export const addProposal = async(title,member1,member2,supervisorId,proposalFile)=>{
  try{
   let data = new FormData();
   data.append('title',title) 
   data.append('member1',member1) 
   data.append('member2',member2)
   data.append('supervisorId',supervisorId)
   data.append('proposalFile',proposalFile)
   data.append('uid',localStorage.getItem('Id'))
   
  let response = await axios.post(`${URL}proposal/`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })
   
   console.log('DATA',response.data)

   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}


export const getUserPropsals = async()=>{

  try{
  
    let response = await axios.get(`${URL}proposal/${localStorage.getItem('Id')}`)
    console.log('res',response.data)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}