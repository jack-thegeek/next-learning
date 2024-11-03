'use client'
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const { id } = useParams();

  return <h1>Blog Post ID: {id}</h1>;
};

export default BlogPost;