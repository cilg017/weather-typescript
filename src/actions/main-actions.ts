export function test(): any {
    return {
        type: 'test',
        payload: {
            name: 'carly'
        }
    }
}

export function fetchWeather(value: string): any {
    const apiKey = '1791c86fe68c499a0bc5e701f89d0da4';
    return (dispatch: any) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${value}&appid=${apiKey}`)
            .then((res: any) => {
                return res.json()})
            .then((json: any) => {
                dispatch({
                type: 'fetchWeather',
                payload: json
            })})
    }
}

export function fetchFiveDayWeather(value: string): any {
    const apiKey = '1791c86fe68c499a0bc5e701f89d0da4';
    return (dispatch: any) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${value}&appid=${apiKey}`)
            .then((res: any) => {
                return res.json()})
            .then((json: any) => {
                dispatch({
                type: 'fetchFiveDayWeather',
                payload: json
            })})
    }
}
