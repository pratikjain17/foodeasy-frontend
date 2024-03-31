import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_URL, api } from "../../Config/api"

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const response = await api.post(`/auth/signup`, reqData.userData);
        if(response.data.jwt) localStorage.setItem("jwt", response.data.jwt);
        if(response.data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS, payload:response.data.jwt})
        console.log("register success", response.data)
    } catch (error) {
        dispatch({type:REGISTER_FAILURE, payload:error})
        console.log(error)
    }
}

export const loginUser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const response = await api.post(`/auth/signin`, reqData.userData);
        if(response.data.jwt) localStorage.setItem("jwt", response.data.jwt);
        if(response.data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS, payload:response.data.jwt})
        console.log("login success", response)
    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error})
        console.log(error)
    }
}

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
        const response = await api.get(`/api/users/profile`,{
            headers: {
                Authorization : `Bearer ${jwt}`
            }
        });
        dispatch({type:GET_USER_SUCCESS, payload:response.data})
        console.log("user_profile", response.data)
    } catch (error) {
        dispatch({type:GET_USER_FAILURE, payload:error})
        console.log(error)
    }
}

export const addToFavorites=({jwt, restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        const response = await api.put(`/api/restaurants/${restaurantId}/add-favorite`,{
            headers: {
                Authorization : `Bearer ${jwt}`
            }
        });
        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:response.data})
        console.log("Add to favorites", response.data)
    } catch (error) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error})
        console.log(error)
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
    try {
        localStorage.clear();
        dispatch({type:LOGOUT})
        console.log("logout success")
    } catch (error) {
        console.log(error)
    }
}