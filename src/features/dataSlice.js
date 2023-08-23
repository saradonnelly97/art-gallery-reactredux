import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    objectId: 10243,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        plusOne: (state, action) => {
            return { ...state, objectId: action.payload + 1}
        },
        minusOne: (state, action) => {
            return { ...state, objectId: action.payload - 1}
        }
    }
})

export const { setData, plusOne, minusOne, inputId, clearData } = dataSlice.actions

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer
