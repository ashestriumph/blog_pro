import React, {useState} from 'react'

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('')
    const [commentText, setCommentText] = useState('')
    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: 'POST',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            },        
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
    };
  return (
    <form className="px-8 pt-6 pb-8 mb-4 rounded shadow">
      <h3 className='mb-4 text-xl font-bold text-gray-900'>Add a comment</h3>
      <label className="block mb-2 text-sm font-bold text-gray-700">Name :</label>
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
      />
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Comment :
      </label>
      <textarea 
        rows="4" 
        cols="50" 
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
      />
      <button 
        onClick={() => addComments()}
        className='px-4 py-2 font-bold text-white bg-blue-500 rouded hover:bg-blue-700 focus:outline-none focus:shadow-outline'>
        Add Comment
      </button>
    </form>
  )
}

export default AddCommentForm
