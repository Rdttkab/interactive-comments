import prisma from "../lib/prisma";

async function main() {
  await prisma.user.deleteMany({});
  await prisma.comment.deleteMany({});

  const juli = await prisma.user.create({
    data: {
      username: "juliusomo",
      avatar: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
    },
  });

  const amy = await prisma.user.create({
    data: {
      username: "amyrobson",
      avatar: {
        png: "./images/avatars/image-amyrobson.png",
        webp: "./images/avatars/image-amyrobson.webp",
      },
    },
  });

  const max = await prisma.user.create({
    data: {
      username: "maxblagun",
      avatar: {
        png: "./images/avatars/image-maxblagun.png",
        webp: "./images/avatars/image-maxblagun.webp",
      },
    },
  });

  const ram = await prisma.user.create({
    data: {
      username: "ramsesmiron",
      avatar: {
        png: "./images/avatars/image-ramsesmiron.png",
        webp: "./images/avatars/image-ramsesmiron.webp",
      },
    },
  });

  const juliComment = await prisma.comment.create({
    data: {
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      score: 12,
      author: {
        connect: {
          username: "amyrobson",
        },
      },
    },
  });

  const juliComment1 = await prisma.comment.create({
    data: {
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      score: 5,
      author: {
        connect: {
          username: "maxblagun",
        },
      },
      replies: {
        create: [
          {
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            score: 4,
            author: {
              connect: {
                username: "ramsesmiron",
              },
            },
          },
          {
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            score: 2,
            author: {
              connect: {
                username: "juliusomo",
              },
            },
          },
        ],
      },
    },
  });

  console.log({ juli, amy, max, ram, juliComment, juliComment1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
