// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
import { readFile } from 'fs/promises';

type Data = {
  id: number
  content: string
  createdAt: string
  score: number
  user: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  const buffData = await readFile("public/data.json");
  const data = await JSON.parse(buffData.toString())
  res.status(200),
  res.send = data
  res.end(JSON.stringify(data));
  } catch (error) {
    res.json(error);
    res.status(405).end();
    }
}
