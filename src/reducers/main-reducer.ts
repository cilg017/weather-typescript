export function reducer(state: any = {name: 'john', data: {}}, action?: any) {
    switch (action.type) {
        case 'test':
            return {...state, name: action.payload.name}
        case 'fetchWeather':
            return {
                ...state,
                singleDayForecast: action.payload
                }
        default:
            return state;
    }
}