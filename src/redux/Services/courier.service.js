import axios from 'axios';

const Base_URL = 'https://beecapp.herokuapp.com'

export function callGetCourierGraph(action) {
    return axios.get(`${Base_URL}/graph/couriers`, action.payload);
}