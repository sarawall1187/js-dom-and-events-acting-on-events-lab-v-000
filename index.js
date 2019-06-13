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
  //  const input = document.querySelector('input');
  //  input.addEventListener('click', function(e) {
  //    console.log(input)
  //     return input.addNewElementAsLi();
  //     return input.value = '';
  //  })
}

function clearEmployeeListOnLinkClick(){
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
