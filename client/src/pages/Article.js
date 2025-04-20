
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

// Pages
import NotFound from './NotFound';

// Component 
import Articles from '../components/Articles';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter((article) => article.name !== name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`); // Fetching data from the server
      const body = await result.json(); // Parsing the response
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  
  if (!article) {
    return <NotFound />;
  }
  
  return (
    <>
    <h1 className="m-6 text-2xl font-bold text-gray-900 sm:text-4xl">
      {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto mb-4 text-base leading-relaxed" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="my-4 text-xl font-bold text-gray-900 sm:text-2xl">Other Articles</h1>
      
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  )
}

export default Article
