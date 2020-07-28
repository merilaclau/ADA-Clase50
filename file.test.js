/* - Desarrollar una función que convierta de minutos a segundos. 
Pasar minutos por parámetro y devolver los segundos. 
Hacer tests con numeros fijos (Siempre el mismo numero deberia dar el mismo resultado). 
Recordar tirar errores y testearlos.*/

const minToSec = min => {
    if (typeof min != "number") throw new Error ("El valor ingresado no es un número");
    return min * 60; 
};

test('Pasar 3 minutos a segundos, devolviendome 180', () =>{
    expect(minToSec(3)).toBe(180);
});

test('Pasar 10 minutos a segundos, devolviendome 600', () =>{
    expect(minToSec(10)).toBe(600);
});

test('Pasar 15 minutos a segundos, devolviendome 900', () =>{
    expect(minToSec(15)).toBe(900);
});

test('Pasar "gato" a segundos tira error', () =>{
    expect(() => minToSec("gato")).toThrow("El valor ingresado no es un número");
});

//RESULTADOS TESTS
/*
MacBook-Pro-de-Meri:ADA-Clase50 Meri$ npm run test

> test@1.0.0 test /Users/Meri/Desktop/ADA online/ADA-Clase50
> jest

 PASS  ./file.test.js
  ✓ Pasar 3 minutos a segundos, devolviendome 180 (3 ms)
  ✓ Pasar 10 minutos a segundos, devolviendome 600
  ✓ Pasar 15 minutos a segundos, devolviendome 900 (1 ms)
  ✓ Pasar "gato" a segundos tira error

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.35 s
Ran all test suites.
*/