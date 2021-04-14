// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined


const greater3 = nums => {
    nums.sort();
    var array = [];
    let contador = 0;
    for (let i = 0; i < nums.length; i++) {
        array[contador++] = nums[i];
        if (nums[i] == nums[i + 1]) {
            i++;
        }
    }

    if (aux.length < 3) {
        return undefined
    } else {
        return aux[aux.length - 3]
    }


// TESTs no modificar
console.log(greater3[4,3,4,5,1] === 3);
console.log(greater3[3,4] === undefined);
console.log(greater3[4,4,4] === 4);
console.log(greater3[1,1,2,5] === 1);