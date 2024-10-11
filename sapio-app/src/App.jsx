import { useState, useEffect } from 'react'
import twitter from './twitter-48.png'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [color, setColor] = useState('#ffffff')

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content)
        setAuthor(data.author)
        generateRandomColor()
      })
  }

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setColor(randomColor)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])
  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div id="quote-box" style={{ color: color }}>
      <h2 id="text">{quote}</h2>
      <div id="guy">
        <p id="author">- {author}</p>
      </div>
      <div id="foot">
        <a
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          id="tweet-quote"
          target="_blank"
          style={{ backgroundColor: color }}
        >
          <img src={twitter} alt="mmm" />
        </a>
        <button
          id="new-quote"
          onClick={fetchQuote}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default App
