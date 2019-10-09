import { createStore } from  'redux'
import { listActions, formInputChange } from './reducers'

export const store = createStore({
    listActions,
    formInputChange
})