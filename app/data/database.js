import Apple from '../assets/Apple.jpg'
import Orange from '../assets/Orange.jpg'
import Onion from '../assets/Onion.jpg'
import Tomato from '../assets/Tomato.jpg'


export const FRUITS = 'fruits'

export const VEGETABLES = 'vegetables'

export const CATEGORIES = [FRUITS, VEGETABLES]

export const PRODUCTS = [
  {
    id: 1, 
    name: 'Apple',
    category: FRUITS,
    price: 200, 
    image: Apple
  },
  {
    id: 2, 
    name: 'Orange',
    category: FRUITS,
    price: 300, 
    image: Orange
  },
  {
    id: 3, 
    name: 'Onion',
    category: VEGETABLES,
    price: 100, 
    image: Onion
  },
  {
    id: 4, 
    name: 'Tomato',
    category: VEGETABLES,
    price: 250, 
    image: Tomato
  },
]

export const DATABASE = {
  categories: CATEGORIES,
  products: PRODUCTS,
}