import axios from 'axios';

const Base_URL = 'https://beecapp.herokuapp.com'

export function callGetShipmentGraph(action) {
    return axios.get(`${Base_URL}/graph/shipments`, action.payload);
}