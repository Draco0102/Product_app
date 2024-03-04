import { productInstance } from '..';
export const fetchProducts = async () => {
    let result = await productInstance.get('https://fakestoreapi.com/products')
    return result;
}