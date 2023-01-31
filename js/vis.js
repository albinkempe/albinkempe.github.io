function getCoffeeData(symbol){
    return fetch('https://commodities-api.com/api/timeseries?access_key=d6n1y33sea290t7sx3auysj78u7nf0octiiew0e91vf215zv4tfxp2zqbhsu&start_date=2022-02-15&end_date=2023-01-30&base=SEK&symbols=' + symbol)
        .then((response) => {return response.json().then((data) => {
            return data
        }).catch((err) => {
            console.log(err)
        })
    });
}

function createLineChart(){
    getCoffeeData('COFFEE').then((data) => console.log(data))
}