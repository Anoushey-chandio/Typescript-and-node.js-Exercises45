 // Cities: Write a function called describe city() that accepts the name of a city and it's country.
// The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. 
//call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = 'Default country'){
               console.log(`${city} is in ${country}`)
}

describe_city('karachi', 'pakistan');

describe_city('istanbul', 'turkey');

describe_city('Tokyo');