let cities = require ('countries-cities');
var buildUrl = require('build-url');


export function selector(countries){
    let selection = [];
    countries.forEach((value) => {
        let obj = { value: `${value}`, label: `${value}` }
        selection.push(obj);
    })
    return selection;
};

export function cityList(country){
    let selection = [];
    let cityList = cities.getCities(country);
    cityList.forEach((value) => {
        let obj = { value: `${value}`, label: `${value}` }
        selection.push(obj);
    })
    return selection;
}

export function intoUrl(state){
    let { searchvalue, yearvalue, selectedCity } = state;
    let location = [];
    if(selectedCity){
    selectedCity.forEach((city) => {
        let array = city.value
        location.push(array)
    })}
    console.log(location)
    let url = buildUrl('https://alumni-backend-app.herokuapp.com',{
        path : 'alumni/users',
        disableCSV: true,
        queryParams : {
            search : searchvalue,
            endYear : yearvalue,
            'location.city' : location
        }
    })
    return decodeURI(url);
}