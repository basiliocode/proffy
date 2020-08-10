//procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)


//executar uma ação
function cloneField() {
   //duplicar os campos. Que campos? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function (field) {
        //field do laço
        field.value = ""
    })

    //colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

