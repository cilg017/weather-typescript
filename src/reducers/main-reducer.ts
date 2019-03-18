export function reducer(state: any = {name: 'john'}, action?: any) {
    switch (action.type) {
        case 'test':
            return {...state, name: action.payload.name}
        default:
            return state;
    }
}