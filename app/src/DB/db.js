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