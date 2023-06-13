import { Article } from '@/app/interface';
import Image from 'next/image';

interface Props {
  params: {
    id: number;
  };
}

async function page({ params }: Props) {
  const URL = process.env.NEXT_PUBLIC_URL_API;
  const { id } = params;
  const response = await fetch(`${URL}/api/news/${id}`);
  const data = await response.json();
  const news: Article = data;

  return (
    <>
      <h1>{news.title}</h1>
      {news.urlToImage && (
        <Image
          src={news.urlToImage}
          alt={`imagem da noticia ${news.id}`}
          width={1000}
          height={600}
        />
      )}
      <p>{news.content}</p>
      {news.author && <p className='card-author'>{`Autor: ${news.author}`}</p>}
      {news.publishedAt && (
        <p>{`Data de publicação: ${news.publishedAt.slice(0, 10)}`}</p>
      )}
    </>
  );
}

export default page;
