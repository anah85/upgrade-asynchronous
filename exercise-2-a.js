const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click',()=>{
const input$$ = document.querySelector('input').value

fetch(`${baseUrl}${input$$}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
})
