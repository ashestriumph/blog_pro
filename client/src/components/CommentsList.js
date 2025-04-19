import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className='my-6 text-xl font-bold text-gray-900 sm:text-2xl'>
        Comments :
      </h3>
      {comments.map((comment, index) => (
        <div key={index}>
            <h4 className='text-xl font-bold'>{comment.username}</h4>
            <p className='mt-1 mb-4'>{comment.text}</p>
        </div>
      ))}
    </>
  )
}

export default CommentsList
