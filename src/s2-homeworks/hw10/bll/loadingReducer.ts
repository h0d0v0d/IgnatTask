const initState = {
    isLoading: false,
}

type LoadingStateType = typeof initState

export const loadingReducer = (state: LoadingStateType = initState , action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {return {isLoading: action.isLoading}}
        default: return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
