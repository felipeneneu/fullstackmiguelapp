/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.babyShower.deleteMany();
    const babyShower = await tx.babyShower.create({
      data: {
        name: "Miguel",
        slug: "miguel",
        description:
          "Escolha um presentinho com carinho e faça parte desse momento tão especial.",
        avatarImageUrl: "https://i.imgur.com/SYktTvs.png",
        coverImageUrl: "",
      },
    });
    const babyCategory = await tx.menuCategory.create({
      data: {
        name: "Lista do Bebe",
        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fralda Descartável",
          description:
            "A Fralda Descartável Premium Huggies Natural Care RN 34 ...",
          price: 39.9,
          imageUrl: "https://m.media-amazon.com/images/I/7160DSpeqvL.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "HIPOGLÓS® Creme Preventivo De Assaduras, 120g",
          description:
            "A nova fórmula do HIPOGLÓS®, com Óleo de Girassol e Vitamina E, forma uma barreira branca concentrada de longa duração que hidrata e ajuda a reduzir os sinais de vermelhidão, auxiliando na recuperação da pele** desde o primeiro uso. **por estimular a renovação celular natural. Sua fórmula é hipoalergênica, dermatologicamente testada, fácil de espalhar e seguro para ser usado desde os primeiros dias de vida",
          price: 41.5,
          imageUrl:
            "https://m.media-amazon.com/images/I/61Bd8ykzRoL.__AC_SY300_SX300_QL70_ML2_.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Huggies Fralda Supreme Care M 196 Un",
          description:
            "A Supreme Care é a companhia perfeita para você que busca máxima proteção enquanto seu bebê se movimenta. Com uma suavidade mais macia do que nunca, especialmente na parte traseira, proporciona conforto e absorção ideais, mantendo seu bebê sempre sequinho. Graças à sua tecnologia exclusiva, a Supreme Care é a única com canais em formato de X, adaptando-se para oferecer mais liberdade de movimento, com uma anatomia que se adapta aos movimentos do seu bebê. ",
          price: 39.9,
          imageUrl:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrv99AHAZvmphdONJoza95LxHrUG71svwEIgGmVj_6-vVPveA3GwPCauJZPZsR08Wvz0uLHArG8jH5w0TxBWryMTWRDzTSLZTLnDgX_VameP6z9X1tLkByuBzwlroV4dE4TbVN&usqp=CAc",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Boia Bote Infantil Com Cobertura Baby Piscina Praia Crianças Inflável Premium",
          description:
            "Boia Bote Infantil Com Cobertura Baby Piscina Praia Crianças Inflável Premium - Azul",
          price: 36.2,
          imageUrl:
            "https://m.media-amazon.com/images/I/51t-w-KrlvL._AC_SL1050_.jpg",
          menuCategoryId: babyCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
    const hygieneCategory = await tx.menuCategory.create({
      data: {
        name: "Higiene",

        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Toalhas Umedecidas",
          description:
            "Pacote com 100 unidades de toalhas umedecidas hipoalergênicas, sem álcool e com extrato de camomila.",
          price: 19.9,
          imageUrl:
            "https://m.media-amazon.com/images/I/61TH-AyESKL._AC_SL1200_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Creme para Assaduras",
          description:
            "Pomada protetora com óxido de zinco para prevenir e tratar assaduras, dermatologicamente testada.",
          price: 24.9,
          imageUrl:
            "https://m.media-amazon.com/images/I/615lj9h9vXL._AC_SL1500_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "Escova e Pente para Bebê",
          description:
            "Conjunto de escova de cerdas macias e pente com pontas arredondadas para cuidar dos cabelos do bebê.",
          price: 14.9,
          imageUrl:
            "https://m.media-amazon.com/images/I/41sSotauNsL._AC_SL1000_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
