import img01 from "./assets/img01.jpg"
import img02 from "./assets/img02.jpg"
import img03 from "./assets/img03.jpg"
import img04 from "./assets/img04.jpg"
import img05 from "./assets/img05.jpg"
import img06 from "./assets/img06.jpg"
import img07 from "./assets/img07.jpg"
import img08 from "./assets/img08.jpg"
import img09 from "./assets/img09.jpg"
import img10 from "./assets/img10.jpg"
import img11 from "./assets/img11.jpg"

const Products = [
    {
        id: 1,
        title: "Nike LD Waffle Sacai Black Nylon",
        price: 35000,
        img: img01,
        category: "nike",
        stock: 10,
        temporada: "2023"
    },
    {
        id: 2,
        title: "Nike Dunk Low Off-White Pine Green",
        price: 344,
        img: img02,
        category: "nike",
        stock: 10,
        temporada: "2023"
    },
    {
        id: 3,
        title: "Nike Air Force 1 Low Supreme Black",
        price: 475,
        img: img03,
        category: "nike",
        stock: 10,
        temporada: "2023"
    },
    {
        id: 4,
        title: "Nike LD Waffle Sacai White Nylon",
        price: 399,
        img: img04,
        category: "nike",
        stock: 10,
        temporada: "2023"
    },
    {
        id: 5,
        title: "Nike Dunk Low SP Kentucky (2021)",
        price: 405,
        img: img05,
        category: "nike",
        stock: 10,
        temporada: "2023"
    },
    {
        id: 6,
        title: "Nike Dunk Low Off-White University",
        price: 285,
        img: img06,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
    {
        id: 7,
        title: "Nike Air Max II Light Atmos",
        price: 360,
        img: img07,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
    {
        id: 8,
        title: "Nike Air Force 1 Low CLOT Blue Silk",
        price: 335,
        img: img08,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
    {
        id: 9,
        title: "Nike Air Max 90 OG Volt (2020)",
        price: 799,
        img: img09,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
    {
        id: 10,
        title: "Nike Dunk High Varsity Maize",
        price: 501,
        img: img10,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
    {
        id: 11,
        title: "Nike Air Rubber Dunk Off-White UNC",
        price: 377,
        img: img11,
        category: "nike",
        stock: 10,
        temporada: "2024"
    },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products)
        }, 500)
    })
}


export const getProductsId = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.find(prod => prod.id === parseInt(itemId)))
        }, 500)
    })
}

