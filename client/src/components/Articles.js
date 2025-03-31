import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                <Link to={`/article/${article.name}`}>
                  <img className='object-cover object-center w-full lg:h-48 md:h-36' src={article.thumbnail} alt="blog" />
                </Link>
                <div className="p-6">
                  <Link key={index} to={`/article/${article.name}`}>
                  <h3 className="mb-3 text-lg font-medium text-gray-900">{article.title}</h3>
                  </Link>
                  <p className="mb-3 leading-relaxed">
                    {article.content[0].substring(0, 110)}...
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <Link className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" to={`/article/${article.name}`}>
                      {/* <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"> */}
                        Read More
                      {/* </button> */}
                    </Link>
                    {/* <span className="inline-flex items-center w-full px-2 py-1 mt-2 text-xs font-semibold tracking-widest text-gray-700 bg-gray-200 rounded sm:mt-0 sm:w-auto">
                      {article.content.length} Comments
                    </span> */}
                  </div>
                </div>
              </div>
            </div>  
          ))}
    </>
  )
}

export default Articles
