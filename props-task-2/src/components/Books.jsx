import React from 'react'

const Books = ({bookInfo}) => {
  return (
    <div className=''>
        <div>
            <img src={bookInfo.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <div className=''>
            <h1>{bookInfo.volumeInfo.title}</h1>
            <div>
                Authors:
                {
                    bookInfo.volumeInfo.authors.map(author => <span>{author}</span>)
                }
            </div>
            <div>
                { bookInfo.volumeInfo.description }
            </div>
        </div>
    </div>
  )
}

export default Books