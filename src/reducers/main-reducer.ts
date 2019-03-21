export function reducer(state: any = {}, action?: any) {
    console.log('action', action);
    switch (action.type) {
        case 'fetchWeather':
            return {
                ...state,
                singleDayForecast: action.payload
                }
        case 'fetchFiveDayWeather':
            return {
                ...state,
                fiveDayForecast: action.payload.list
            }
        default:
            return state;
    }
}