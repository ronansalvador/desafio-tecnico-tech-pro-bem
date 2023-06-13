import Link from 'next/link';
import { Article } from '../interface';

interface CardProps {
  noticia: Article;
}

function Card({ noticia }: CardProps) {
  return (
    <>
      <Link href={`/news/${noticia.id}`} className='card'>
        <p className='card-title'>Titulo: {noticia.title}</p>
        <p>{noticia.id}</p>
        {noticia.author && (
          <p className='card-author'>Author:{noticia.author}</p>
        )}
      </Link>
    </>
  );
}

export default Card;
