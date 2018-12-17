import * as APIUtil from '../util/search_api_util'

export const RECIEVE_RESULTS = "RECIEVE_RESULTS"

export const recieveQueryResults = payload => {
    debugger
    return({
        type: RECIEVE_RESULTS,
        payload
    })
}

export const fetchUsersProductsByName = (query) => (dispatch) => {
    debugger
    return APIUtil.fetchUsersProductsByName(query).then( queryResponse =>{
        dispatch(recieveQueryResults(queryResponse))
    })
}