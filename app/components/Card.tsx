import Link from 'next/link';
import { Article } from '../interface';
import Image from 'next/image';
import './Card.css';

interface CardProps {
  noticia: Article;
}

function Card({ noticia }: CardProps) {
  return (
    <>
      <Link href={`/news/${noticia.id}`} className='card'>
        <h3 className='card-title'>{noticia.title}</h3>
        {noticia.urlToImage && (
          <Image
            src={noticia.urlToImage}
            alt={`imagem da noticia ${noticia.id}`}
            width={300}
            height={150}
          />
        )}
        <p>{noticia.description}</p>

        {noticia.author && (
          <p className='card-author'>Author:{noticia.author}</p>
        )}
        {noticia.publishedAt && <p>{noticia.publishedAt.slice(0, 10)}</p>}
      </Link>
    </>
  );
}

export default Card;
