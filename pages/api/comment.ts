// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method?.toUpperCase()) {
    case "GET":
      const data = await prisma.comment.findMany({
        include: {
          author: true,
          replies: true
        },
        orderBy: {
          createdAt: "desc"
        }
      })
      res.status(200).json({ comments : data});
      break;
    case "POST":
      const body = await prisma.comment.create({
        data: {
          content: req.body.comment,
          score: 12,
          author: {
            connect: {
              username: "juliusomo",
            }
          }
        },
      });
      res.status(201).json({ comment: "success" });
      break;
    default:
      break;
  }
}
