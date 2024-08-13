const form = document.querySelector('#form')
const btnSalvar = document.querySelector('#btnSalvar')

btnSalvar.onclick = e => {
  e.preventDefault()

  const nome = document.querySelector('#nome').value
  const email = document.querySelector('#email').value
  const phone = document.querySelector('#phone').value

  if (nome == '' || email == '' || phone == '') {
    return
  }

  saveItem({nome, email, phone})

  // Limpar os campos do formulário
  form.reset()
}

function saveItem(item) {
  const storage = window.localStorage
  let itens = storage.getItem('itens') ? JSON.parse(storage.getItem('itens')) : []
  itens.push(item)
  storage.setItem('itens', JSON.stringify(itens))
}