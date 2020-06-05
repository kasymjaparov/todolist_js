const mainBtn=document.querySelector('.main_btn');
const mainInput=document.querySelector('.main_input');
const mainTextarea=document.querySelector('#main_textarea');
fetch('http://localhost:3030/list')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('.list')
            data.forEach(item => {
              const btnBlock=document.createElement('div')
              btnBlock.classList.add('btnBlock');
                const li = document.createElement('input');
                const btnDone=document.createElement('button');
                btnDone.textContent="Done";
const btnEdit=document.createElement('button');
btnEdit.textContent="Edit";
const btnDelete=document.createElement('button');
btnDelete.textContent="Delete";
                li.value = item.text;
                li.setAttribute('data-number', item.id)
                if(item.done) li.classList.add('done')
                list.appendChild(li);
               li.after(btnBlock);
               btnBlock.appendChild(btnDone);
               btnBlock.appendChild(btnEdit);
               btnBlock.appendChild(btnDelete);

////////////////////////////////////////////////////////////////////////////////////
            btnDone.addEventListener('click',()=>{
  if(item.done){
    editItem(item.id,{
      done:!item.done})
      li.classList.remove('done');

  }
  else{
      li.classList.add('done');
    editItem(item.id,{
      done:!item.done})
  
  } 
  })

/////////////////////////////////////////////////////////////////////////////
            btnDelete.addEventListener('click',()=>{
              deleteItem(item.id);
            })

//////////////////////////////////////////////////////////////
            btnEdit.addEventListener('click',()=>{
              editItem(item.id,{
                text:`${li.value}`}
                )
              // location.reload() // window.location.reload()
              .then(()=>window.location.reload())
            })
/////////////////////////////////////////////////////////////////////////
mainBtn.addEventListener('click',()=>{
  addItem({
    text:`${mainInput.value}`,
    description:`${mainTextarea.value}`
  })
})
            });
          })   
  ////////////////////////////////////////////////////////////////////////////////////////  
       function deleteItem (id){
            fetch(`http://localhost:3030/delete/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then( () => window.location.reload());
          }
///////////////////////////////////////////////////////
          function editItem(id,object){
            fetch(`http://localhost:3030/edit/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(object),
            })
            .then( () => window.location.reload());
          }
//////////////////////////////////////////////////////////////
          function addItem(object){
            fetch('http://localhost:3030/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(object),
            })
            .then( () => {
             
            })
          }
          ////////////////////////////////////////////////////////
          const getItem = () => {
            return fetch(`${endpoint}/list`)
              .then(response => response.json())
          }
        