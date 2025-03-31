import React from 'react'
import articleContent from './article-content'
import { Link } from 'react-router-dom'

// Component
import Articles from '../components/Articles'

const ArticleList = () => {
  return (
    <div>
      <h1 className="m-6 text-2xl font-bold text-gray-900 sm:text-4xl">
        Articles
      </h1>
      
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  )
}

export default ArticleList
