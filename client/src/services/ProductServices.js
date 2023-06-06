export default class ProductService {

    async getProductById(id) {
        try{
            const res = await fetch('/data/products.json');
            const data = await res.json();
            const product = data.find((p) => p.id === id);
            return product;
        }
        catch(e){
            console.log(e);
        }
    }

    async getProducts() {
        try{
            const res = await fetch('/data/products.json');
            const data = await res.json();
            return data;
        }
        catch(e){
            console.log(e);
        }
       
           
    }

    async getNProducts(n) {
        try{
            const res = await fetch('/data/products.json');
            const data = await res.json();
            data.splice(n);
            return data;
        }
        catch(e){
            console.log(e);
        }
       
           
    }
}
