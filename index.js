function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  const input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi(){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  const info = retrieveEmployeeInformation()
  li.innerHTML = info.toString();
  ul.appendChild(li)
}

function addNewLiOnClick(){
   const input = document.querySelector('input');
   input.addEventListener('click', function(e) {
      return input.addNewElementAsLi();
      return input.value = '';
   })
}

function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')
  button.addEventListener('click', function(e) {
    ul.remove();
  }
}
