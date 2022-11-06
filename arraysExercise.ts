const ages: number [] = [] ;

const gameBoard:string [][] = [];

type Product =  {
name: string;
price: number;
}




function getTotal (products: Product[]): number {    //focus on creating array of
   let total = 0;
   for (let product of products){
    total += product.price;
   } 
   return total;
}
