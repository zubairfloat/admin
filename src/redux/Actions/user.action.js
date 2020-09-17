import * as types from '../Types/user.types'

export function GetUserGraph(data) {
    return {
        type: types.GET_USER_GRAPH_REQUEST
    };
}
export function GetStatsGraph(data) {
    return {
        type: types.GET_STATS_GRAPH_REQUEST
    };
}