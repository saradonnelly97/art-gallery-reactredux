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
        plusOne: (state) => {
            return { ...state, objectId: action.payload + 1

            }
        },
        minusOne: (state) => {
            return { ...state, objectId: action.payload - 1}
        }
    }
})

export const { setData, plusOne, minusOne } = dataSlice.actions


