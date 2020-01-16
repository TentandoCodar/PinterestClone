import { takeEvery, all, put, delay } from 'redux-saga/effects';
import api from '../services/api';
function* getData({payload}) {
    let response = "";
    const token = localStorage.getItem('token');
    yield api.get(`/picture/${token}`).then((resp) => {
        response = resp.data;
        
        
    }).catch((err) => {
        console.log(err);
    })
    yield put({type: "START", pictures: response})
}

function* getProfileData({payload}) {
    console.log(payload)
    /*const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    let response = {};
    yield api.get(`user/${id}`, {headers: {token}}).then((resp) => {
      response = resp.data;
    }).catch((err) => {
      console.log(err);
    })

    yield put({type: "GET", user: response})*/
}

export default function* root() {
    yield takeEvery('ASYNC_INIT', getData);
    yield takeEvery('ASYNC_PROFILE', getProfileData)
    
}