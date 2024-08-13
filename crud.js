const tbody = document.querySelector('#tbody')
const storage = window.localStorage
const itens = storage.getItem('itens') ? JSON.parse(storage.getItem('itens')) : []

itens.forEach((item, index) => {
  const tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
})

function editItem(index) {
  // Abrir modal para editar item
}

function deleteItem(index) {
  itens.splice(index, 1)
  storage.setItem('itens', JSON.stringify(itens))
  window.location.reload() // Recarregar a página
}