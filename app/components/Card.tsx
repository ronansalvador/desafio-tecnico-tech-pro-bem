import { Article } from '../interface';

interface CardProps {
  noticia: Article;
}

function Card({ noticia }: CardProps) {
  return (
    <>
      <div className='card'>
        <p className='card-title'>Titulo: {noticia.title}</p>
        <p>{noticia.id}</p>
        {noticia.author && (
          <p className='card-author'>Author:{noticia.author}</p>
        )}
      </div>
    </>
  );
}

export default Card;
