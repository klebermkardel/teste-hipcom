let minha_lista = [5, 4, 1, 4, 5, 8, 6, 6, 5, 1, 6, 5]
console.log(minha_lista)
 
function itemCount(lista){ 
    // Cria um set(remove itens repetidos) e transforma em um array 
    const copia_lista = [...new Set(lista)]; 
    const array_resultado = [] 
     
    copia_lista.forEach(item=>{ 
        // filtra o item x que é igual a item e retorna um array [x, x] e leio o .length 
        const repetida = lista.filter(x => x === item).length 
        // crio o item dentro do objeto e atribuo quantas vezes foi repetido 
        array_resultado.push({ 
            item, 
            repetida 
        }) 
 
        console.log(`O item ${item} foi repetido ${repetida} vezes.`); 
    }) 
 
    console.table(array_resultado) 
} 
 
itemCount(minha_lista)