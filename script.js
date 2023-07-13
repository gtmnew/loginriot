const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login__button')

const handleFocus = ({target}) => {
    const span = target.previousElementSibling; // irmao anterior ao input
    span.classList.add('span-active')

}

const handleFocusout = ({target}) => {
    if(target.value === '') { // pegar o valor do target pra que se nao tenha nada, nao volte a posição anterior
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}

const handleChange = () => {
    const [username, password] = inputs /* estamos trabalhando com array no momento*/
    if(username.value && password.value) {
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', '') /* recebe dois parametros, o atributo e o seu valor */
    }
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout))
inputs.forEach((input) => input.addEventListener('input', handleChange))