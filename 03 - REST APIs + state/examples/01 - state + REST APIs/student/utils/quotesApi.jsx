// this shit is the equivalent of a run on sentance. its hard to comprehend
//esp when your brain naturally mangles things #dyslexia #AuDHD hahaha

//   const handleClick = () => {
//     fetch(RANDOM_QUOTE_URL)
//       .then((response)=> {
//         return response.json()
//       }).then((data)=> {
//         setQuoteData({
//           quote: data.quote,
//           author: data.author
//         })
//       })
//   }

const BASE_URL = 'https://dummyjson.com/quotes/random'

// const getRandomQuote = () => {
//     //fetch 
//     fetch(`${BASE_URL}/random`)
//     .then((response) => {
//         return response.json
//     })
// }

const getRandomQuote = () => 
    //fetch 
    fetch(`${BASE_URL}/random`).then((response) => response.json())

// const getQuoteList = (page) => {
//     //fetch 
//     fetch(`${BASE_URL}?page=${page}`)
// }

// const getQuoteList = (id) => {
//     //fetch 
//     fetch(`${BASE_URL}?id=${id}`)
// }

