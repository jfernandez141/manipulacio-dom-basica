const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

console.log({
    h1,
    input1,
    input2,
    btnCalcular,
});

btnCalcular.addEventListener('click',btnOnClick);
// form.addEventListener('submit',sumarInputValues);


// function sumarInputValues(event){
//     console.log(event);
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     result.innerText = "Resultado: " + sumaInputs
// }

function btnOnClick(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    result.innerText = "Resultado: " + sumaInputs
}

//si Colocamos en el form del html al ultimo button como type button no reinicia la pag
// si no lo toma como typo submit y trata de enviar el formulario



