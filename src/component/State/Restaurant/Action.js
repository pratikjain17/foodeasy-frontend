import { api } from "../../Config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_EVENTS_FAILURE, GET_RESTAURANTS_EVENTS_REQUEST, GET_RESTAURANTS_EVENTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS } from "./ActionType";

export const getAllRestaurants = (token) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST})
        try{
            const response = await api.get("/api/restaurants", {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            });

            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: response.data});
            console.log("All restaurants ", response.data)
        }catch(error){
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST})
        try{
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization : `Bearer ${reqData.jwt}`
                }
            });

            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data});
            console.log("Restaurant ", response.data)
        }catch(error){
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST})
        try{
            const response = await api.get(`/api/admin/restaurants/user`, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: response.data});
            console.log("Restaurant ", response.data)
        }catch(error){
            dispatch({type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST})
        try{
            const response = await api.post(`/api/admin/restaurants`, reqData.data, {
                headers: {
                    Authorization : `Bearer ${reqData.token}`
                }
            });

            dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: response.data});
            console.log("Restaurant Created ", response.data)
        }catch(error){
            dispatch({type: CREATE_RESTAURANT_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const updateRestaurant = ({restaurantId, restaurantData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
        try{
            const response = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data});
            console.log("Restaurant updated ", response.data)
        }catch(error){
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const deleteRestaurant = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST})
        try{
            const response = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: response.data});
            console.log("Restaurant deleted ", response.data)
        }catch(error){
            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const updateRestaurantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
        try{
            const response = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data});
            console.log("Restaurant status updated ", response.data)
        }catch(error){
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const createEvent = ({data, jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_EVENTS_REQUEST})
        try{
            const response = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: CREATE_EVENTS_SUCCESS, payload: response.data});
            console.log("Restaurant Created ", response.data)
        }catch(error){
            dispatch({type: CREATE_EVENTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const getAllEvents = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST})
        try{
            const response = await api.get("/api/events", {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: response.data});
            console.log("All events ", response.data)
        }catch(error){
            dispatch({type: GET_ALL_EVENTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const deleteEvent = ({eventId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_EVENTS_REQUEST})
        try{
            const response = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: DELETE_EVENTS_SUCCESS, payload: response.data});
            console.log("Event deleted ", response.data)
        }catch(error){
            dispatch({type: DELETE_EVENTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const getRestaurantEvents = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST})
        try{
            const response = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: response.data});
            console.log("Restaurant ", response.data)
        }catch(error){
            dispatch({type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const createCategory = ({data, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST})
        try{
            const response = await api.post(`/api/admin/category`, data, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: CREATE_CATEGORY_SUCCESS, payload: response.data});
            console.log("Restaurant Created ", response.data)
        }catch(error){
            dispatch({type: CREATE_CATEGORY_FAILURE, payload: error});
            console.log(error);
        }
    }
}

export const getRestaurantCategory = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST})
        try{
            const response = await api.get(`/api/category/restaurant`, {
                headers: {
                    Authorization : `Bearer ${jwt}`
                }
            });

            dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: response.data});
            console.log("Restaurants category", response.data)
        }catch(error){
            dispatch({type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error});
            console.log(error);
        }
    }
}
