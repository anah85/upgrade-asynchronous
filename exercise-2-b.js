const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.querySelector('button');
btn$$.addEventListener('click',()=>{
const input$$ = document.querySelector('input').value

fetch(`${baseUrl}${input$$}`)
.then(response => response.json())
.then(data =>{
data.country.map(sacar => {
const newP$$ = document.createElement('p');
newP$$.innerHTML = `El nombre ${input$$} tiene un ${sacar.probability}% de ser de ${sacar.country_id}` 
document.body.appendChild(newP$$); 

const unaX$$ = document.createElement('button');
unaX$$.innerText = 'X';
newP$$.appendChild(unaX$$);

unaX$$.addEventListener('click', () => {
newP$$.remove();
        })
    })
})
.catch(error => console.error('Error:', error))
})

