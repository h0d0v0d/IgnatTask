const initState = {
    themeId: 1,
}

export type InitialStateType = typeof initState
export type ActionType = {type: 'SET_THEME_ID', id: number}

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': return {themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
