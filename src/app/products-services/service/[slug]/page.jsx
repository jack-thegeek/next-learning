import style from './styles.module.scss'

export async function fetchBlogPost(slug) {
  'use server';  // 标记为服务端动作
  // 模拟获取数据的逻辑
  return { title: `Blog Post: ${slug}`, content: `Content for ${slug}` };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);  // 调用服务端动作获取数据

  return (
    <div className={style.container}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}