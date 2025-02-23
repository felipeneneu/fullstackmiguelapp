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
        coverImageUrl:
          "https://fv5-2.files.fm/thumb_show.php?i=vxvvsrfnjx&view&v=1&PHPSESSID=1c126b51b595294d48ad4687eb8f66ce003d7bd7",
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
        {
          name: "Granado Sab Liquido Bebe Tradicional 500Ml",
          description:
            "Sab liquido bebe tradicional 500ml. Formulado com glicerina vegetal e ph da pele, o sabonete limpa com suavidade a pele do bebê, deixando-a macia e perfumada.",
          price: 35.9,
          imageUrl:
            "https://m.media-amazon.com/images/I/51dUPoy9NBL._AC_SL1000_.jpg",
          menuCategoryId: hygieneCategory.id,
          babyId: babyShower.id,
        },
      ],
    });
    const toysCategory = await tx.menuCategory.create({
      data: {
        name: "Brinquedos",

        babyId: babyShower.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Brinquedo Educativo, Caranguejo Fujao, Anda Com Sensor De Obstaculos",
          description:
            "O Brinquedo Caranguejo Fujão De Sensor Dança Com Som Eletrônico é um brinquedo elétrico de rastreamento com indução infravermelha. Quando encontra obstáculos durante o movimento, muda de direção. Este brinquedo interativo produz música dinâmica à medida que se move, o que pode ajudar no desenvolvimento auditivo da criança e ensinar ritmo. O Brinquedo tem 2 cores verde ou laranja, será enviado o que estiver disponível no momento. BENEFÍCIOS: Desperta atenção visual e auditiva, incentiva engatinhar e andar, desperta a curiosidade e atividades cerebrais, desenvolve a mobilidade e coordenação motora, ideal para todas as fases da infância, sensor de obstáculos. Especificação: Tipo de item: Brinquedo de caranguejo de com sensor Material: Plástico e componentes elétricos Quantidade: 1 peça Bateria: 3 pilhas AA (Não inclusas) alimentação: Pilhas Tamanho do produto: C22cm , A14cm L10,5cm Peso da embalagem: 300g",
          price: 77.97,
          imageUrl:
            "https://m.media-amazon.com/images/I/51aUOshjLnL._AC_SL1000_.jpg",
          menuCategoryId: toysCategory.id,
          babyId: babyShower.id,
        },
        {
          name: "DM Toys Brinquedo Interativo Musical Mexe Danca Luz e Som Dancing Cachorro",
          description:
            "Robô Dancing da DM Toys é um divertido brinquedo musical, ele anda, mexe, remexe e acende luzes para a diversão da criançada.",
          price: 68.79,
          imageUrl:
            "https://m.media-amazon.com/images/I/51OqIvttMUL._AC_SL1000_.jpg",
          menuCategoryId: toysCategory.id,
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
