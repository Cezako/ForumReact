import {updateStatus} from "../Slice/apiStatusSlice.js";


const apiStatusMiddleware = (store) => (next) => (action) => {
    next(action)
    const {type} = action
    if (type.endsWith('fulfilled') || type.endsWith('pending') || type.endsWith('rejected')) {
        const actionType = type.split('/')[1]
        const status = {
            type: actionType,
            status: action.meta.requestStatus
        }
        store.dispatch(updateStatus(status))
    }
}


export default apiStatusMiddleware