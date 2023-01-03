import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):  UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return state.map(Object).sort((x, y) => {return x.name > y.name ? 1 : -1})
            }
            return state.map(Object).sort((x, y) => {return x.name > y.name ? -1 : 1})
        }
        case 'check': {
            return state.filter(el => el.age > 18)
        }
        default:
            return state
    }
}
