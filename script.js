// GETS
const mainContainer = document.getElementById('mainContainer')
const infoContainer = document.getElementById('infoContainer')
const back = document.getElementById('back')
const addNew = document.getElementById('addNew')
const addNewWindow = document.getElementById('addNewWindow')
const image = document.getElementById('image')
const title = document.getElementById('title')
const year = document.getElementById('year')
const rating = document.getElementById('rating')
const description = document.getElementById('description')
const submit = document.getElementById('submit')

// LISTENERS
back.addEventListener("click", goBack)
addNew.addEventListener("click", addNewMovie)
submit.addEventListener("click", submitNewMovie)

// VARS
let data = [
    {
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: [],
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }],
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ],
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: [],
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: [],
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }],
    },
]
let movie
let commentNameInput
let commentInput
let comments
let movieId

// FUNCTIONS
indexing()

function indexing() {
    data.map((item, index) => {

        item.id = index

        item.comments.map((item, index) => {
            item.id = index
        })
    })
}

renderCards()

function renderCards() {

    mainContainer.innerHTML = ""

    data.map(item => {

        let movieCard = document.createElement('div')
        movieCard.setAttribute('class', 'movieCard')
        movieCard.setAttribute('id', item.id)

        let poster = document.createElement('img')
        poster.src = item.image
        poster.style.pointerEvents = "none"

        let infoPart = document.createElement('div')
        infoPart.setAttribute('class', 'infoPart')
        infoPart.style.pointerEvents = "none"

        let name = document.createElement('h2')
        name.innerText = item.title

        let year = document.createElement('h5')
        year.innerText = item.year

        let rating = document.createElement('h3')
        rating.innerText = item.rating

        let about = document.createElement('p')
        about.innerText = item.description

        movieCard.addEventListener('click', setCardId)

        mainContainer.appendChild(movieCard)
        movieCard.appendChild(poster)
        movieCard.appendChild(infoPart)

        let movieInfo = [name, year, rating, about]
        movieInfo.map(item => {
            infoPart.appendChild(item)
        })
    })
}

function setCardId(event) {
    let id = Number(event.target.id)
    showCard(id)
}

function showCard(id) {
    infoContainer.style.display = "flex"
    mainContainer.style.display = "none"
    addNew.style.display = "none"
    back.style.display = "block"
    addNewWindow.style.display = "none"

    infoContainer.innerText = ""

    comments = document.createElement('div')

    data.map(item => {
        if (item.id === id) {
            movie = item
            movieId = movie.id
        }
    })

    let poster = document.createElement('img')
    poster.src = movie.image

    let infoSide = document.createElement('div')

    let title = document.createElement('h1')
    title.innerText = `Title: ${movie.title}`

    let year = document.createElement('h3')
    year.innerText = `Year: ${movie.year}`

    let rating = document.createElement('h3')
    rating.innerText = `Rating: ${movie.rating}`

    let description = document.createElement('h2')
    description.innerText = `Description: ${movie.description}`

    let commentsInfo = document.createElement('p')
    if (movie.comments.length === 0) {
        commentsInfo.innerText = "No comment's yet. Be the first!"
    } else {
        commentsInfo.innerText = "User's commentaries:"
        comments.style.border = "1px black solid"
        comments.style.marginBottom = "10px"
        comments.style.padding = "5px"
    }

    movie.comments.map(item => {
        let userName = document.createElement('p')
        userName.innerText = `${item.name} says:`

        let comment = document.createElement('p')
        comment.innerText = item.comment

        let removeBtn = document.createElement('button')
        removeBtn.innerText = "Remove comment"
        removeBtn.setAttribute(`id`, item.id)

        comments.appendChild(userName)
        comments.appendChild(comment)
        comments.appendChild(removeBtn)

        removeBtn.addEventListener("click", deleteComment)
    })

    commentNameInput = document.createElement('input')
    commentNameInput.placeholder = "Your name"

    commentInput = document.createElement('input')
    commentInput.placeholder = "Your comment"

    let send = document.createElement('button')
    send.setAttribute(`id`, movie.id)
    send.innerText = "Send"

    send.addEventListener("click", sendComment)


    infoContainer.appendChild(poster)
    infoContainer.appendChild(infoSide)

    let information = [title, year, rating, description, commentsInfo, comments, commentNameInput, commentInput, send]

    information.map(item => {
        infoSide.appendChild(item)
    })

}

function goBack() {
    infoContainer.style.display = "none"
    mainContainer.style.display = "flex"
    back.style.display = "none"
    addNew.style.display = "block"
    addNewWindow.style.display = "none"
    renderCards()
}

function sendComment() {
    if (commentNameInput.value.length === 0) {
        alert(`Please enter your name`)
    } else {
        if (commentInput.value.length === 0) {
            alert(`Please enter fill your comment`)
        } else {
            data.filter(x => x.id === data[movieId])
            data[movieId].comments.push({
                name: commentNameInput.value,
                comment: commentInput.value
            })
            indexing()
            showCard(movieId)
        }
    }
}

function deleteComment(event) {
    data[movieId].comments = data[movieId].comments.filter(x => x.id !== Number(event.target.id))
    indexing()
    showCard(movieId)
}

function addNewMovie() {
    infoContainer.style.display = "none"
    mainContainer.style.display = "none"
    back.style.display = "block"
    addNew.style.display = "none"
    addNewWindow.style.display = "block"

    image.value = ""
    title.value = ""
    year.value = ""
    rating.value = ""
    description.value = ""
}

function submitNewMovie() {

    data.push({
        image: `${image.value}`,
        title: `${title.value}`,
        year: `${year.value}`,
        rating: `${rating.value}`,
        description: `${description.value}`,
        comments: [],
    })
    indexing()
    renderCards()
    mainContainer.style.display = "flex"
    addNewWindow.style.display = "none"
    addNew.style.display = "block"
    back.style.display = "none"
}


