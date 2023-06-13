import { Article } from '@/app/interface';
import Image from 'next/image';

interface Props {
  params: {
    id: number;
  };
}

async function page({ params }: Props) {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/api/news/${id}`);
  const data = await response.json();
  const news: Article = data;

  return (
    <>
      <h1>{`Titulo: ${news.title}`}</h1>
      {news.urlToImage && (
        <Image
          src={news.urlToImage}
          alt={`imagem da noticia ${news.id}`}
          width={1000}
          height={600}
        />
      )}
      <h1>{`conteudo: ${news.content}`}</h1>
    </>
  );
}

export default page;
