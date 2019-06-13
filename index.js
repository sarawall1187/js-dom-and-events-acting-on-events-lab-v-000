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
  let button = document.querySelector('input[value="Add Employee"]')
  button.addEventListener("click", addNewElementAsLi());
  document.querySelector('form').reset()
  //  const input = document.querySelector('input');
  //  input.addEventListener('click', function(e) {
  //    console.log(input) }
  //     return input.addNewElementAsLi();
  //     return input.value = '';
  //  })
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener("click", function(){
   let list = document.getElementsByClassName('employee-list')[0]
   // while (list.firstElementChild){
   //   list.removeChild(list.firstElementChild)
   // }
   list.innerHTML = ''
 });
  // let li = document.querySelector('li')
  // let button = document.querySelector('a')
  // button.addEventListener('click' function(e){
  //   $(li).each(function(){
  //       return li.remove();
  //     })
  // })

  // let button = document.querySelector('a')
  // button.addEventListener('click', function(e) {
  //   ul.remove();
  // }
  // return addNewLiOnClick().removeEventListener('click' function(e){
  //   let ul = document.querySelector('ul');
    // return ul.remove();
  // })
}
