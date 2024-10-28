
// реализация шаблона Проксирования с ипользованием объекта Proxy

// main object
const temperature = {celsius:0, fahrenheit:32};

// proxy
const handler = {
    set(target, key, value){
        target[key] = value;
        switch(key){
            case "celsius":
                target.fahrenheit = calculateFahrenheit(value);
                break;
            case "fahrenheit":
                target.celsius = calculateCelsius(value);
                break;
        }
    },
    get(target, key){
        return target[key];
    }
};
function calculateCelsius(value){
    return (value - 32) / 1.8;
}

function calculateFahrenheit(value){
    return (value * 1.8) + 32;
}

degrees = new Proxy(temperature, handler);
console.log(degrees);

degrees['celsius'] = 20
console.log(degrees);
