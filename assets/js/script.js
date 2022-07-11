let botoesativaveis = document.querySelectorAll('.botoesmenu1')
console.log(botoesativaveis);

botoesativaveis.forEach(elemento => {
    elemento.addEventListener('click', () =>{
        let botaoatual = document.querySelectorAll('.botoesativo')
        if(botaoatual.length > 0) {
            botaoatual[0].className = botaoatual[0].className.replace('botoesativo', '')
        }
        elemento.classList.add('botoesativo')
    })    
});