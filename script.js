function requisitar(url){
  document.getElementById('content').innerHTML = ''

  let ajax = new XMLHttpRequest()
  
  ajax.open('GET', url)

  console.log(ajax.readyState)

  ajax.onreadystatechange = () => {
      if(ajax.readyState == 4 && ajax.status == 200) {
          document.getElementById('content').innerHTML = ajax.responseText
      }

      if(ajax.readyState == 4 && ajax.status == 404) {
          document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
      }
  }

  setTimeout(() => {
      ajax.send()
  }, 0)
}   

