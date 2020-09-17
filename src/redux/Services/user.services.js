import axios from 'axios';

const Base_URL = 'https://beecapp.herokuapp.com'

export function callGetUserGraph(action) {
    return axios.get(`${Base_URL}/graph/users`, action.payload);
}
export function callGetStatsGraph(action) {
    return axios.get(`${Base_URL}/count/all`, action.payload);
}