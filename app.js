const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){
    document.getElementById('book-store').textContent='';
    document.getElementById('result-found').textContent='';
    const search = searchInput.value;
    const url = `https://openlibrary.org/search.json?q=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data));
searchInput.value='';
});

const displayResult= data =>{
const resultFound = document.getElementById('result-found');

resultFound.innerHTML=`
<h3 class='text-center'>Result Found: ${data.numFound}</h3>
`;

const dataSlice = data.docs.slice(0,15);
const allBooks = document.getElementById('book-store');
dataSlice?.forEach(element=>{
    console.log(element)
    const book = document.createElement('div');
    book.innerHTML=`
    <div class="col">
        <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Book Name: ${element.title}</h5>
            <h5 class="card-title">Author Name: ${element.author_name}</h5>
            <h5 class="card-title">Publisher Name: ${element.publisher}</h5>
            <h5 class="card-title">First published date: ${element.first_publish_year}</h5>
        </div>
        </div>
    </div>
    `;
    allBooks.appendChild(book);
})

};