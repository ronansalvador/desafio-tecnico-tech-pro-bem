import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { Article } from '@/app/interface';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = fs.readFileSync('./pages/api/news.json', 'utf8')

  const { query } = req
  const { id } = query
  const jsonData = JSON.parse(data);
  const news = jsonData.find((p : Article) => p.id === Number(id))
  res.status(200).json(news);
}

