import { createUserAPI, deleteUserAPI, getUserAPI, getUserByIdAPI, updateUserAPI } from "../../apis/index"
import { setUserSlice } from "../slice/user"
import { addUserSlice, deleteUserSlice, editUserSlice, getUserSlice } from "../slice/users"
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USERS_BY_ID, UPDATE_USERS_BY_ID } from "../types"
import {put,takeEvery} from 'redux-saga/effects'
export function* getUserSaga(){
    const users=yield getUserAPI()
    yield put(getUserSlice(users.data))
}

export function* getUserByIdSaga(action){
    yield getUserByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}


export function* createUserSaga(action){
    yield createUserAPI(action.user)
    yield put(addUserSlice(action.user))
}


export function* updateUserSaga(action){
    yield updateUserAPI(action.user)
    yield put(editUserSlice(action.user))
}


export function* deleteUserByIdSaga(action){
    yield deleteUserAPI(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUserAsync(){
    yield takeEvery(GET_USERS,getUserSaga)
    yield takeEvery(GET_USERS_BY_ID,getUserByIdSaga)
    yield takeEvery(CREATE_USER,createUserSaga)
    yield takeEvery(UPDATE_USERS_BY_ID,updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID,deleteUserByIdSaga)

}