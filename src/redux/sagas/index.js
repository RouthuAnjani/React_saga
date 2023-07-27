import { all } from "redux-saga/effects";
import { watchUserAsync } from "./user";

export function* rootSaga(){
yield all([
    watchUserAsync()
])
}