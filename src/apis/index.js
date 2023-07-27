import axios from "axios";

axios.defaults.baseURL='http://localhost:3031'

export const getUserAPI=async()=>{
    axios.get('/users')
}

export const getUserByIdAPI=async(id)=>{
    axios.get(`/users/${id}`)
}

export const createUserAPI=async(user)=>{
    axios.post('/users',user)
}

export const updateUserAPI=async(user)=>{
    axios.put(`/users/${user.id}`,user)
}

export const deleteUserAPI=async(id)=>{
    // axios.delete(`/users/${id}`)
    try {
        await axios.delete(`/users/${id}`);
      } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
      }
}