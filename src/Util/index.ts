
export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'b953dc0ab7mshca9cbeaca46b404p12bcb2jsnb94b35d303b5',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
        headers: headers,
        

    })
    const result = await response.json()
    return result
}

