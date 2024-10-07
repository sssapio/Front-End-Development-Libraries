const Book = (props) => {
  //console.log(props)
  const { img, title, author, number } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
      >
        {author}
      </h4>
      <span className="number">#{number + 1}</span>
    </article>
  )
}
export default Book
