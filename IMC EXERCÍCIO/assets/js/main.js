function calculaimc () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm(evento){

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const imc = peso.value /   (altura.value **2);
      
        if(imc >=0 && imc < 18.5){
            resultado.innerHTML += `<p> O seu iMC é ${imc} (Abaixo do peso.) </p>`;
        } else if ( imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `<p> O seu iMC é ${imc} (Peso normal.) </p>`;
        } else if ( imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `<p> O seu iMC é ${imc} (Sobrepeso.) </p>`;
        } else if ( imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `<p> O seu iMC é ${imc} (Obesidade grau 1.) </p>`;
        } else if ( imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `<p> O seu iMC é ${imc} (Obesidade grau 2.) </p>`;
        } else if ( imc > 40 ) {
            resultado.innerHTML = `<p> O seu iMC é ${imc} (Obesidade grau 3.) </p>`;
        } else  {
                resultado.innerHTML = `<p> Verifique os dados e tente novamente. </p>`;
        }    

    }

    form.addEventListener('submit', recebeEventoForm);
}

calculaimc() 