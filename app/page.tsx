import Card from './components/Card';
import styles from './page.module.css';
import fs from 'fs';

import { Article } from './interface';

export default async function Home() {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=13371130ed8048ffa7cb15d51d161f70',
  );

  const data = await response.json();
  const news: Article[] = data.articles;

  for (var index in news) {
    news[index].id = Number(index) + 1; // Adiciona a chave "id" em cada objeto com o valor do índice
  }
  const jsonNews = JSON.stringify(news);

  fs.writeFile('./pages/api/arquivo.json', jsonNews, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.error('sucesso');
    }
  });

  return (
    <main className={styles.main}>
      <h1>Desafio Técnico Tech Pro Bem</h1>
      <h1>Noticias</h1>
      <section className='news'>
        {news.map((noticia: Article, index) => (
          <Card key={noticia.id} noticia={noticia} />
        ))}
      </section>
    </main>
  );
}
