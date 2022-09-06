//Crea una función que reciba un arreglo de palabras (strings) 
//y devuelva un arreglo con las palabras que sean palíndromo

const arr= ['ana', 'dora']
const arryPalindromo = (arr) =>{

     return arr.map(item=>{

        const newArr= Array.from(item);
        if(item === newArr){
            newArr.reverse();
            console.log('que devuelve: ', newArr);
            return item;
        }
        
       
    })

}
arryPalindromo(arr);