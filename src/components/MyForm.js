import { Input } from "@mui/material"
import { Container, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setUserSlice } from "../redux/slice/user"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_USER, UPDATE_USERS_BY_ID } from "../redux/types"

const MyForm=()=>{
    // const[user,setUser]=useState({
    //         id: 0,
    //         name: '',
    //         email: '',
    //         password: ''
    // })
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const handleChange=(prop)=>(event)=>{
        dispatch(setUserSlice({...user,[prop]:event.target.value}))
    }
    const handleSubmit=()=>{
        // user.id ===0 ? dispatch(addUserSlice({...user,id:nanoid(8)})):dispatch(editUserSlice(user))
        user.id ===0 ? dispatch({type:CREATE_USER,user:{...user,id:nanoid(8)}}):dispatch({type:UPDATE_USERS_BY_ID,user})

        dispatch(setUserSlice(
            {
                id: 0,
                name: '',
                email: '',
                password: ''
        }
        ))
    }
    return <>
    <Container>
    <Input value={user.id} fullWidth disabled></Input>
    <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth></Input>
    <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth></Input>
    <Input onChange={handleChange('password')} placeholder="Enter Password" value={user.password} fullWidth></Input>
    <Button onClick={()=>handleSubmit()} fullWidth variant="contained">Submit</Button>
    </Container>
    </>
}
export default MyForm