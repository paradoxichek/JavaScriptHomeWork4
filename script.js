let cars = [
    {
        name: 'BMW',
        color: 'white',
        model: 'M4',
        price: 80000,
        year: 2020
    },
    {
        name: 'Gentra',
        color: 'black',
        model: '2',
        price: 15000,
        year: 2022
    },
    {
        name: 'Kia',
        color: 'white',
        model: 'K5',
        price: 42000,
        year: 2023
    },
    {
        name: 'Matiz',
        color: 'red',
        model: 'best',
        price: '6000',
        year: 2011
    },
    {
        name: 'Malibu',
        color: 'gray',
        model: "2",
        price: 37000
    },
    {
        name: 'Nexia',
        color: 'blue',
        model: "3",
        price: 12000
    }
]

let cheap = cars.filter(item => item.price < 35000);
console.log(cheap);




let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];
let index = prompt('Введите индекс');

if (arr.includes(arr[index])) {
    arr.splice(index, 1);
    alert   ('Элемент успешно удален из массива.');
    console.log(arr);
} else {
    console.log('Такого элемента в массиве нет.');
}