const products = [
    {
        id: 1,
        name: 'Nike Air marron',
        price: 22000,
        originalPrice: 25000,
        category: 'habillement',
        imgSrcs: ['./image/image1.jpeg', './image/image2.jpeg', './image/image3.jpeg', './image/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "illimité",
        description: '✅ Chaussure tendance',
        modalDescription: 'Avec un design moderne et une finition de qualité, ces baskets offrent un excellent maintien. Que vous soyez un passionné ou simplement à la recherche d un look tendance, les Air sont le choix parfait pour allier performance et élégance.'
    },
    {
        id: 2,
        name: 'Adidas blanc, Stan Smith.',
        price: 15500,
        originalPrice: 17000,
        category: 'habillement',
        imgSrcs: ['./image/Adidas_blanc/image.jpeg', './image/Adidas_blanc/image2.jpeg', './image/Adidas_blanc/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Adidas blanc, look élegant',
        modalDescription: 'Avec leur design épuré et leur confort exceptionnel, ces baskets vous permettront de rester actif tout en ayant fière allure. Que ce soit pour une séance d entraînement intense ou une sortie décontractée, les Adidas blanches sont là pour vous soutenir.'
    },
    {
        id: 3,
        name: 'Adidas Campus bleu',
        price: 23500,
        originalPrice: 25000,
        category: 'habillement',
        imgSrcs: ['./image/adidas_bleu/image1.jpeg', './image/adidas_bleu/image2.jpeg', './image/adidas_bleu/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design dynamique et moderne assure un excellent maintien, vous permettant de vous déplacer avec aisance. Que vous soyez en train de courir ou de flâner en ville, ces baskets vous garantissent un look stylé et décontracté.'
    },
    {
        id: 4,
        name: 'Adidas Campus marron',
        price: 23500,
        originalPrice: 25000,
        category: 'habillement',
        imgSrcs: ['./image/Adidas_marron/image1.jpeg', './image/Adidas_marron/image2.jpeg'],
        videoSrc: './video/Adidas_campus_marron.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Avec leur design chic et leur qualité de fabrication, elles vous offrent un excellent maintien tout en ajoutant une touche de sophistication à votre tenue. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 5,
        name: 'Adidas Campus vert',
        price: 23500,
        category: 'habillement',
        imgSrcs: ['./image/adidas_vert_fonce/image1.jpeg', './image/adidas_vert_fonce/image2.jpeg', './image/adidas_vert_fonce/image3.jpeg'],
        videoSrc: './video/Adidas_campus_vert.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 6,
        name: 'Air blanc',
        price: 18000,
        originalPrice: 20000,
        category: 'habillement',
        imgSrcs: ['./image/Air_blanc/image1.jpeg', './image/Air_blanc/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur confort exceptionnel et leur style élégant font des Air blanches un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offrent le soutien dont vous avez besoin.'
    },
    {
        id: 7,
        name: 'Nike Air More Uptempo',
        price: 15000,
        category: 'habillement',
        imgSrcs: ['./image/Air_maron/image1.jpeg', './image/Air_maron/image2.jpeg', './image/Air_maron/image3.jpeg', './image/Air_maron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Air marron.'
    },
    {
        id: 8,
        name: 'Nike Air noir',
        price: 17000,
        category: 'habillement',
        imgSrcs: ['./image/Air_noir/image1.jpeg', './image/Air_noir/image2.jpeg', './image/Air_noir/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Elles offrent un confort inégalé et s adaptent à toutes les pointures, faisant d elles un must-have pour toute garde-robe.'
    },
    {
        id: 9,
        name: 'Jordan bleu',
        price: 15000,
        category: 'habillement',
        imgSrcs: ['./image/chaussure_bleu/image1.jpeg', './image/chaussure_bleu/image2.jpeg', './image/chaussure_bleu/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design dynamique et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous soyez en train de courir ou de flâner en ville, ces chaussures vous garantissent un look stylé.'
    },
    {
        id: 10,
        name: ' Air Jordan Retro noir',
        price: 15000,
        category: 'habillement',
        imgSrcs: ['./image/Jordan_noir/image1.jpeg', './image/Jordan_noir/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec leur design audacieux et leur excellent maintien, elles vous permettent de vous déplacer avec aisance. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 11,
        name: 'New Balance 827 blanc',
        price: 19000,
        category: 'habillement',
        imgSrcs: ['./image/new_balance_blanc/image1.jpeg', './image/new_balance_blanc/image2.jpeg', './image/new_balance_blanc/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design élégant et leur qualité de fabrication vous garantissent un excellent maintien. Que vous soyez au gymnase ou en ville, les New Balance blanches sont là pour vous soutenir.'
    },
    {
        id: 12,
        name: 'New balance blanc',
        price: 18000,
        category: 'habillement',
        imgSrcs: ['./image/New_balance_blanc/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur confort exceptionnel et leur style élégant font des New Balance blanches un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offrent le soutien dont vous avez besoin.'
    },
    {
        id: 13,
        name: 'New Balance 550 coloris beige et marron',
        price: 16500,
        category: 'habillement',
        imgSrcs: ['./image/new_balance_noir_marron/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec leur design chic et leur qualité de fabrication, elles vous offrent un excellent maintien tout en ajoutant une touche de sophistication à votre tenue. Faites une déclaration de mode tout en vous sentant bien dans vos mouvements.'
    },
    {
        id: 14,
        name: 'New Balance 2002R vert pastel',
        price: 16000,
        category: 'habillement',
        imgSrcs: ['./image/New_balance_vert/image1.jpeg', './image/New_balance_vert/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 15,
        name: 'Nike blanc gris',
        price: 16500,
        category: 'habillement',
        imgSrcs: ['./image/Nike_blanc_gris/image1.jpeg', './image/Nike_blanc_gris/image2.jpeg', './image/Nike_blanc_gris/image3.jpeg', './image/Nike_blanc_gris/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design moderne et leur qualité de fabrication vous garantissent un excellent maintien. Que vous soyez sur le terrain ou en ville, les Nike blanches et grises sont là pour vous soutenir.'
    },
    {
        id: 16,
        name: 'Nike Dunk Low, coloris blanc, gris et marron',
        price: 15700,
        category: 'habillement',
        imgSrcs: ['./image/nike_blanc_marron/image1.jpeg', './image/nike_blanc_marron/image2.jpeg', './image/nike_blanc_marron/image3.jpeg', './image/nike_blanc_marron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Nike blanches et marron.'
    },
    {
        id: 17,
        name: 'Nike Air bleu',
        price: 15900,
        category: 'habillement',
        imgSrcs: ['./image/Nike_bleu/image1.jpeg', './image/Nike_bleu/image2.jpeg', './image/Nike_bleu/image3.jpeg', './image/Nike_bleu/image4.jpeg', './image/Nike_bleu/image5.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ Leur design sophistiqué et leur qualité de fabrication en font un excellent choix pour toutes les occasions. Restez actif tout en affichant un style impeccable avec les Nike bleues.'
    },
    {
        id: 18,
        name: 'Nike Air Jordan Retro High OG coloris blanc, noir et marron',
        price: 16900,
        originalPrice: 19000,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_blanc_marron/image1.jpeg', './image/nike_noir_blanc_marron/image2.jpeg', './image/nike_noir_blanc_marron/image3.jpeg', './image/nike_noir_blanc_marron/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅  Leur design moderne et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous couriez ou que vous vous détendiez, elles vous offriront le soutien dont vous avez besoin.'
    },
    {
        id: 19,
        name: 'Nike Dunk Low Light Bone vert',
        price: 16000,
        originalPrice: 19000,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_vert/image1.jpeg', './image/nike_noir_vert/image2.jpeg', './image/nike_noir_vert/image3.jpeg', './image/nike_noir_vert/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 20,
        name: 'Nike Dunk Low Light Bone, vert',
        price: 17000,
        category: 'habillement',
        imgSrcs: ['./image/nike_noir_vert/image1.jpeg', './image/nike_noir_vert/image2.jpeg', './image/nike_noir_vert/image3.jpeg', './image/nike_noir_vert/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Avec un design élégant et un excellent maintien, elles vous permettent de bouger librement tout en ayant fière allure. Faites de chaque pas une déclaration de style avec les Nike noir et vert.'
    },
    {
        id: 21,
        name: 'Nike Dunk Low orange vif',
        price: 16000,
        category: 'habillement',
        imgSrcs: ['./image/Nike_orange/image1.jpeg', './image/Nike_orange/image2.jpeg', './image/Nike_orange/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur design dynamique et moderne assure un excellent maintien, vous permettant de vous déplacer avec aisance. Que vous soyez en train de courir ou de flâner en ville, ces baskets vous garantiront un look stylé et décontracté.'
    },
    {
        id: 22,
        name: 'Nike SB',
        price: 16900,
        category: 'habillement',
        imgSrcs: ['./image/nike_vert/image1.jpeg', './image/nike_vert/image2.jpeg', './image/nike_vert/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: 'Leur conception ergonomique garantit un maintien optimal, vous permettant de rester actif et élégant. Que vous soyez au gymnase ou en ville, ces baskets vous accompagneront avec style.'
    },
    {
        id: 23,
        name: 'Puma bleu, modèle Suede XL',
        price: 16100,
        category: 'habillement',
        imgSrcs: ['./image/puma_bleu/image1.jpeg',],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅Leur design dynamique et leur confort exceptionnel vous permettent de rester actif tout en ayant fière allure. Que vous soyez en train de courir ou de flâner en ville, ces chaussures vous garantiront un look stylé.'
    },
    {
        id: 24,
        name: 'Puma sude xl',
        price: 15950,
        category: 'habillement',
        imgSrcs: ['./image/puma_sude_xl/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅Leur confort exceptionnel et leur style élégant font des Puma Sude XL un choix parfait pour vos activités quotidiennes. Que vous couriez ou que vous vous détendiez, elles vous offriront le soutien dont vous avez besoin.'
    },
    {
        id: 25,
        name: 'Nike Air noir\n AIR FLEA',
        price: 10800,
        originalPrice: 12000,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_black.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅La Nike Air noire est une chaussure élégante et intemporelle, offrant une combinaison parfaite de style et de confort. Dotée de la technologie Air de Nike, elle procure un amorti supérieur pour un confort optimal tout au long de la journée.'
    },
    {
        id: 26,
        name: 'Nike Air couleur verte',
        price: 14800,
        originalPrice: 15000,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_green.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ La Nike Air couleur verte est une chaussure dynamique et moderne, parfaite pour ceux qui recherchent une paire audacieuse et confortable'
    },
    {
        id: 27,
        name: 'Nike Air couleur blanche',
        price: 12500,
        originalPrice: 15000,
        category: 'habillement',
        imgSrcs: ['./image/Air_image_white.jpeg', './image/Air_image_multicolor.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussures décontractées',
        modalDescription: '✅ La Nike Air couleur verte est une chaussure dynamique et moderne, parfaite pour ceux qui recherchent une paire audacieuse et confortable'
    },
    // .
    // ... autres produits



































    // 40%
    ////////////////
    {
        id: 1000,
        name: 'Ecouteur',
        price: 6500,
        originalPrice: 7000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/air_pod/image1.png', './image/Martistore_calavi/air_pod/image2.png', './image/Martistore_calavi/air_pod/image3.png', './image/Martistore_calavi/air_pod/image4.png', './image/Martistore_calavi/air_pod/image5.png', './image/Martistore_calavi/air_pod/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Son de haute qualité et un confort optimal.',
        modalDescription: '✅ Profitez d’un son exceptionnel avec ces écouteurs modernes, confortables et fiables, conçus pour une utilisation prolongée.'
    },
    /*{
        id: 1001,
        name: 'Jazz tam-tam bactérie',
        price: 7000, //5000
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/bacteries/image1.png', './image/Martistore_calavi/bacteries/image2.png', './image/Martistore_calavi/bacteries/image3.png', './image/Martistore_calavi/bacteries/image4.png', './image/Martistore_calavi/bacteries/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Un tam-tam ludique et éducatif.',
        modalDescription: '✅ Découvrez ce tam-tam pour enfants, un instrument coloré et amusant qui développe la créativité et l’amour de la musique.'
    },*/
    {
        id: 1002,
        name: 'Moule pastel',
        price: 1500, //700
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/forme_pates/image1.png', './image/Martistore_calavi/forme_pates/image2.png', './image/Martistore_calavi/forme_pates/image3.png', './image/Martistore_calavi/forme_pates/image4.png', './image/Martistore_calavi/forme_pates/image5.png'],
        videoSrc: './video/Moule_pastel1.mp4',
        stock: "en stock",
        description: 'Moule pastel pratique et résistant.',
        modalDescription: '✅ Simplifiez vos créations culinaires avec ce moule pastel, parfait pour des résultats impeccables et un design élégant.'
    },
    /*{
        id: 1003,
        name: 'Jeux de construction',
        price: 6000, //700
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/jouet/image1.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Jeu de construction police lot de 50 pcs',
        modalDescription: 'Offrez à vos enfants un jeu de construction amusant et éducatif, parfait pour des heures de divertissement'
    },*/
    /*{
        id: 1004,
        name: 'lampe noel',
        price: 24800,
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/lampe_noel/image1.png', './image/Martistore_calavi/lampe_noel/image2.png', './image/Martistore_calavi/lampe_noel/image3.png', './image/Martistore_calavi/lampe_noel/image4.png', './image/Martistore_calavi/lampe_noel/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lampe de Noël élégante et festive, parfaite pour illuminer vos soirées et créer une ambiance chaleureuse.',
        modalDescription: '✅ Ajoutez une touche magique à vos fêtes avec cette lampe de Noël au design unique et lumineux.'
    },*/
    {
        id: 1005,
        name: 'Lampe solaire de luxe',
        price: 6000, //1700
        originalPrice: 5000,
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/lampe_solaire/image1.png', './image/Martistore_calavi/lampe_solaire/image2.png', './image/Martistore_calavi/lampe_solaire/image3.png', './image/Martistore_calavi/lampe_solaire/image4.png', './image/Martistore_calavi/lampe_solaire/image5.png', './image/Martistore_calavi/lampe_solaire/image6.png'],
        videoSrc: './video/Lampe_solaire_de_luxe.mp4',
        stock: "en stock",
        description: 'Lampe solaire élégante et économique',
        modalDescription: '✅ Profitez d un éclairage durable et écologique avec cette lampe solaire de luxe, parfaite pour vos décorations extérieures.'
    },
    {
        id: 1006,
        name: 'montre',
        price: 5000,
        originalPrice: 3600,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/montres/image1.png', './image/Martistore_calavi/montres/image2.png', './image/Martistore_calavi/montres/image3.png', './image/Martistore_calavi/montres/image4.png', './image/Martistore_calavi/montres/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Montre élégante et moderne, idéale pour allier style et fonctionnalité au quotidien',
        modalDescription: '✅ Affichez votre style avec cette montre moderne, conçue pour allier praticité et élégance.'
    },
    {
        id: 1007,
        name: 'Moulinex',
        price: 25000, //15000
        originalPrice: 25000,
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/moulinex/image1.png', './image/Martistore_calavi/moulinex/image2.png', './image/Martistore_calavi/moulinex/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Moulinex performant et polyvalent.',
        modalDescription: '✅ Simplifiez vos préparations culinaires avec ce moulinex efficace et durable, conçu pour répondre à tous vos besoins en cuisine.'
    },
    /*{
        id: 1008,
        name: 'Ordinateur jeu pour enfant',
        price: 12000, //11000
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/ordinateur_jeu/image1.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ordinateur éducatif et ludique.',
        modalDescription: '✅ Offrez à votre enfant une expérience d’apprentissage amusante avec cet ordinateur de jeu interactif et intuitif.'
    },*/
    {
        id: 1009,
        name: 'Mini ventilateur rechargeable',
        price: 1700, //1500
        originalPrice: 2000,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/petit_ventillateur/image1.png', './image/Martistore_calavi/petit_ventillateur/image2.png', './image/Martistore_calavi/petit_ventillateur/image3.png', './image/Martistore_calavi/petit_ventillateur/image4.png'],
        videoSrc: './video/Mini_ventilateur_rechargeable.mp4',
        stock: "en stock",
        description: 'Mini ventilateur, pratique et portable.',
        modalDescription: '✅ Restez frais où que vous soyez avec ce mini ventilateur rechargeable, léger et puissant.'
    },
    /*{
        id: 1010,
        name: 'pistolet a bulles',
        price: 24800,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/pistolet_a_bulles/image1.png', './image/Martistore_calavi/pistolet_a_bulles/image2.png', './image/Martistore_calavi/pistolet_a_bulles/image3.png', './image/Martistore_calavi/pistolet_a_bulles/image4.png', './image/Martistore_calavi/pistolet_a_bulles/image5.png', './image/Martistore_calavi/pistolet_a_bulles/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pistolet à bulles amusant et facile à utiliser, parfait pour des moments de jeu et de détente en famille.',
        modalDescription: '"✅ Créez des instants magiques avec ce pistolet à bulles, idéal pour les enfants et pour des jeux en extérieur.'
    },*/
    {
        id: 1010,
        name: 'tapis',
        price: 3700,
        originalPrice: 4000,
        category: 'decoration',
        imgSrcs: ['./image/Martistore_calavi/tapis_de_douche/image1.png', './image/Martistore_calavi/tapis_de_douche/image2.png', './image/Martistore_calavi/tapis_de_douche/image3.png', './image/Martistore_calavi/tapis_de_douche/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Tapis de douche absorbant et confortable.',
        modalDescription: '✅ Profitez de ce tapis de douche doux et absorbant, conçu pour garder votre sol propre et sec après chaque utilisation.'
    },
    {
        id: 1011,
        name: 'Chauffe eaux Scarlett',
        price: 8000, //4000
        originalPrice: 9500,
        category: 'cuisine',
        imgSrcs: ['./image/Martistore_calavi/termousse/image1.png', './image/Martistore_calavi/termousse/image2.png', './image/Martistore_calavi/termousse/image3.png', './image/Martistore_calavi/termousse/image4.png', './image/Martistore_calavi/termousse/image5.png'],
        videoSrc: './video/Chauffe_eaux_Scarlett1.mp4',
        stock: "en stock",
        description: 'Idéal pour fournir de l’eau chaude rapidement.',
        modalDescription: '✅ Profitez d’une eau chaude instantanée avec ce chauffe-eaux Scarlett, conçu pour une utilisation pratique et rapide.'
    },
    {
        id: 1026,
        name: 'Tondeuse rechargeable',
        price: 10500, //8000
        originalPrice: 12000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/tondeuses/image1.png', './image/Martistore_calavi/tondeuses/image2.png', './image/Martistore_calavi/tondeuses/image3.png', './image/Martistore_calavi/tondeuses/image4.png', './image/Martistore_calavi/tondeuses/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Tondeuse rechargeable, pratique et efficace.',
        modalDescription: '✅ Tondeuse rechargeable pour un usage pratique, offrant une coupe nette et précise à chaque utilisation.'
    },
    {
        id: 1012,
        name: 'verre à vin',
        price: 12000, //5500
        originalPrice: 15000,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_arrondi/image1.png', './image/Martistore_calavi/verre_arrondi/image2.png', './image/Martistore_calavi/verre_arrondi/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfait pour vos moments conviviaux.',
        modalDescription: '✅  Profitez de vos dégustations avec ce lot de verres à vin, idéal pour sublimer chaque instant. Lot de 6.'
    },
    {
        id: 1013,
        name: 'verre à whisky',
        price: 11000, //3000
        originalPrice: 14000,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_cylindrique/image1.png', './image/Martistore_calavi/verre_cylindrique/image2.png', './image/Martistore_calavi/verre_cylindrique/image3.png', './image/Martistore_calavi/verre_cylindrique/image4.png', './image/Martistore_calavi/verre_cylindrique/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Verre à whisky lisse de 290 ml.',
        modalDescription: 'Un design raffiné pour un moment de dégustation parfait, ces verres ajoutent une touche de classe à chaque occasion.'
    },
    {
        id: 1014,
        name: 'verre',
        price: 11500, //5500
        originalPrice: 14500,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/verre_forme_ovale/image1.png', './image/Martistore_calavi/verre_forme_ovale/image2.png', './image/Martistore_calavi/verre_forme_ovale/image3.png', './image/Martistore_calavi/verre_forme_ovale/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "Limité",
        description: 'Un choix élégant pour votre table.',
        modalDescription: 'Un design unique et pratique pour vos repas et moments de détente. Ces verres ajouteront une note raffinée à vos occasions spéciales. Lot de 6'
    },
    /*{
        id: 1015,
        name: 'Jouet automobile pour enfant',
        price: 3000, //2500
        originalPrice: 5000,
        category: 'tous',
        imgSrcs: ['./image/Martistore_calavi/voitures_jeu/image1.png', './image/Martistore_calavi/voitures_jeu/image2.png', './image/Martistore_calavi/voitures_jeu/image3.png', './image/Martistore_calavi/voitures_jeu/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfait pour des heures de jeu.',
        modalDescription: '✅ Offrez à votre enfant des moments de jeu captivants avec cette voiture jouet, conçue pour stimuler l imagination.'
    },*/
    {
        id: 1016,
        name: 'Ecouteur M10',
        price: 7000, //1500
        originalPrice: 9000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/ecouteur_m10/image1.png', './image/Martistore_calavi/ecouteur_m10/image2.png', './image/Martistore_calavi/ecouteur_m10/image3.png', './image/Martistore_calavi/ecouteur_m10/image4.png', './image/Martistore_calavi/ecouteur_m10/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Son clair et puissant.',
        modalDescription: '✅ Profitez d’une qualité sonore exceptionnelle avec les écouteurs M10, offrant confort et performance à petit prix. Parfaits pour écouter de la musique ou passer des appels'
    },
    {
        id: 1017,
        name: 'Ecouteur powerbank JBL Air F9 Pro',
        price: 4500, //1500
        originalPrice: 5000,
        category: 'electronique',
        imgSrcs: ['./image/Martistore_calavi/ecouteur_m10/image4.png', './image/Martistore_calavi/ecouteur_m10/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ecoute longue durée.',
        modalDescription: '✅ Profitez d’un son premium avec les écouteurs JBL Air F9 Pro, offrant puissance et autonomie grâce à leur powerbank intégré.'
    },
    {
        id: 1018,
        name: 'Casque bluethoot P35',
        price: 4900, //1500
        originalPrice: 6000,
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/Casque_Bluetooth_P35/image1.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image2.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image3.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image4.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image5.png', './image/doss_new_martistore/Casque_Bluetooth_P35/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Qualité sonore exceptionnelle.',
        modalDescription: '✅ Profitez d une écoute sans fil immersive avec le casque Bluetooth P35, idéal pour les musiques, appels et jeux.'
    },
    {
        id: 1019,
        name: 'Chargeurs rapide',
        price: 5500, //1200
        originalPrice: 7500,
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/chargeurs/image1.png', './image/doss_new_martistore/chargeurs/image2.png', './image/doss_new_martistore/chargeurs/image3.png', './image/doss_new_martistore/chargeurs/image4.png', './image/doss_new_martistore/chargeurs/image5.png', './image/doss_new_martistore/chargeurs/image6.png', './image/doss_new_martistore/chargeurs/image7.png', './image/doss_new_martistore/chargeurs/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chargeur rapide iPhone, Samsung.',
        modalDescription: '✅ Accélérez votre recharge avec ce chargeur rapide, conçu pour une performance optimale et une compatibilité étendue.'
    },
    {
        id: 1020,
        name: 'Huile à levres',
        price: 2100, //1200
        originalPrice: 2500,
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/huile_a_levre/image1.png', './image/doss_new_martistore/huile_a_levre/image2.png', './image/doss_new_martistore/huile_a_levre/image3.png', './image/doss_new_martistore/huile_a_levre/image4.png', './image/doss_new_martistore/huile_a_levre/image5.png', './image/doss_new_martistore/huile_a_levre/image6.png', './image/doss_new_martistore/huile_a_levre/image7.png', './image/doss_new_martistore/huile_a_levre/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Huile à lèvres nourrissante.',
        modalDescription: '✅ Offrez à vos lèvres un soin intensif avec cette huile à lèvres, pour une hydratation longue durée et un effet lisse.'
    },
    {
        id: 1027,
        name: 'Lampe solaire',
        price: 9300, //4500
        originalPrice: 8000,
        category: 'electronique',
        imgSrcs: ['./image/doss_new_martistore/lampe_solaire/image1.png', './image/doss_new_martistore/lampe_solaire/image2.png', './image/doss_new_martistore/lampe_solaire/image3.png', './image/doss_new_martistore/lampe_solaire/image4.png', './image/doss_new_martistore/lampe_solaire/image5.png', './image/doss_new_martistore/lampe_solaire/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lampe solaire, solution efficace',
        modalDescription: '✅ 100 watt, 12000 mAh batterie rechargeable \n✅Haute luminosité 🔆 \n✅ Une nuit complète de sauvegarde ( 12h ) n✅Peut être chargé à la fois par le panneau solaire et l électricité \n✅ 4 types de lumières réglables \n✅Fonction de sortie pour charger le téléphone portable en cas d urgence \n✅IP66 imperméable 🧥'
    },
    {
        id: 1021,
        name: 'Moustiquaire pliable',
        price: 9300, //4500
        originalPrice: 8000,
        category: 'tous',
        imgSrcs: ['./image/doss_new_martistore/moustiquaire_pliable/image1.png', './image/doss_new_martistore/moustiquaire_pliable/image2.png', './image/doss_new_martistore/moustiquaire_pliable/image3.png', './image/doss_new_martistore/moustiquaire_pliable/image4.png', './image/doss_new_martistore/moustiquaire_pliable/image5.png', './image/doss_new_martistore/moustiquaire_pliable/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Moustiquaire pliable 3 place 190*160*80 2 place 190*135*80',
        modalDescription: 'Pratique pendant la chaleur pour profiter de l extérieur sans être exposé aux moustiques. Protégez-vous et vos enfants avec cette moustiquaire pliable.'
    },
    {
        id: 1022,
        name: 'Pèse aliment',
        price: 5800, //2500
        originalPrice: 4200,
        category: 'cuisine',
        imgSrcs: ['./image/doss_new_martistore/pese_aliments/image1.png', './image/doss_new_martistore/pese_aliments/image2.png', './image/doss_new_martistore/pese_aliments/image3.png', './image/doss_new_martistore/pese_aliments/image4.png', './image/doss_new_martistore/pese_aliments/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique pour mesurer avec précision.',
        modalDescription: 'Outil idéal pour peser vos aliments avec précision. Assurez-vous de cuisiner avec les bonnes quantités, pour un meilleur contrôle de vos recettes.'
    },
    {
        id: 1023,
        name: 'Petite brune',
        price: 4600, //1500
        originalPrice: 5000,
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/petit_brume/image1.png', './image/doss_new_martistore/petit_brume/image2.png', './image/doss_new_martistore/petit_brume/image3.png', './image/doss_new_martistore/petit_brume/image4.png', './image/doss_new_martistore/petit_brume/image5.png', './image/doss_new_martistore/petit_brume/image6.png', './image/doss_new_martistore/petit_brume/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ensemble de brume corporelle de 88 ml.',
        modalDescription: 'Idéal pour se rafraîchir et hydrater la peau. La brume florale offre un parfum léger et agréable, tout en apportant une sensation de fraîcheur et de confort.'
    },
    {
        id: 1024,
        name: 'Papier peint autocollant',
        price: 7500, //3000
        originalPrice: 9000,
        category: 'beauté',
        imgSrcs: ['./image/doss_new_martistore/rouleau_deco/image1.png', './image/doss_new_martistore/rouleau_deco/image2.png', './image/doss_new_martistore/rouleau_deco/image3.png', './image/doss_new_martistore/rouleau_deco/image4.png', './image/doss_new_martistore/rouleau_deco/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Rouleau de papier peint autoadhésif.',
        modalDescription: 'Facile à appliquer et à retirer, ce papier peint ajoute une touche moderne à votre intérieur tout en étant pratique et durable.Dimension de 5 mètres sur 60 cm'
    },
    {
        id: 1025,
        name: 'Découpeuse de légume  multifonction',
        price: 7800, //4000
        originalPrice: 8000,
        category: 'cuisine',
        imgSrcs: ['./image/doss_new_martistore/ustensiles_aliments/image1.png', './image/doss_new_martistore/ustensiles_aliments/image2.png', './image/doss_new_martistore/ustensiles_aliments/image3.png'],
        videoSrc: './video/Découpeuse_de_légume_multifonction.mp4',
        stock: "en stock",
        description: 'Découpeuse pratique pour trancher.',
        modalDescription: 'Avec ses multiples lames, cette découpeuse vous permet de gagner du temps en cuisine tout en obtenant des résultats parfaits à chaque utilisation.'
    },
    //id 1026 take
    //id 1027 take


    {
        id: 1028,
        name: 'Assiete plateau',
        price: 9700, //5000
        originalPrice: 12000,
        category: 'tous',
        imgSrcs: ['./image/new_doss/Assiette_plateau_7000/image1.png', './image/new_doss/Assiette_plateau_7000/image2.png', './image/new_doss/Assiette_plateau_7000/image3.png', './image/new_doss/Assiette_plateau_7000/image4.png', './image/new_doss/Assiette_plateau_7000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Plateau élégant',
        modalDescription: '✅ Plateau multifonctions parfait pour servir et présenter vos plats avec style.'
    },
    {
        id: 1029,
        name: 'Boite porte ustensiles',
        price: 4000, //2500
        originalPrice: 5000,
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Boite_porte_ustensiles/image1.png', './image/new_doss/Boite_porte_ustensiles/image2.png', './image/new_doss/Boite_porte_ustensiles/image3.png', './image/new_doss/Boite_porte_ustensiles/image4.png', './image/new_doss/Boite_porte_ustensiles/image5.png', './image/new_doss/Boite_porte_ustensiles/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Boîte pratique',
        modalDescription: '✅ Organisez facilement vos ustensiles avec cette boîte robuste et moderne.'
    },
    {
        id: 1030,
        name: 'cable à trois entrées',
        price: 2500, //500
        originalPrice: 4600,
        category: 'electronique',
        imgSrcs: ['./image/new_doss/cable_trois_entre/image1.png', './image/new_doss/cable_trois_entre/image2.png', './image/new_doss/cable_trois_entre/image3.png', './image/new_doss/cable_trois_entre/image4.png', './image/new_doss/cable_trois_entre/image5.png', './image/new_doss/cable_trois_entre/image6.png'],
        videoSrc: './video/cable_à_trois_entrées.webm',
        stock: "en stock",
        description: 'Cable multifonction',
        modalDescription: '✅ Rechargez plusieurs appareils simultanément avec ce câble durable et pratique.'
    },
    {
        id: 1031,
        name: 'Cintre en bois',
        price: 650, //500
        originalPrice: 700,
        category: 'tous',
        imgSrcs: ['./image/new_doss/Cintre_en_bois_700/image1.png', './image/new_doss/Cintre_en_bois_700/image2.png', './image/new_doss/Cintre_en_bois_700/image3.png', './image/new_doss/Cintre_en_bois_700/image4.png', './image/new_doss/Cintre_en_bois_700/image5.png', './image/new_doss/Cintre_en_bois_700/image6.png', './image/new_doss/Cintre_en_bois_700/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Cintre élégant',
        modalDescription: '✅ Parfait pour suspendre vos vêtements et optimiser votre garde-robe.'
    },
    {
        id: 1032,
        name: 'Decapsuleur magnétique',
        price: 2500, //1200
        originalPrice: 4800,
        category: 'tous',
        imgSrcs: ['./image/new_doss/Decapsuleur_magnétique/image1.png', './image/new_doss/Decapsuleur_magnétique/image2.png', './image/new_doss/Decapsuleur_magnétique/image3.png', './image/new_doss/Decapsuleur_magnétique/image4.png', './image/new_doss/Decapsuleur_magnétique/image5.png'],
        videoSrc: './video/Decapsuleur_magnétique1.mp4',
        stock: "en stock",
        description: 'Décapsuleur moderne',
        modalDescription: '✅ Aimanté et pratique, il simplifie l’ouverture de vos bouteilles.'
    },
    {
        id: 1033,
        name: 'Diffuseur de senteurs',
        price: 6000, //1000
        originalPrice: 8000,
        category: 'tous',
        imgSrcs: ['./image/new_doss/diffuseur_de_senteur_2000/image1.png', './image/new_doss/diffuseur_de_senteur_2000/image2.png', './image/new_doss/diffuseur_de_senteur_2000/image3.png', './image/new_doss/diffuseur_de_senteur_2000/image4.png', './image/new_doss/diffuseur_de_senteur_2000/image5.png', './image/new_doss/diffuseur_de_senteur_2000/image6.png', './image/new_doss/diffuseur_de_senteur_2000/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Parfum d intérieur moderne',
        modalDescription: '✅ Créez une ambiance agréable et apaisante avec ce diffuseur de senteurs.'
    },
    {
        id: 1034,
        name: 'Échelle télescopique',
        price: 46900, //40000
        originalPrice: 53000,
        category: 'tous',
        imgSrcs: ['./image/new_doss/Echelle_télescopique_40.000/image1.png', './image/new_doss/Echelle_télescopique_40.000/image2.png', './image/new_doss/Echelle_télescopique_40.000/image3.png', './image/new_doss/Echelle_télescopique_40.000/image4.png', './image/new_doss/Echelle_télescopique_40.000/image5.png', './image/new_doss/Echelle_télescopique_40.000/image6.png', './image/new_doss/Echelle_télescopique_40.000/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Échelle compacte et extensible.',
        modalDescription: '✅ Accédez facilement aux hauteurs grâce à son design télescopique robuste.'
    },
    {
        id: 1035,
        name: 'Étagère de rangement',
        price: 12500, //4000
        originalPrice: 16500,
        category: 'tous',
        imgSrcs: ['./image/new_doss/etagere_de_range/image1.png', './image/new_doss/etagere_de_range/image2.png', './image/new_doss/etagere_de_range/image3.png', './image/new_doss/etagere_de_range/image4.png'],
        videoSrc: './video/Étagère_de_rangement.mp4',
        stock: "en stock",
        description: 'Organisateur pratique.',
        modalDescription: '✅ Rangez efficacement vos affaires grâce à cette étagère solide et esthétique.'
    },
    {
        id: 1036,
        name: 'Fer à repasser',
        price: 5900, //5000
        originalPrice: 6500,
        category: 'electronique',
        imgSrcs: ['./image/new_doss/fer_a_repasser/image1.png', './image/new_doss/fer_a_repasser/image2.png', './image/new_doss/fer_a_repasser/image3.png', './image/new_doss/fer_a_repasser/image4.png', './image/new_doss/fer_a_repasser/image5.png', './image/new_doss/fer_a_repasser/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Repassage facile et rapide.',
        modalDescription: '✅ Obtenez des vêtements impeccables grâce à ce fer à repasser performant.'
    },
    {
        id: 1037,
        name: 'Filtre eau',
        price: 700, //600
        originalPrice: 750,
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/filtre_eau_700/image1.png', './image/new_doss/filtre_eau_700/image2.png', './image/new_doss/filtre_eau_700/image3.png'],
        videoSrc: './video/Filtre_eau.mp4',
        stock: "en stock",
        description: 'Filtrage rapide et efficace.',
        modalDescription: '✅ Profitez d’une eau pure et saine avec ce filtre pratique et économique.'
    },
    {
        id: 1038,
        name: 'Friteuse à air',
        price: 23600, //19000
        originalPrice: 25000,
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Friteuse_a_air_19.000/image1.png', './image/new_doss/Friteuse_a_air_19.000/image2.png', './image/new_doss/Friteuse_a_air_19.000/image3.png', './image/new_doss/Friteuse_a_air_19.000/image4.png', './image/new_doss/Friteuse_a_air_19.000/image5.png'],
        videoSrc: './video/Friteuse_à_air.webm',
        stock: "en stock",
        description: 'Cuisine sans huile. 6 L',
        modalDescription: '✅ Préparez des repas sains et savoureux grâce à cette friteuse à air moderne.'
    },
    {
        id: 1039,
        name: 'Gobelet',
        price: 150, //~120
        originalPrice: 250,
        category: 'tous',
        imgSrcs: ['./image/new_doss/gobelet/image1.png', './image/new_doss/gobelet/image2.png', './image/new_doss/gobelet/image3.png', './image/new_doss/gobelet/image4.png', './image/new_doss/gobelet/image5.png', './image/new_doss/gobelet/image6.png', './image/new_doss/gobelet/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Gobelet pratique',
        modalDescription: '✅ Idéal pour vos boissons.'
    },
    {
        id: 1043,
        name: 'Grande batteuse électrique',
        price: 7500, //5000
        originalPrice: 8000,
        category: 'electronique',
        imgSrcs: ['./image/new_doss/Grande_batteuse _electrique_5000/image1.png', './image/new_doss/Grande_batteuse _electrique_5000/image2.png', './image/new_doss/Grande_batteuse _electrique_5000/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mélangeur rapide et puissant.',
        modalDescription: '✅ Facilitez vos préparations culinaires avec cette batteuse électrique performante.'
    },
    {
        id: 1040,
        name: 'Lumiere led petit',
        price: 3600, //1300
        originalPrice: 4000,
        category: 'tous',
        imgSrcs: ['./image/new_doss/lumiere_led/image1.png', './image/new_doss/lumiere_led/image2.png', './image/new_doss/lumiere_led/image3.png', './image/new_doss/lumiere_led/image4.png'],
        videoSrc: './video/Lumiere_led_petit.webm',
        stock: "en stock",
        description: 'Éclairage écoénergétique.',
        modalDescription: '✅ Illuminez votre espace avec cette lumière LED longue durée et économique.'
    },
    {
        id: 1041,
        name: 'Mini four electrique 3en1',
        price: 23500, //19000
        originalPrice: 26000,
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Mini_four_electrique_3en1_19.000/image1.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image2.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image3.png', './image/new_doss/Mini_four_electrique_3en1_19.000/image4.png'],
        videoSrc: './video/Mini_four_electrique_3en1.webm',
        stock: "en stock",
        description: 'Four compact et polyvalent',
        modalDescription: '✅ Idéal pour griller, cuire et réchauffer avec un seul appareil.'
    },
    {
        id: 1042,
        name: 'Spatule de cuisine',
        price: 3700, //1500
        originalPrice: 4500,
        category: 'cuisine',
        imgSrcs: ['./image/new_doss/Spatule_de_cuisine/image1.png', './image/new_doss/Spatule_de_cuisine/image2.png', './image/new_doss/Spatule_de_cuisine/image3.png', './image/new_doss/Spatule_de_cuisine/image4.png'],
        videoSrc: './video/Spatule_de_cuisine1.webm',
        stock: "en stock",
        description: ' Outil pratique de cuisine. Lot de 4 pcs',
        modalDescription: '✅ Manipulez vos aliments facilement grâce à cette spatule ergonomique et résistante.'
    },
    //id 1043 used
















    /*{
        id: 1044,
        name: 'Armoire de rangement',
        price: 22000, //3000
        category: 'decoration',
        imgSrcs: ['./image/new_24_12/Armoire_de_rangement_3000/image1.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Spacieuse, Élégante',
        modalDescription: '✅ Cette armoire de rangement offre une solution élégante pour organiser votre espace. Avec sa grande capacité, elle vous aide à garder vos affaires bien rangées et accessibles.'
    },*/
    {
        id: 1045,
        name: 'Chaussures',
        price: 15900, //9000
        originalPrice: 16500,
        category: 'habillements',
        imgSrcs: ['./image/new_24_12/basket/image1.png', './image/new_24_12/basket/image2.png', './image/new_24_12/basket/image3.png', './image/new_24_12/basket/image4.png', './image/new_24_12/basket/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussure pratique',
        modalDescription: '✅ Chaussures pour vous'
    },
    {
        id: 1046,
        name: 'Chaussures blanche, noir',
        price: 16800, //9000
        originalPrice: 18000,
        category: 'habillement',
        imgSrcs: ['./image/new_24_12/basket_B/image1.png', './image/new_24_12/basket_B/image2.png', './image/new_24_12/basket_B/image3.png', './image/new_24_12/basket_B/image4.png', './image/new_24_12/basket_B/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Chaussure pratique',
        modalDescription: '✅ Chaussures pour vous'
    },
    {
        id: 1047,
        name: 'Bassin pour pédicure',
        price: 15700, //10000
        originalPrice: 17000,
        category: 'tous',
        imgSrcs: ['./image/new_24_12/Bassin_pour_pedicure_10000/image1.png', './image/new_24_12/Bassin_pour_pedicure_10000/image2.png', './image/new_24_12/Bassin_pour_pedicure_10000/image3.png', './image/new_24_12/Bassin_pour_pedicure_10000/image4.png', './image/new_24_12/Bassin_pour_pedicure_10000/image5.png'],
        videoSrc: './video/Bassin_pour_pédicure.webm',
        stock: "en stock",
        description: 'Relaxant, Pratique, Confortable',
        modalDescription: '✅ Ce bassin pour pédicure est parfait pour un moment de détente à la maison. Sa conception pratique vous permet de prendre soin de vos pieds tout en vous relaxant.'
    },
    {
        id: 1048,
        name: 'Brosse de visage',
        price: 5900, //1500
        originalPrice: 7000,
        category: 'beauté',
        imgSrcs: ['./image/new_24_12/Brosse_de_visage_1500/image1.png', './image/new_24_12/Brosse_de_visage_1500/image2.png', './image/new_24_12/Brosse_de_visage_1500/image3.png', './image/new_24_12/Brosse_de_visage_1500/image4.png',],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Douce, Efficace, Pratique',
        modalDescription: '✅ Cette brosse de visage est idéale pour un nettoyage en profondeur. Elle aide à exfolier et à revitaliser votre peau, vous offrant un teint éclatant.'
    },
    {
        id: 1049,
        name: 'Coupe légume à 6 lamelles',
        price: 8600, //4000
        originalPrice: 9500,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/Coupe-legume_a_6_lamelles_4000/image1.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image2.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image3.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image4.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image5.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image6.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image7.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image8.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image9.png', './image/new_24_12/Coupe-legume_a_6_lamelles_4000/image10.png'],
        videoSrc: './video/Coupe_légume_à_6_lamelles1.mp4',
        stock: "Indisponible actuellement",
        description: 'Innovant, Pratique, Rapide',
        modalDescription: '✅ Ce coupe-légume à 6 lamelles facilite la préparation de vos ingrédients. Sa conception innovante vous permet de gagner du temps en cuisine tout en obtenant des coupes parfaites.'
    },
    {
        id: 1050,
        name: 'Ensemble carafe',
        price: 12900, //3500
        originalPrice: 15500,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/Ensemble_carafe_3500/image1.png', './image/new_24_12/Ensemble_carafe_3500/image2.png', './image/new_24_12/Ensemble_carafe_3500/image3.png', './image/new_24_12/Ensemble_carafe_3500/image4.png', './image/new_24_12/Ensemble_carafe_3500/image5.png', './image/new_24_12/Ensemble_carafe_3500/image6.png', './image/new_24_12/Ensemble_carafe_3500/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Pratique, Sophistiqué',
        modalDescription: '✅ Cet ensemble de carafe est parfait pour servir vos boissons avec style. Son design raffiné ajoute une touche d élégance à vos repas.'
    },
    {
        id: 1051,
        name: 'Ensemble silicone 19pcs',
        price: 12500, //8500
        originalPrice: 15000,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/ensemble_silicone_19pcs_8500/image1.png', './image/new_24_12/ensemble_silicone_19pcs_8500/image2.png', './image/new_24_12/ensemble_silicone_19pcs_8500/image3.png', './image/new_24_12/ensemble_silicone_19pcs_8500/image4.png', './image/new_24_12/ensemble_silicone_19pcs_8500/image5.png', './image/new_24_12/ensemble_silicone_19pcs_8500/image6.png'],
        videoSrc: './video/Ensemble_silicone.mp4',
        stock: "en stock",
        description: 'Complet, Pratique, Durable',
        modalDescription: '✅ Cet ensemble de 19 pièces en silicone est idéal pour tous vos besoins culinaires. Sa durabilité et sa polyvalence en font un choix parfait pour les passionnés de cuisine'
    },
    {
        id: 1052,
        name: 'Etagere de range multifonctions',
        price: 7500, //2500
        originalPrice: 9000,
        category: 'tous',
        imgSrcs: ['./image/new_24_12/Etagere_de_range_multifonctions_2500/image1.png', './image/new_24_12/Etagere_de_range_multifonctions_2500/image2.png', './image/new_24_12/Etagere_de_range_multifonctions_2500/image3.png', './image/new_24_12/Etagere_de_range_multifonctions_2500/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Polyvalente, Spacieuse, Pratique',
        modalDescription: '✅ Cette étagère multifonctions est conçue pour optimiser votre espace de rangement. Elle vous permet d organiser vos habits, chaussures avec élégance.'
    },
    {
        id: 1053,
        name: 'Fer à repasser raf',
        price: 4500, //4000
        originalPrice: 5000,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/fer_repasser_raf_4000/image1.png', './image/new_24_12/fer_repasser_raf_4000/image2.png', './image/new_24_12/fer_repasser_raf_4000/image3.png', './image/new_24_12/fer_repasser_raf_4000/image4.png', './image/new_24_12/fer_repasser_raf_4000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Efficace, Compact, Pratique',
        modalDescription: '✅ Ce fer à repasser est conçu pour vous offrir des résultats impeccables. Sa taille compacte le rend facile à utiliser et à ranger.'
    },
    {
        id: 1054,
        name: 'Lingettes',
        price: 500, //300
        originalPrice: 700,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/lingettes_300/image1.png', './image/new_24_12/lingettes_300/image2.png', './image/new_24_12/lingettes_300/image3.png', './image/new_24_12/lingettes_300/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratiques, Hygiéniques, Essentielles',
        modalDescription: '✅ Ces lingettes sont idéales pour un nettoyage rapide et efficace. Leur praticité en fait un produit essentiel pour maintenir la propreté.'
    },
    {
        id: 1055,
        name: 'Mini mortier',
        price: 3900, //1300
        originalPrice: 5000,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/mini_mortier_1300/image1.png', './image/new_24_12/mini_mortier_1300/image2.png', './image/new_24_12/mini_mortier_1300/image3.png', './image/new_24_12/mini_mortier_1300/image4.png', './image/new_24_12/mini_mortier_1300/image5.png', './image/new_24_12/mini_mortier_1300/image6.png', './image/new_24_12/mini_mortier_1300/image7.png', './image/new_24_12/mini_mortier_1300/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "Disponible",
        description: 'Compact, Pratique, Efficace',
        modalDescription: '✅ Ce mini mortier est parfait pour moudre vos épices et herbes. Sa taille compacte le rend facile à utiliser et à ranger.'
    },
    {
        id: 1056,
        name: 'Mixeur de fruits',
        price: 7200, //3000
        originalPrice: 9000,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/Mixeur_de_fruits_3000/image1.png', './image/new_24_12/Mixeur_de_fruits_3000/image2.png', './image/new_24_12/Mixeur_de_fruits_3000/image3.png'],
        videoSrc: './video/Mixeur_de_fruits.webm',
        stock: "en stock",
        description: 'Pratique, Efficace, Rapide',
        modalDescription: '✅ Ce mixeur de fruits est idéal pour préparer des smoothies et des jus frais. Sa puissance vous permet de créer des boissons saines en un rien de temps.'
    },
    {
        id: 1057,
        name: 'Presse citron',
        price: 1500, //700
        originalPrice: 2000,
        category: 'cuisine',
        imgSrcs: ['./image/new_24_12/presse_citron_700/image1.png', './image/new_24_12/presse_citron_700/image2.png', './image/new_24_12/presse_citron_700/image3.png', './image/new_24_12/presse_citron_700/image4.png', './image/new_24_12/presse_citron_700/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Efficace, Compact',
        modalDescription: '✅ Ce presse-citron est un outil indispensable pour extraire le jus de vos agrumes. Sa conception compacte facilite son utilisation en cuisine.'
    },
    {
        id: 1058,
        name: 'Serviette 3 pcs',
        price: 15500, //12000
        originalPrice: 17000,
        category: 'tous',
        imgSrcs: ['./image/new_24_12/serviette_3_pcs_12000/image1.png', './image/new_24_12/serviette_3_pcs_12000/image2.png', './image/new_24_12/serviette_3_pcs_12000/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Douce, Pratique, Essentielle',
        modalDescription: '✅ Cet ensemble de serviettes est parfait. Leur douceur et leur praticité en font un choix idéal.'
    },
    {
        id: 1059,
        name: 'Tente automatique',
        price: 19500, //15000
        originalPrice: 22000,
        category: 'tous',
        imgSrcs: ['./image/new_24_12/Tente_automatique_15000/image1.png', './image/new_24_12/Tente_automatique_15000/image2.png', './image/new_24_12/Tente_automatique_15000/image3.png', './image/new_24_12/Tente_automatique_15000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Rapide, Spacieuse',
        modalDescription: '✅ Cette tente automatique est idéale pour vos sorties en plein air. Facilité de montage et son espace généreux.'
    },
    {
        id: 1060,
        name: 'Thermos numérique',
        price: 4500, //2000
        originalPrice: 5000,
        category: 'tous',
        imgSrcs: ['./image/new_24_12/Thermos_numérique_2000/image1.png', './image/new_24_12/Thermos_numérique_2000/image2.png', './image/new_24_12/Thermos_numérique_2000/image3.png', './image/new_24_12/Thermos_numérique_2000/image4.png', './image/new_24_12/Thermos_numérique_2000/image5.png', './image/new_24_12/Thermos_numérique_2000/image6.png', './image/new_24_12/Thermos_numérique_2000/image7.png', './image/new_24_12/Thermos_numérique_2000/image8.png', './image/new_24_12/Thermos_numérique_2000/image9.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Intelligent, Pratique, Durable',
        modalDescription: 'Thermos numérique 🧃, pratique et moderne, permettant de contrôler la température de vos boissons avec précision grâce à son affichage numérique. Parfait pour garder vos boissons chaudes ou froides pendant plusieurs heures, idéal pour les déplacements ou les journées bien remplies.'
    },
    {
        id: 1061,
        name: 'Ventilation de climatisation',
        price: 10500, //4500
        originalPrice: 15000,
        category: 'electronique',
        imgSrcs: ['./image/new_24_12/Ventilation_de_climatisation_4500/image1.png', './image/new_24_12/Ventilation_de_climatisation_4500/image2.png', './image/new_24_12/Ventilation_de_climatisation_4500/image3.png', './image/new_24_12/Ventilation_de_climatisation_4500/image4.png', './image/new_24_12/Ventilation_de_climatisation_4500/image5.png', './image/new_24_12/Ventilation_de_climatisation_4500/image6.png', './image/new_24_12/Ventilation_de_climatisation_4500/image7.png'],
        videoSrc: './video/Ventilation_de_climatisation1.webm',
        stock: "en stock",
        description: 'Efficace, Pratique, Confortable',
        modalDescription: 'Ventilation de climatisation 🌬️, idéale pour rafraîchir et améliorer la circulation de l air dans votre espace. Facile à installer, elle permet de maintenir une température agréable tout en réduisant l humidité, pour un confort optimal.'
    },
















    {
        id: 1062,
        name: 'Sac multi-fonction',
        price: 7500, //3500
        originalPrice: 12000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesle_Sac_multifonction_3500/image1.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image2.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image3.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image4.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image5.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image6.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image7.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image8.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image9.png', './image/Product_new/Akuesle_Sac_multifonction_3500/image10.png'],
        videoSrc: './video/Sac_multi-fonction1.mp4',
        stock: "en stock",
        description: 'Efficace, Pratique, Confortable',
        modalDescription: 'Sac multi-fonction 👜, pratique et polyvalent, idéal pour organiser vos affaires au quotidien. Avec plusieurs compartiments, il offre un espace de rangement optimal pour vos objets personnels, que ce soit pour le travail, les loisirs ou les voyages.'
    },
    {
        id: 1063,
        name: 'Adaptateur solide de voiture',
        price: 4500, //1200
        originalPrice: 5500,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Adaptateur_voiture_1200/image1.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image2.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image3.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image4.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image5.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image6.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image7.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image8.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image9.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image10.png', './image/Product_new/Akuesley_Adaptateur_voiture_1200/image11.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Adaptateur solide de voiture 🚗, conçu pour charger vos appareils en toute sécurité pendant vos trajets. Compact et robuste, il se fixe facilement dans votre véhicule et garantit une charge rapide et fiable pour vos téléphones et autres gadgets.'
    },
    {
        id: 1064,
        name: 'Casque P9 pro max',
        price: 5500, //2200
        originalPrice: 7500,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Akuesley_Casque_P9_pro_max_2200/image1.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image2.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image3.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image4.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image5.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image6.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image7.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image8.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image9.png', './image/Product_new/Akuesley_Casque_P9_pro_max_2200/image10.png'],
        videoSrc: './video/Casque_P9_pro_max1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Casque P9 Pro Max 🎧, offrant un son clair et puissant pour une expérience audio immersive. Confortable et réglable, il est parfait pour écouter de la musique, regarder des films ou passer des appels, tout en offrant une bonne isolation sonore.'
    },
    {
        id: 1065,
        name: 'Diffuseur de senteur',
        price: 5600, //2200
        originalPrice: 6000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image1.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image2.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image3.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image4.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image5.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image6.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image7.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image8.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image9.png', './image/Product_new/Akuesley_Diffuseur_de_senteur_veuilleuse_2200/image10.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Diffuseur de senteur 🌸, parfait pour parfumer agréablement votre espace. Il diffuse une fragrance douce et apaisante, créant une ambiance relaxante et agréable dans votre maison ou bureau.'
    },
    {
        id: 1066,
        name: 'Grand sac de rangement',
        price: 6800, //3000
        originalPrice: 7000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image1.png', './image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image2.png', './image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image3.png', './image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image4.png', './image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image5.png', './image/Product_new/Akuesley_Grand_sac_de_rangement_3000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Grand sac de rangement 🧳, spacieux et pratique, idéal pour organiser vos affaires à la maison ou lors de vos voyages. Solide et facile à transporter, il offre une grande capacité pour garder vos objets en ordre.'
    },
    {
        id: 1067,
        name: 'Kits de studio professionnel',
        price: 22500, //11000
        originalPrice: 25000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Akuesley_Kits_de_studio_professionnel_11000/image1.png', './image/Product_new/Akuesley_Kits_de_studio_professionnel_11000/image2.png', './image/Product_new/Akuesley_Kits_de_studio_professionnel_11000/image3.png', './image/Product_new/Akuesley_Kits_de_studio_professionnel_11000/image4.png', './image/Product_new/Akuesley_Kits_de_studio_professionnel_11000/image5.png'],
        videoSrc: './video/Kits_de_studio_professionnel1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Kits de studio professionnel 🎬, l équipement essentiel pour des enregistrements de qualité supérieure. Ils offrent tout ce qu il faut pour vos projets de photographie, vidéo ou audio. Parfaits pour les créateurs cherchant des résultats professionnels.'
    },
    {
        id: 1068,
        name: 'Pose ordinateur refroidissant',
        price: 14700, //6000
        originalPrice: 19000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_pose_ordinateur_a_refroidisseur_6000/image1.png', './image/Product_new/Akuesley_pose_ordinateur_a_refroidisseur_6000/image2.png', './image/Product_new/Akuesley_pose_ordinateur_a_refroidisseur_6000/image3.png'],
        videoSrc: './video/Pose_ordinateur_refroidissant.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Support refroidissant pour ordinateur 💻, pratique et efficace, idéal pour maintenir votre ordinateur à une température optimale pendant de longues sessions de travail ou de jeu. Son design ergonomique aide également à améliorer votre confort en ajustant la position de l écran.'
    },
    {
        id: 1069,
        name: 'Diffuseur de lumière',
        price: 5800, //2700
        originalPrice: 6500,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Projecteur_multicolore_2700/image1.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image2.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image3.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image4.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image5.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image6.png', './image/Product_new/Akuesley_Projecteur_multicolore_2700/image7.png'],
        videoSrc: './video/Diffuseur_de_lumière1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Diffuseur de lumière 🌟, idéal pour créer une ambiance douce et apaisante dans n importe quelle pièce. Il répartit la lumière de manière homogène, offrant un éclairage agréable pour vos moments de détente ou de travail.'
    },
    {
        id: 1070,
        name: 'Projecteur octogonal multicolore',
        price: 10500, //6000
        originalPrice: 12000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image1.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image2.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image3.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image4.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image5.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image6.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image7.png', './image/Product_new/Akuesley_Projecteur_octogonal_multicolore_6000/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Projecteur octogonal multicolore 🌈, parfait pour créer une ambiance unique avec ses jeux de lumière dynamiques. Idéal pour décorer votre espace, il diffuse des couleurs vibrantes qui ajoutent de la magie à vos soirées ou événements spéciaux.'
    },
    {
        id: 1071,
        name: 'Support téléphone pour voiture',
        price: 4500, //1000
        originalPrice: 5000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Support_téléphone_voiture_1000/image1.png', './image/Product_new/Akuesley_Support_téléphone_voiture_1000/image2.png', './image/Product_new/Akuesley_Support_téléphone_voiture_1000/image3.png', './image/Product_new/Akuesley_Support_téléphone_voiture_1000/image4.png', './image/Product_new/Akuesley_Support_téléphone_voiture_1000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Support téléphone pour voiture 🚗, pratique et sécurisé, idéal pour garder votre téléphone à portée de main tout en conduisant. Facile à installer et à ajuster, il vous permet d utiliser votre GPS ou de prendre des appels en toute sécurité.'
    },
    {
        id: 1072,
        name: 'Support solide pour téléphone',
        price: 3500, //1200
        originalPrice: 4000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Akuesley_Support1_téléphone_1200/image1.png', './image/Product_new/Akuesley_Support1_téléphone_1200/image2.png', './image/Product_new/Akuesley_Support1_téléphone_1200/image3.png', './image/Product_new/Akuesley_Support1_téléphone_1200/image4.png', './image/Product_new/Akuesley_Support1_téléphone_1200/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Support solide pour téléphone 📱, robuste et stable, parfait pour maintenir votre téléphone en place pendant vos appels, visionnages ou vidéos en toute sécurité. Pratique et ajustable, il vous permet de profiter d une expérience confortable.'
    },
    {
        id: 1073,
        name: 'Ampoule à pile led',
        price: 4600, //1500
        originalPrice: 5500,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Ampoule_a_pile_led_1500/image1.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image2.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image3.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image4.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image5.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image6.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image7.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image8.png', './image/Product_new/Martistore_Ampoule_a_pile_led_1500/image9.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Ampoule à pile LED 💡, pratique et économique, idéale pour éclairer vos espaces sans prise de courant. Facile à utiliser et à déplacer, elle offre une lumière douce et durable pour une utilisation en intérieur comme en extérieur.'
    },
    {
        id: 1074,
        name: 'Barbecue pliable et portable',
        price: 12500, //6000
        originalPrice: 16000,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Barbecue_pliable_portable_6000/image1.png', './image/Product_new/Martistore_Barbecue_pliable_portable_6000/image2.png', './image/Product_new/Martistore_Barbecue_pliable_portable_6000/image3.png', './image/Product_new/Martistore_Barbecue_pliable_portable_6000/image4.png', './image/Product_new/Martistore_Barbecue_pliable_portable_6000/image5.png', './image/Product_new/Martistore_Barbecue_pliable_portable_6000/image6.png'],
        videoSrc: './video/Barbecue_pliable_et_portable.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Barbecue pliable et portable 🔥, idéal pour vos sorties en plein air 🌳. Facile à transporter et à installer, il vous permet de griller vos plats préférés où que vous soyez 🍖. Compact et pratique, il rend vos moments conviviaux encore plus simples et agréables.'
    },
    {
        id: 1075,
        name: 'Batteuse électrique pratique',
        price: 6500, //3000
        originalPrice: 7500,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Batteuse_électrique_3000/image1.png', './image/Product_new/Martistore_Batteuse_électrique_3000/image2.png', './image/Product_new/Martistore_Batteuse_électrique_3000/image3.png', './image/Product_new/Martistore_Batteuse_électrique_3000/image4.png'],
        videoSrc: './video/Batteuse_électrique_pratique.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Batteuse électrique pratique 🧁, parfaite pour vous simplifier la vie en cuisine. Elle vous aide à mélanger, fouetter et pétrir en un rien de temps, que ce soit pour des gâteaux 🍰, des pâtes ou d autres recettes. Son design et ses vitesses la rendent facile à utiliser, rendant la préparation de vos plats encore plus agréable.'
    },
    {
        id: 1076,
        name: 'Bouclier anti-onde',
        price: 6700, //4000
        originalPrice: 7500,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Bouclier_anti-onde_4000/image1.png'],
        videoSrc: './video/Bouclier_anti-onde1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Bouclier anti-onde ⚡, conçu pour protéger contre les ondes électromagnétiques 📶, léger et discret 🛡️, idéal pour réduire l exposition aux appareils électroniques et favoriser un environnement plus sain.'
    },
    {
        id: 1077,
        name: 'Tasse à couvercle pratique',
        price: 2700, //1000
        originalPrice: 3000,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Chic_tasse_a_couvercle_1000/image1.png', './image/Product_new/Martistore_Chic_tasse_a_couvercle_1000/image2.png', './image/Product_new/Martistore_Chic_tasse_a_couvercle_1000/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Tasse en verre à couvercle pratique ☕, parfaite pour le lait. Son couvercle garde votre boisson à une température idéale 🔥, tout en offrant un design élégant et fonctionnel.'
    },
    {
        id: 1078,
        name: 'Drone amateur',
        price: 18000, //15000
        originalPrice: 21000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Drone_amateur_15000/image1.png', './image/Product_new/Martistore_Drone_amateur_15000/image2.png', './image/Product_new/Martistore_Drone_amateur_15000/image3.png', './image/Product_new/Martistore_Drone_amateur_15000/image4.png', './image/Product_new/Martistore_Drone_amateur_15000/image5.png', './image/Product_new/Martistore_Drone_amateur_15000/image6.png'],
        videoSrc: './video/Drone_amateur.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Drone amateur 🚁, léger et facile à manœuvrer 🕹️, idéal pour capturer des vidéos aériennes et des photos époustouflantes 📸, parfait pour les débutants et les passionnés de technologie.'
    },
    {
        id: 1079,
        name: 'Extrateur de jus rechargeable',
        price: 6500, //5000
        originalPrice: 7500,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Extrateur_de_jus_rechargeable_5000/image1.png', './image/Product_new/Martistore_Extrateur_de_jus_rechargeable_5000/image2.png', './image/Product_new/Martistore_Extrateur_de_jus_rechargeable_5000/image3.png', './image/Product_new/Martistore_Extrateur_de_jus_rechargeable_5000/image4.png'],
        videoSrc: './video/Extrateur_de_jus_rechargeable.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Extracteur de jus 🍊, pratique et écologique 🌱, idéal pour préparer des jus frais et sains 🍹, facile à utiliser et à transporter 🚶‍♂️, parfait pour un mode de vie actif.'
    },
    {
        id: 1080,
        name: 'Gaine à bande',
        price: 6000, //2500
        originalPrice: 7000,
        category: 'beauté',
        imgSrcs: ['./image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image1.png', './image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image2.png', './image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image3.png', './image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image4.png', './image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image5.png', './image/Product_new/Martistore_Gaine_a_bande_retrace_2500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Gaine à bande 💪, idéale pour soutenir et maintenir la posture 🧑‍⚕️, confortable et discrète sous les vêtements 👚, parfaite pour un maintien optimal toute la journée.'
    },
    {
        id: 1081,
        name: 'Grand fer à lisser',
        price: 4100, //3500
        originalPrice: 5000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Grand_fer_a_lisser_3500/image1.png', './image/Product_new/Martistore_Grand_fer_a_lisser_3500/image2.png', './image/Product_new/Martistore_Grand_fer_a_lisser_3500/image3.png', './image/Product_new/Martistore_Grand_fer_a_lisser_3500/image4.png', './image/Product_new/Martistore_Grand_fer_a_lisser_3500/image5.png', './image/Product_new/Martistore_Grand_fer_a_lisser_3500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Grand fer à lisser ✨, idéal pour obtenir des cheveux lisses et soyeux 💇‍♀️, chauffe rapidement 🔥 et offre une utilisation facile pour un coiffage parfait au quotidien.'
    },
    {
        id: 1082,
        name: 'Micro',
        price: 15500, //14000
        originalPrice: 17000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/martistore_micro_14500/image1.png', './image/Product_new/martistore_micro_14500/image2.png', './image/Product_new/martistore_micro_14500/image3.png', './image/Product_new/martistore_micro_14500/image4.png', './image/Product_new/martistore_micro_14500/image5.png', './image/Product_new/martistore_micro_14500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Micro 🎤 sans fil, idéal pour les conférences 🗣️, offrant une clarté sonore exceptionnelle 🔊 et une grande mobilité 🚶‍♂️, facile à utiliser et à transporter.'
    },
    {
        id: 1083,
        name: 'Mini couteau pliant',
        price: 1200, //200
        originalPrice: 2000,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image1.png', './image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image2.png', './image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image3.png', './image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image4.png', './image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image5.png', './image/Product_new/Martistore_Mini_couteau_porte_cle_pliant_200/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Mini couteau pliant 🔪 compact et pratique, idéal pour les petits travaux de découpe 🧑‍🍳 et facile à transporter 🚶‍♂️.'
    },
    {
        id: 1084,
        name: 'Mini diffuseur de senteurs',
        price: 2500, //1200
        originalPrice: 3100,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image1.png', './image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image2.png', './image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image3.png', './image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image4.png', './image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image5.png', './image/Product_new/Martistore_Mini_diffuseur_de_senteurs_1200/image6.png'],
        videoSrc: './video/Mini_diffuseur_de_senteurs1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1085,
        name: 'Mini lampe de nuit intelligente',
        price: 5500, //2000
        originalPrice: 6800,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image1.png', './image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image2.png', './image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image3.png', './image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image4.png', './image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image5.png', './image/Product_new/Martistore_Mini_lampe_de_nuit_intelligente_telecommande_2000/image6.png'],
        videoSrc: './video/Mini_lampe_de_nuit_intelligente.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Mini lampe de nuit intelligente 💡, légère et réglable, idéale pour un éclairage doux la nuit 🌙.'
    },
    {
        id: 1086,
        name: 'PLat en forme carré',
        price: 9600, //3500
        originalPrice: 15600,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Plat_blanc_Carré_lot_6_3500/image1.png', './image/Product_new/Martistore_Plat_blanc_Carré_lot_6_3500/image2.png', './image/Product_new/Martistore_Plat_blanc_Carré_lot_6_3500/image3.png', './image/Product_new/Martistore_Plat_blanc_Carré_lot_6_3500/image4.png', './image/Product_new/Martistore_Plat_blanc_Carré_lot_6_3500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Plat en forme carré 🍽️, moderne et pratique, idéal pour servir vos repas avec une présentation soignée et originale.'
    },
    {
        id: 1087,
        name: 'Plat en forme de losange',
        price: 12500, //4300
        originalPrice: 16500,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_plat_losange_lot_de_6_4300/image1.png', './image/Product_new/Martistore_plat_losange_lot_de_6_4300/image2.png', './image/Product_new/Martistore_plat_losange_lot_de_6_4300/image3.png', './image/Product_new/Martistore_plat_losange_lot_de_6_4300/image4.png', './image/Product_new/Martistore_plat_losange_lot_de_6_4300/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Plat en forme de losange 🍽️, élégant et original, parfait pour présenter vos plats avec style ✨.'
    },
    {
        id: 1088,
        name: 'Plat en forme arrondie',
        price: 6500, //4500
        originalPrice: 8000,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_Plat_rond_irrégulier_4500/image1.png', './image/Product_new/Martistore_Plat_rond_irrégulier_4500/image2.png', './image/Product_new/Martistore_Plat_rond_irrégulier_4500/image3.png', './image/Product_new/Martistore_Plat_rond_irrégulier_4500/image4.png', './image/Product_new/Martistore_Plat_rond_irrégulier_4500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Plat en forme arrondie 🍽️, design simple et élégant, parfait pour servir vos repas avec harmonie.'
    },
    {
        id: 1089,
        name: 'Plat en forme de rectangle',
        price: 10600, //4800
        originalPrice: 12500,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image1.png', './image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image2.png', './image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image3.png', './image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image4.png', './image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image5.png', './image/Product_new/Martistore_rectangle_irrégulier_lot_6_4800/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Plat en forme de rectangle 🍽️, pratique et moderne, idéal pour servir vos plats avec style.'
    },
    {
        id: 1090,
        name: 'Support pour les ordinateurs',
        price: 5500, //2000
        originalPrice: 7500,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Martistore_Support_ordinateur_2000/image1.png', './image/Product_new/Martistore_Support_ordinateur_2000/image2.png', './image/Product_new/Martistore_Support_ordinateur_2000/image3.png', './image/Product_new/Martistore_Support_ordinateur_2000/image4.png', './image/Product_new/Martistore_Support_ordinateur_2000/image5.png', './image/Product_new/Martistore_Support_ordinateur_2000/image6.png', './image/Product_new/Martistore_Support_ordinateur_2000/image7.png'],
        videoSrc: './video/Support_pour_les_ordinateurs1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Support pour ordinateur 💻, ergonomique et stable, idéal pour améliorer votre confort de travail en ajustant la hauteur de votre écran.'
    },
    {
        id: 1091,
        name: 'Tondeuse rechargeable',
        price: 5500, //2000
        originalPrice: 7000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Tondeuse_rechargeable_3500/image1.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image2.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image3.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image4.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image5.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image6.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image7.png', './image/Product_new/Martistore_Tondeuse_rechargeable_3500/image8.png'],
        videoSrc: './video/Tondeuse_rechargeable1.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Tondeuse rechargeable ✂️, pratique et sans fil, idéale pour une coupe précise à tout moment, facile à utiliser et à recharger.'
    },
    {
        id: 1092,
        name: 'Trepied, selfie avec lumières',
        price: 6700, //4000
        originalPrice: 7000,
        category: 'electronique',
        imgSrcs: ['./image/Product_new/Martistore_Trepied_selfie_avec_lumières_4000/image1.png', './image/Product_new/Martistore_Trepied_selfie_avec_lumières_4000/image2.png', './image/Product_new/Martistore_Trepied_selfie_avec_lumières_4000/image3.png', './image/Product_new/Martistore_Trepied_selfie_avec_lumières_4000/image4.png', './image/Product_new/Martistore_Trepied_selfie_avec_lumières_4000/image5.png'],
        videoSrc: './video/Trepied_selfie_avec_lumières.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Trépied selfie avec lumières 📸, idéal pour des photos et vidéos parfaites, ajustable et portable, offre un éclairage optimal pour des selfies réussis à tout moment.'
    },
    {
        id: 1093,
        name: 'Verre à whisky 6pcs',
        price: 11000, //3500
        originalPrice: 12000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image1.png', './image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image2.png', './image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image3.png', './image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image4.png', './image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image5.png', './image/Product_new/Martistore_Verre_a_whisky_de_luxe_lot_de_6_pcs_3500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Verre à whisky 6pcs 🥃, élégant et robuste, parfait pour déguster votre whisky préféré avec style, idéal pour les soirées entre amis ou les moments de détente.'
    },
    {
        id: 1094,
        name: 'Minicoupe-légumes',
        price: 3500, //1300
        originalPrice: 4000,
        category: 'cuisine',
        imgSrcs: ['./image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image1.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image2.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image3.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image4.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image5.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image6.png', './image/Product_new/sk_lux_Mini_coupe-légumes_manuel_1300/image7.png'],
        videoSrc: './video/Minicoupe-légumes.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Minicoupe-légumes 🥕, pratique et compact, idéal pour hacher rapidement vos légumes en petites portions, facile à utiliser et à nettoyer.'
    },
    {
        id: 1095,
        name: 'Nettoyant éffervescent et désinfectant',
        price: 225, //150
        originalPrice: 300,
        category: 'tous',
        imgSrcs: ['./image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image1.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image2.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image3.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image4.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image5.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image6.png', './image/Product_new/sk_luxe_Nettoyant_effervescent_désinfectant/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Nettoyant effervescent et désinfectant 🧼, efficace pour éliminer les impuretés et les bactéries, facile à utiliser et laisse une surface propre et fraîche.'
    },
    {
        id: 1096,
        name: 'Peigne chauffante',
        price: 6500, //4000
        originalPrice: 7000,
        category: 'beauté',
        imgSrcs: ['./image/Product_new/SK_LUXe_Peigne_chauffante_4000/image1.png', './image/Product_new/SK_LUXe_Peigne_chauffante_4000/image2.png', './image/Product_new/SK_LUXe_Peigne_chauffante_4000/image3.png', './image/Product_new/SK_LUXe_Peigne_chauffante_4000/image4.png', './image/Product_new/SK_LUXe_Peigne_chauffante_4000/image5.png', './image/Product_new/SK_LUXe_Peigne_chauffante_4000/image6.png'],
        videoSrc: './video/Peigne_chauffante.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Peigne chauffant 🔥, idéal pour lisser vos cheveux en douceur, chauffe rapidement pour un coiffage rapide et efficace.'
    },
    {
        id: 1097,
        name: 'Pistolet masseur',
        price: 9800, //4000
        originalPrice: 11000,
        category: 'beauté',
        imgSrcs: ['./image/Product_new/sk_luxe_Pistolet_masseur_5000/image1.png', './image/Product_new/sk_luxe_Pistolet_masseur_5000/image2.png', './image/Product_new/sk_luxe_Pistolet_masseur_5000/image3.png', './image/Product_new/sk_luxe_Pistolet_masseur_5000/image4.png', './image/Product_new/sk_luxe_Pistolet_masseur_5000/image5.png', './image/Product_new/sk_luxe_Pistolet_masseur_5000/image6.png'],
        videoSrc: './video/Pistolet_masseur.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Pistolet masseur 💆‍♂️, idéal pour détendre les muscles et soulager les tensions, facile à utiliser pour un confort optimal.'
    },

    {
        id: 1098,
        name: 'Saladiers en verre',
        price: 5500, //3000
        originalPrice: 6000,
        category: 'tous',
        imgSrcs: ['./image/Product_new/sk_luxe_saladiers_en_verre_3000/image1.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image2.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image3.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image4.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image5.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image6.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image7.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image8.png', './image/Product_new/sk_luxe_saladiers_en_verre_3000/image9.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: 'Saladiers en verre 🍽️, élégants et pratiques, parfaits pour préparer et servir vos salades avec style.'
    },
    /*{
        id: 1100,
        name: 'Vetement, fleuri, blanc, vert',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },*/
    /*{
        id: 1101,
        name: 'Habit, culotte, bleue',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1102,
        name: 'Habit, culotte, marron',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1103,
        name: 'Habit, culotte, rouge, rose',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1104,
        name: 'Habit, culotte, blanc, gris',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image5.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1105,
        name: 'Habit, culotte, jaune, vert',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image6.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1106,
        name: 'Habit, culotte, fleuri rouge',
        price: 11000, //9000
        category: 'habillement',
        imgSrcs: ['./image/Product_new/vetements/image7.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },*/





























    /*{
        id: 1107,
        name: 'Sac dame élégant',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1108,
        name: 'Sac dame moderne',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image2.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1109,
        name: 'Sac dame chic',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image3.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1110,
        name: 'Sac dame classique',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image4.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1111,
        name: 'Sac dame sportif',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image5.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1112,
        name: 'Sac dame pratique',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image6.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1113,
        name: 'Sac dame stylé',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image7.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1114,
        name: 'Sac dame tendance',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image8.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1115,
        name: 'Sac dame minimaliste',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image9.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1116,
        name: 'Sac dame fonctionnel',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image10.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1117,
        name: 'Sac dame professionnel',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image11.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1118,
        name: 'Sac dame urbain',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image12.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1119,
        name: 'Sac dame tendance',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image13.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1120,
        name: 'Sac dame raffiné',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image14.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1121,
        name: 'Sac dame chic',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image15.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1122,
        name: 'Sac dame robuste',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image16.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1123,
        name: 'Sac dame féminin',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image17.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1124,
        name: 'Sac dame vintage',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image18.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1125,
        name: 'Sac dame élégant',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image19.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1126,
        name: 'Sac dame pratique',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image20.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1127,
        name: 'Sac dame urbain',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image21.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1128,
        name: 'Sac dame minimaliste',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image22.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1129,
        name: 'Sac dame fonctionnel',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image23.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1130,
        name: 'Sac dame professionnel',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image24.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1131,
        name: 'Sac dame stylé',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image25.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1132,
        name: 'Sac dame tendance',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image26.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1133,
        name: 'Sac dame élégant',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image27.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1134,
        name: 'Sac dame stylé',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image28.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1135,
        name: 'Sac dame chic',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image29.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1136,
        name: 'Sac dame moderne',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image30.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1137,
        name: 'Sac dame luxueux',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image31.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1138,
        name: 'Sac dame pratique',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image32.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1139,
        name: 'Sac dame sophistiqué',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image33.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1140,
        name: 'Sac dame unique',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image34.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1141,
        name: 'Sac dame stylish',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image35.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },
    {
        id: 1142,
        name: 'Sac dame confortable',
        price: 13000,
        category: 'habillement',
        imgSrcs: ['./image/Product_new/sac_dame/image36.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Élégant, Durable, Polyvalent',
        modalDescription: '✅ Ce produit a été conçu avec soin pour offrir un maximum de confort, de praticité et d efficacité. Que ce soit pour une utilisation professionnelle ou quotidienne, il assure une performance optimale. Son design réfléchi garantit une expérience utilisateur agréable, tout en répondant à vos besoins spécifiques.'
    },*/




    ///////////////////////////////




    {
        id: 1143,
        name: 'Bouteille à glaçons.',
        price: 5500, //2300
        originalPrice: 7000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Bouteille_a_moule_a_glace_2300/image1.png', './image/08_01/Martistore_Bouteille_a_moule_a_glace_2300/image2.png', './image/08_01/Martistore_Bouteille_a_moule_a_glace_2300/image3.png'],
        videoSrc: './video/Bouteille_à_glaçons..mp4',
        stock: "en stock",
        description: 'Glaçons nomades frais ❄️',
        modalDescription: 'C est une bouteille pratique 🧊✨ qui permet de faire et transporter des glaçons facilement. Idéale pour garder vos boissons bien fraîches 🥤❄️, où que vous soyez !'
    },
    {
        id: 1144,
        name: 'Support pliable',
        price: 10550, //7500
        originalPrice: 12000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image1.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image2.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image3.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image4.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Support pliable ergonomique ✨💻',
        modalDescription: 'C est un support ajustable et ergonomique 🪑💻, parfait pour travailler confortablement. Léger, pliable et pratique à transporter, il s adapte à toutes vos positions et besoins. ✅✨'
    },
    /*{
        id: 1145,
        name: 'Bureau pliable',
        price: 9500, //7500
        originalPrice: 11000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image1.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image2.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image3.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image4.png', './image/08_01/Martistore_Bureau_pliable_pour_ordinateur_portable_7500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ustensiles cuisine 🍴✨',
        modalDescription: 'Un ensemble de casseroles 🥘, parfait pour cuisiner avec style. Robustes, antiadhésives et faciles à nettoyer'
    },*/
    {
        id: 1146,
        name: 'Casseroles antiadhesive',
        price: 35900, //29000
        originalPrice: 40000,
        category: 'Casseroles antiadhesive',
        imgSrcs: ['./image/08_01/Martistore_Casserole_antiadhesive_5pcs_29000/image1.png', './image/08_01/Martistore_Casserole_antiadhesive_5pcs_29000/image2.png', './image/08_01/Martistore_Casserole_antiadhesive_5pcs_29000/image3.png', './image/08_01/Martistore_Casserole_antiadhesive_5pcs_29000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Cinq casseroles 🍴✨',
        modalDescription: '🍳 Ensemble de cinq casseroles antiadhesive avec couvercles en verre et poignées dorées ✨'
    },
    {
        id: 1147,
        name: 'Casserole de table',
        price: 15700, //11800
        originalPrice: 17000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Casserole_de_table_11800/image1.png', './image/08_01/Martistore_Casserole_de_table_11800/image2.png', './image/08_01/Martistore_Casserole_de_table_11800/image3.png', './image/08_01/Martistore_Casserole_de_table_11800/image4.png', './image/08_01/Martistore_Casserole_de_table_11800/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Casserole de table 🍴✨',
        modalDescription: 'Un ensemble de cinq casseroles de table🥘. Robustes, antiadhésives et faciles à nettoyer'
    },
    {
        id: 1148,
        name: 'Casserole électronique',
        price: 9600, //4500
        originalPrice: 10500,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Casserole_electronique_3en1 _avec_cuisson_a_la_vapeur_4500/image1.png', './image/08_01/Martistore_Casserole_electronique_3en1 _avec_cuisson_a_la_vapeur_4500/image2.png', './image/08_01/Martistore_Casserole_electronique_3en1 _avec_cuisson_a_la_vapeur_4500/image3.png', './image/08_01/Martistore_Casserole_electronique_3en1 _avec_cuisson_a_la_vapeur_4500/image4.png', './image/08_01/Martistore_Casserole_electronique_3en1 _avec_cuisson_a_la_vapeur_4500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: '🍜 Mini cuiseur électronique',
        modalDescription: '🍜 Casserole électronique, pour vous'
    },
    {
        id: 1149,
        name: 'Support multifonction pratique',
        price: 10500, //8000
        originalPrice: 12000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Dispositif_Support_multifonctions_8000/image1.png', './image/08_01/Martistore_Dispositif_Support_multifonctions_8000/image2.png', './image/08_01/Martistore_Dispositif_Support_multifonctions_8000/image3.png', './image/08_01/Martistore_Dispositif_Support_multifonctions_8000/image4.png', './image/08_01/Martistore_Dispositif_Support_multifonctions_8000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Support multifonction',
        modalDescription: 'Ce support multifonction allie praticité et design, offrant des crochets pour suspendre vêtements, chapeaux et clés, ainsi que des étagères spacieuses pour organiser chaussures, sacs et autres accessoires. Idéal pour une entrée ou un espace restreint, il permet de garder vos affaires bien rangées tout en apportant une touche moderne à votre intérieur.'
    },
    {
        id: 1150,
        name: 'Boîte à lunch pratique 🥪🥤🍴',
        price: 6700, //3000
        originalPrice: 8000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Enseigne_de_boite_a_lunche_3en1_et_gourde_3000/image1.png', './image/08_01/Martistore_Enseigne_de_boite_a_lunche_3en1_et_gourde_3000/image2.png', './image/08_01/Martistore_Enseigne_de_boite_a_lunche_3en1_et_gourde_3000/image3.png', './image/08_01/Martistore_Enseigne_de_boite_a_lunche_3en1_et_gourde_3000/image4.png', './image/08_01/Martistore_Enseigne_de_boite_a_lunche_3en1_et_gourde_3000/image5.png'],
        videoSrc: './video/Boîte_à_lunch_pratique1.mp4',
        stock: "en stock",
        description: 'Boîte à lunch pratique',
        modalDescription: 'Un ensemble tout-en-un pour vos repas 🍱, comprenant une boîte hermétique, une tasse isotherme 🥤 et des couverts 🍴. Idéal pour le bureau, l école ou les sorties, avec un design moderne et coloré. 🌟'
    },
    {
        id: 1151,
        name: 'Égouttoir à vaisselle',
        price: 12700, //9500
        originalPrice: 15000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image1.png', './image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image2.png', './image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image3.png', './image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image4.png', './image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image5.png', './image/08_01/Martistore_Grand_range_vaisselle_3niveau_9500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Range vaisselle 🥢🍽️',
        modalDescription: 'Ce range-vaisselle à plusieurs niveaux est parfait pour organiser et sécher vos assiettes, bols et couverts. Avec son design compact et fonctionnel, il optimise l espace dans votre cuisine tout en gardant votre vaisselle propre et bien rangée. Pratique, élégant et durable ! 🌟'
    },





    {
        id: 1152,
        name: 'Éclairage studio professionnel.',
        price: 43800, //39000
        originalPrice: 45000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Lumière_led_déclairage_39000/image1.png', './image/08_01/Martistore_Lumière_led_déclairage_39000/image2.png', './image/08_01/Martistore_Lumière_led_déclairage_39000/image3.png'],
        videoSrc: './video/Éclairage_studio_professionnel.webm',
        stock: "en stock",
        description: 'Éclairage studio',
        modalDescription: 'Une lampe de studio puissante avec un réflecteur et un support réglable, parfaite pour la photographie et la vidéographie 🎥📸💡.'
    },
    {
        id: 1153,
        name: 'Panneau LED lumineux.',
        price: 18700, //16500
        originalPrice: 22000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Lumière_led_Pro_Multicolore_680w_16500/image1.png', './image/08_01/Martistore_Lumière_led_Pro_Multicolore_680w_16500/image2.png', './image/08_01/Martistore_Lumière_led_Pro_Multicolore_680w_16500/image3.png', './image/08_01/Martistore_Lumière_led_Pro_Multicolore_680w_16500/image4.png', './image/08_01/Martistore_Lumière_led_Pro_Multicolore_680w_16500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Panneau LED lumineux 💡.',
        modalDescription: 'Un panneau LED ajustable avec volets de contrôle de la lumière, offrant un éclairage puissant et doux, idéal pour les prises de vue en studio 📸💡.'
    },
    {
        id: 1154,
        name: 'Micro-cravate sans fil.',
        price: 11500, //9500
        originalPrice: 14000,
        category: 'tous',
        imgSrcs: ['./image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image1.png', './image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image2.png', './image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image3.png', './image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image4.png', './image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image5.png', './image/08_01/Martistore_Micro_cravate_sans_fil_3 boutes_2_micro_rechar_9500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Micro-cravate',
        modalDescription: 'Un kit de microphones-cravates sans fil, comprenant deux émetteurs et un récepteur, idéal pour capturer un son clair et de qualité en déplacement, parfait pour les interviews et les vidéos 🎤📹🔊.'
    },
    {
        id: 1155,
        name: 'Mini climatiseur portable.',
        price: 8900, //7500
        originalPrice: 9200,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_mini_Clim_refroidisseur_dair_7500/image1.png', './image/08_01/Martistore_mini_Clim_refroidisseur_dair_7500/image2.png', './image/08_01/Martistore_mini_Clim_refroidisseur_dair_7500/image3.png', './image/08_01/Martistore_mini_Clim_refroidisseur_dair_7500/image4.png', './image/08_01/Martistore_mini_Clim_refroidisseur_dair_7500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mini climatiseur',
        modalDescription: 'Un mini climatiseur portable compact et efficace, idéal pour rafraîchir de petites pièces ou un espace personnel, offrant une brise fraîche instantanée ❄️🌀👌.'
    },
    {
        id: 1156,
        name: 'Moulin électrique portable.',
        price: 7500, //4000
        originalPrice: 8000,
        category: 'cuisine',
        imgSrcs: ['./image/08_01/Martistore_Mini_moulin_a_sec_4000/image1.png', './image/08_01/Martistore_Mini_moulin_a_sec_4000/image2.png', './image/08_01/Martistore_Mini_moulin_a_sec_4000/image3.png', './image/08_01/Martistore_Mini_moulin_a_sec_4000/image4.png', './image/08_01/Martistore_Mini_moulin_a_sec_4000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mini climatiseur',
        modalDescription: 'Un mini moulin à sec, parfait pour moudre les grains, épices ou noix avec précision, compact et facile à utiliser dans la cuisine 🥜🌾⚙️.'
    },
    {
        id: 1157,
        name: 'Chauffe-eau électrique compact',
        price: 6500, //4500
        originalPrice: 7000,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_New_Chauffe_eau_RAF_de_2L_4500/image1.png', './image/08_01/Martistore_New_Chauffe_eau_RAF_de_2L_4500/image2.png', './image/08_01/Martistore_New_Chauffe_eau_RAF_de_2L_4500/image3.png', './image/08_01/Martistore_New_Chauffe_eau_RAF_de_2L_4500/image4.png', './image/08_01/Martistore_New_Chauffe_eau_RAF_de_2L_4500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Mini climatiseur',
        modalDescription: 'Le chauffe-eau électrique , d une capacité de 2 litres, offre un chauffage rapide et efficace, parfait pour les petites utilisations domestiques 🚿⚡🔥.'
    },
    {
        id: 1158,
        name: 'Distributeur de dentifrice.',
        price: 4000, //900
        originalPrice: 5000,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_Protège-brosse_a_dent_avec_distributeur_900/image1.png', './image/08_01/Martistore_Protège-brosse_a_dent_avec_distributeur_900/image2.png', './image/08_01/Martistore_Protège-brosse_a_dent_avec_distributeur_900/image3.png', './image/08_01/Martistore_Protège-brosse_a_dent_avec_distributeur_900/image4.png', './image/08_01/Martistore_Protège-brosse_a_dent_avec_distributeur_900/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Distributeur de dentifrice.',
        modalDescription: 'Un protège-brosse à dents avec distributeur de dentifrice intégré, pratique et hygiénique, parfait pour organiser votre espace de salle de bain tout en assurant une distribution facile du dentifrice 🪥🧴🚿.'
    },
    {
        id: 1159,
        name: 'Support mural pratique.',
        price: 4700, //3500
        originalPrice: 5500,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_Support_de_rangement_murale_3500/image1.png', './image/08_01/Martistore_Support_de_rangement_murale_3500/image2.png', './image/08_01/Martistore_Support_de_rangement_murale_3500/image3.png', './image/08_01/Martistore_Support_de_rangement_murale_3500/image4.png', './image/08_01/Martistore_Support_de_rangement_murale_3500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Support mural',
        modalDescription: 'Un support de rangement mural, idéal pour organiser divers objets de manière compacte et accessible, tout en économisant de l espace dans votre maison ou bureau 🧱🛠️📦.'
    },
    {
        id: 1160,
        name: 'Thermos isolant 500ml.',
        price: 5600, //2200
        originalPrice: 6000,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image1.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image2.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image3.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image4.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image5.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image6.png', './image/08_01/Martistore_Thermos_a_double_paroi_500ml_2200/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Thermos à double paroi',
        modalDescription: 'Un thermos à double paroi de 500 ml, conçu pour maintenir vos boissons chaudes ou froides pendant plusieurs heures, parfait pour une utilisation en déplacement ou au bureau ☕❄️🌡️.'
    },
    {
        id: 1161,
        name: 'Tire-bouchon manuel',
        price: 3500, //1500
        originalPrice: 4500,
        category: 'electronique',
        imgSrcs: ['./image/08_01/Martistore_Tire_bouchon_manuel_1500/image1.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image2.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image3.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image4.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image5.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image6.png', './image/08_01/Martistore_Tire_bouchon_manuel_1500/image7.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Ouvre-bouteille pratique, élégant.',
        modalDescription: 'Un tire-bouchon manuel pratique et élégant 🍷. Idéal pour ouvrir vos bouteilles de vin sans effort. Sa prise en main facile 🤲 et son design classique 👌 le rendent indispensable pour les amateurs de vin. Profitez d’un moment convivial sans tracas! 🥂'
    },
    {
        id: 1162,
        name: 'Mini ventilateur',
        price: 4500, //3000
        originalPrice: 5000,
        category: 'electronique',
        imgSrcs: ['./image/08_01/SK_LUX_Mini_ventilateur_de_table_3000/image1.png', './image/08_01/SK_LUX_Mini_ventilateur_de_table_3000/image2.png', './image/08_01/SK_LUX_Mini_ventilateur_de_table_3000/image3.png', './image/08_01/SK_LUX_Mini_ventilateur_de_table_3000/image4.png', './image/08_01/SK_LUX_Mini_ventilateur_de_table_3000/image5.png'],
        videoSrc: './video/Mini_ventilateur.mp4',
        stock: "en stock",
        description: 'mini ventilateur de table',
        modalDescription: 'Ce mini ventilateur de table est parfait pour un rafraîchissement instantané 🌬️. Compact et léger 🏖️, il se place facilement sur votre bureau ou votre table de chevet. Avec son design pratique 👌, il vous accompagnera partout pour des moments frais et agréables, même lors des journées les plus chaudes ☀️.'
    },


    ///////////20_01

















    /*{
        id: 1163,
        name: 'Diffuseur de senteur',
        price: 5500, //2500
        originalPrice: 6000,
        category: 'electronique',
        imgSrcs: ['./image/20_01/Akuesley_diffuseur_de_senteur_2500/image1.png', './image/20_01/Akuesley_diffuseur_de_senteur_2500/image2.png', './image/20_01/Akuesley_diffuseur_de_senteur_2500/image3.png', './image/20_01/Akuesley_diffuseur_de_senteur_2500/image4.png', './image/20_01/Akuesley_diffuseur_de_senteur_2500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Apaisant, parfumé, agréable.',
        modalDescription: 'Diffuseur de senteur, parfait pour apporter une touche de douceur et de calme chez vous. Il répand un parfum agréable qui crée une atmosphère relaxante. Facile à utiliser, il rend vos moments à la maison encore plus agréables..'
    },*/
    {
        id: 1164,
        name: 'Brosse pour cheveux, air chaud, electrique',
        price: 6500, //5000
        originalPrice: 9000,
        category: 'beauté',
        imgSrcs: ['./image/20_01/Martistore_Brosse_air_chaud_5000/image1.png', './image/20_01/Martistore_Brosse_air_chaud_5000/image2.png', './image/20_01/Martistore_Brosse_air_chaud_5000/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, rapide, coiffant',
        modalDescription: 'Brosse pour cheveux avec air chaud, idéale pour sécher et coiffer vos cheveux en même temps. Facile à utiliser, elle vous permet d obtenir une coiffure soignée rapidement, tout en donnant du volume et de la brillance à vos cheveux. Parfaite pour un look naturel au quotidien.'
    },
    {
        id: 1165,
        name: 'Ensembles Théière',
        price: 7500, //5000
        originalPrice: 8000,
        category: 'electronique',
        imgSrcs: ['./image/20_01/Martistore_Ensembles_Theiere_3500/image1.png', './image/20_01/Martistore_Ensembles_Theiere_3500/image2.png', './image/20_01/Martistore_Ensembles_Theiere_3500/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, complet, pratique',
        modalDescription: 'Théière simple et élégante, idéale pour préparer votre thé préféré. Elle garde votre boisson bien chaude et est facile à utiliser, parfaite pour vos moments de détente.'
    },
    {
        id: 1166,
        name: 'Grille de Barbecue',
        price: 2900, //2500
        originalPrice: 3500,
        category: 'electronique',
        imgSrcs: ['./image/20_01/Martistore_Grille_barbecue_2500/image1.png', './image/20_01/Martistore_Grille_barbecue_2500/image2.png', './image/20_01/Martistore_Grille_barbecue_2500/image3.png', './image/20_01/Martistore_Grille_barbecue_2500/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: ' Pratique, robuste, efficace.',
        modalDescription: 'Grille de barbecue idéale pour cuire vos viandes, légumes et autres plats en plein air. Robuste et facile à nettoyer, elle vous permet de préparer des repas savoureux avec une cuisson uniforme. Parfaite pour les barbecues entre amis ou en famille.'
    },
    {
        id: 1167,
        name: 'Mini Aiguiseur',
        price: 1500, //800
        originalPrice: 2000,
        category: 'electronique',
        imgSrcs: ['./image/20_01/Martistore_Mini_aiguiseur_800/image1.png', './image/20_01/Martistore_Mini_aiguiseur_800/image2.png', './image/20_01/Martistore_Mini_aiguiseur_800/image3.png', './image/20_01/Martistore_Mini_aiguiseur_800/image4.png'],
        videoSrc: './video/Mini_Aiguiseur.mp4',
        stock: "en stock",
        description: 'Pratique, compact, efficace.',
        modalDescription: 'Mini aiguiseur de couteau, super pratique pour garder vos couteaux bien tranchants. Il est petit, facile à utiliser et se range facilement dans un tiroir. Parfait pour une utilisation quotidienne, sans prise de tête.'
    },
    /*{
        id: 1168,
        name: 'Boîtes de conservation en plastique',
        price: 6500, //5000
        category: 'cuisine',
        imgSrcs: ['./image/20_01/Martistore_Plastique_lot_de_17_5000/image1.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image2.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image3.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image4.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'mini ventilateur de table',
        modalDescription: 'Ce mini ventilateur de table est parfait pour un rafraîchissement instantané 🌬️. Compact et léger 🏖️, il se place facilement sur votre bureau ou votre table de chevet. Avec son design pratique 👌, il vous accompagnera partout pour des moments frais et agréables, même lors des journées les plus chaudes ☀️.'
    },*/
    {
        id: 1169,
        name: 'Boîtes de conservation en plastique',
        price: 9500, //5000
        originalPrice: 10600,
        category: 'tous',
        imgSrcs: ['./image/20_01/Martistore_Plastique_lot_de_17_5000/image1.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image2.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image3.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image4.png', './image/20_01/Martistore_Plastique_lot_de_17_5000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, hermétique, durable.',
        modalDescription: 'Boîtes de conservation en plastique, idéales pour garder vos aliments frais et bien organisés. Légères et résistantes, elles offrent une fermeture hermétique pour maintenir la qualité des aliments, tout en étant faciles à empiler et à stocker dans vos placards ou réfrigérateur. Parfaites pour la cuisine au quotidien.'
    },
    {
        id: 1170,
        name: 'Porte Vêtements',
        price: 15600, //12000
        originalPrice: 17500,
        category: 'tous',
        imgSrcs: ['./image/20_01/Martistore_Porte_vetements_12000/image1.png', './image/20_01/Martistore_Porte_vetements_12000/image2.png', './image/20_01/Martistore_Porte_vetements_12000/image3.png', './image/20_01/Martistore_Porte_vetements_12000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, spacieux, organisé.',
        modalDescription: 'Porte-vêtements idéal pour garder vos vêtements bien rangés et facilement accessibles. Avec plusieurs barres ou crochets, il offre un espace de rangement pratique pour votre chambre ou entrée. Son design simple et fonctionnel vous aide à organiser votre quotidien tout en économisant de l espace.'
    },
    {
        id: 1171,
        name: 'Porte-brosse à dents mural',
        price: 4500, //2000
        originalPrice: 6000,
        category: 'tous',
        imgSrcs: ['./image/20_01/Martistore_Porte-brosse_a_dents_mural_2000/image1.png', './image/20_01/Martistore_Porte-brosse_a_dents_mural_2000/image2.png', './image/20_01/Martistore_Porte-brosse_a_dents_mural_2000/image3.png', './image/20_01/Martistore_Porte-brosse_a_dents_mural_2000/image4.png'],
        videoSrc: './video/Porte-brosse_à_dents_mural.mp4',
        stock: "en stock",
        description: 'Pratique, hygiénique, organisé.',
        modalDescription: 'Porte-brosse à dents mural, idéal pour garder vos brosses à dents bien rangées et à portée de main. Il se fixe facilement sur le mur, économisant de l espace et ajoutant une touche de praticité à votre salle de bain. Parfait pour maintenir un environnement propre et organisé.'
    },
    {
        id: 1172,
        name: 'Seche-linge pliable',
        price: 14000, //12000
        originalPrice: 17000,
        category: 'tous',
        imgSrcs: ['./image/20_01/Martistore_Seche-linge_pliable_12000/image1.png', './image/20_01/Martistore_Seche-linge_pliable_12000/image2.png', './image/20_01/Martistore_Seche-linge_pliable_12000/image3.png', './image/20_01/Martistore_Seche-linge_pliable_12000/image4.png', './image/20_01/Martistore_Seche-linge_pliable_12000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, compact, efficace',
        modalDescription: 'Sèche-linge pliable, idéal pour sécher vos vêtements rapidement tout en économisant de l espace. Facile à plier et à ranger, il est parfait pour les petits espaces ou les déplacements. Vous pouvez l utiliser à la maison ou en voyage pour un séchage pratique et rapide.'
    },
    {
        id: 1173,
        name: 'Support mural d’angle en fer',
        price: 4000, //1700
        originalPrice: 5000,
        category: 'tous',
        imgSrcs: ['./image/20_01/Martistore_Support_mural_fer_1700/image1.png', './image/20_01/Martistore_Support_mural_fer_1700/image2.png', './image/20_01/Martistore_Support_mural_fer_1700/image3.png', './image/20_01/Martistore_Support_mural_fer_1700/image4.png', './image/20_01/Martistore_Support_mural_fer_1700/image5.png', './image/20_01/Martistore_Support_mural_fer_1700/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "Indisponible actuellement",
        description: 'Pratique, solide, polyvalent',
        modalDescription: 'Support mural d angle en fer, idéal pour optimiser l espace tout en offrant une solution de rangement robuste. Parfait pour organiser vos objets tout en gardant votre intérieur ordonné et fonctionnel. Facile à installer et durable, il s’adapte à tous les coins de votre maison.'
    },
    {
        id: 1174,
        name: 'Théière',
        price: 4500, //3500
        originalPrice: 5000,
        category: 'cuisine',
        imgSrcs: ['./image/20_01/Martistore_Theiere_a_filtre_3500/image1.png', './image/20_01/Martistore_Theiere_a_filtre_3500/image2.png', './image/20_01/Martistore_Theiere_a_filtre_3500/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, complet.',
        modalDescription: ' Théière à filtre de 1L accompagnée de 4 petites tasses en verre. Parfaite pour préparer et déguster du thé en toute simplicité, cette ensemble offre tout ce dont vous avez besoin pour partager un moment agréable.'
    },

    ///////////////////22_01













    {
        id: 1175,
        name: 'Diffuseur de senteur',
        price: 6000, //2500
        originalPrice: 7200,
        category: 'tous',
        imgSrcs: ['./image/22_01/Akuesley_diffuseur_de_senteur_2500/image1.png', './image/22_01/Akuesley_diffuseur_de_senteur_2500/image2.png', './image/22_01/Akuesley_diffuseur_de_senteur_2500/image3.png', './image/22_01/Akuesley_diffuseur_de_senteur_2500/image4.png', './image/22_01/Akuesley_diffuseur_de_senteur_2500/image5.png'],
        videoSrc: './video/Diffuseur_de_senteur1.mp4',
        stock: "en stock",
        description: ' Élégant, apaisant, parfumé.',
        modalDescription: 'Un diffuseur de senteur 🌿 apporte une ambiance agréable à votre espace 🏡, en libérant doucement des parfums 🌸 qui créent un environnement relaxant et harmonieux 🕯️✨.'
    },
    {
        id: 1176,
        name: 'Bouteille whisky ou vin',
        price: 8500, //4000
        originalPrice: 10500,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_article_luxe_Bouteille_de_whisky_ou_vin_4000/image1.png', './image/22_01/Henri_distrib_article_luxe_Bouteille_de_whisky_ou_vin_4000/image2.png', './image/22_01/Henri_distrib_article_luxe_Bouteille_de_whisky_ou_vin_4000/image3.png', './image/22_01/Henri_distrib_article_luxe_Bouteille_de_whisky_ou_vin_4000/image4.png', './image/22_01/Henri_distrib_article_luxe_Bouteille_de_whisky_ou_vin_4000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Raffiné, intemporel, élégant',
        modalDescription: 'Une bouteille de whisky 🥃 ou de vin 🍷 est une invitation au partage et à la découverte, symbolisant l’art de savourer des saveurs uniques et des moments précieux.'
    },
    {
        id: 1177,
        name: 'Lampe veilleuse',
        price: 4700, //5000
        originalPrice: 5500,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image1.png', './image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image2.png', './image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image3.png', './image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image4.png', './image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image5.png', './image/22_01/Henri_distrib_Chic_lampe_veilleuse_de_table_5000/image6.png'],
        videoSrc: './video/Lampe_veilleuse1.mp4',
        stock: "en stock",
        description: 'Douce, apaisante, lumineuse.',
        modalDescription: 'Une lampe veilleuse ✨ diffuse une lumière douce 🌙 qui crée une ambiance réconfortante, parfaite pour accompagner vos nuits ou apaiser les tout-petits 🛏️.'
    },
    {
        id: 1178,
        name: 'Detecteur de devises',
        price: 15000, //9000
        originalPrice: 19000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_Detecteur_de_toutes_les_devises_9000/image1.png', './image/22_01/Henri_distrib_Detecteur_de_toutes_les_devises_9000/image2.png', './image/22_01/Henri_distrib_Detecteur_de_toutes_les_devises_9000/image3.png', './image/22_01/Henri_distrib_Detecteur_de_toutes_les_devises_9000/image4.png', './image/22_01/Henri_distrib_Detecteur_de_toutes_les_devises_9000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Précis, fiable, pratique.',
        modalDescription: 'Un détecteur de toutes devises 💵💶 garantit la sécurité de vos transactions en vérifiant rapidement et efficacement l authenticité des billets, peu importe leur origine 🌍.'
    },
    {
        id: 1179,
        name: 'Ensemble tire bouchon',
        price: 6500, //4500
        originalPrice: 8000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_Ensemble_tire_bouchon_5_pcs_4500/image1.png', './image/22_01/Henri_distrib_Ensemble_tire_bouchon_5_pcs_4500/image2.png', './image/22_01/Henri_distrib_Ensemble_tire_bouchon_5_pcs_4500/image3.png', './image/22_01/Henri_distrib_Ensemble_tire_bouchon_5_pcs_4500/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, ingénieux.',
        modalDescription: 'Un ensemble tire-bouchon 🍷 dissimulé dans une bouteille design combine style et fonctionnalité, idéal pour ouvrir vos meilleures bouteilles avec classe et simplicité 🥂.'
    },
    {
        id: 1180,
        name: 'Eponge de nettoyage de cuisine',
        price: 1500, //1200
        originalPrice: 1500,
        category: 'cuisine',
        imgSrcs: ['./image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image1.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image2.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image3.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image4.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image5.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image6.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image7.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image8.png', './image/22_01/Henri_distrib_Eponge_de_nettoyage_de_cuisine_4pcs_1200/image9.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, absorbante, durable.',
        modalDescription: 'Une éponge de nettoyage de cuisine 🧽 est conçue pour éliminer efficacement les taches et la saleté, offrant une solution simple et fiable pour garder votre espace de cuisine propre et ordonné 🍽️.'
    },
    {
        id: 1181,
        name: 'Moustiquaire pliable 3 places',
        price: 8000, //5000  //martistore
        originalPrice: 8000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image1.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image2.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image3.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image4.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image5.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image6.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image7.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image8.png', './image/22_01/Henri_distrib_Moustiquaire_pliable_3_places_9000/image9.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, protectrice, compacte.',
        modalDescription: 'Une moustiquaire pliable 3 places 🦟 offre une protection efficace contre les insectes tout en étant facile à transporter et à installer, idéale pour les sorties en plein air ou les nuits 🌙.'
    },
    {
        id: 1182,
        name: 'Plaque chauffante',
        price: 22000, //20000
        originalPrice: 25000,
        category: 'cuisine',
        imgSrcs: ['./image/22_01/Henri_distrib_Plaque_chauffante_20000/image1.png', './image/22_01/Henri_distrib_Plaque_chauffante_20000/image2.png', './image/22_01/Henri_distrib_Plaque_chauffante_20000/image3.png', './image/22_01/Henri_distrib_Plaque_chauffante_20000/image4.png', './image/22_01/Henri_distrib_Plaque_chauffante_20000/image5.png', './image/22_01/Henri_distrib_Plaque_chauffante_20000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, efficace, polyvalente.',
        modalDescription: 'La plaque chauffante 🔥 apporte une chaleur uniforme 🌡️ pour garder vos repas à température idéale 🍽️, pratique et rapide pour toutes vos occasions 🥘.'
    },
    {
        id: 1183,
        name: 'Poêle à frire anti-adhésive',
        price: 8700, //5500
        originalPrice: 9800,
        category: 'cuisine',
        imgSrcs: ['./image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image1.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image2.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image3.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image4.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image5.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image6.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image7.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image8.png', './image/22_01/Henri_distrib_Poele_frire_anti_adhésive_5500/image9.png'],
        videoSrc: './video/Poêle_à_frire_anti-adhésive1.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, complet.',
        modalDescription: 'Elle apporte une cuisson sans accrocs, permettant de préparer vos plats avec moins d huile 🧈 et un nettoyage facile 🧼.'
    },
    {
        id: 1184,
        name: 'Visseuse avec accessoire',
        price: 15000, //11000
        originalPrice: 22000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrib_viceuse_avec_les_accessoires_11000/image1.png', './image/22_01/Henri_distrib_viceuse_avec_les_accessoires_11000/image2.png', './image/22_01/Henri_distrib_viceuse_avec_les_accessoires_11000/image3.png', './image/22_01/Henri_distrib_viceuse_avec_les_accessoires_11000/image4.png', './image/22_01/Henri_distrib_viceuse_avec_les_accessoires_11000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, complet.',
        modalDescription: 'Elle 🔧 apporte une solution pratique pour tous vos projets de bricolage 🛠️, offrant confort et polyvalence pour visser facilement 🧰 et rapidement.'
    },
    {
        id: 1185,
        name: 'Range vaisselle',
        price: 27000, // 25000
        originalPrice: 32000,
        category: 'cuisine',
        imgSrcs: ['./image/22_01/Henri_distribution_Range_verselle_30000/image1.png', './image/22_01/Henri_distribution_Range_verselle_30000/image2.png', './image/22_01/Henri_distribution_Range_verselle_30000/image3.png', './image/22_01/Henri_distribution_Range_verselle_30000/image4.png', './image/22_01/Henri_distribution_Range_verselle_30000/image5.png', './image/22_01/Henri_distribution_Range_verselle_30000/image6.png', './image/22_01/Henri_distribution_Range_verselle_30000/image7.png', './image/22_01/Henri_distribution_Range_verselle_30000/image8.png', './image/22_01/Henri_distribution_Range_verselle_30000/image9.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, complet.',
        modalDescription: 'Le range-vaisselle 🍽️ apporte une solution pratique pour organiser et sécher votre vaisselle, optimisant l espace de votre cuisine tout en maintenant l ordre 🧼.'
    },
    {
        id: 1186,
        name: 'Sac de rangement',
        price: 8500, //4000
        originalPrice: 9000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distribution_Sac_de_rangement_4000/image1.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image2.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image3.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image4.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image5.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image6.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image7.png', './image/22_01/Henri_distribution_Sac_de_rangement_4000/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, organisé, spacieux.',
        modalDescription: ' Théière à filtre de 1L accompagnée de 4 petites tasses en verre. Parfaite pour préparer et déguster du thé en toute simplicité, cette ensemble offre tout ce dont vous avez besoin pour partager un moment agréable.'
    },
    {
        id: 1187,
        name: 'Tasse et pipette en verre',
        price: 2500, //2000
        originalPrice: 3000,
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image1.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image2.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image3.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image4.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image5.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, transparent, raffiné.',
        modalDescription: 'La tasse et la pipette en verre 🍷✨ ajoutent un joli côté élégant à vos boissons, et leur transparence rend chaque gorgée encore plus agréable 😌.'
    },
    /*{
        id: 1188,
        name: 'Tasse et pipette en verres',
        price: 2300, //2000
        category: 'tous',
        imgSrcs: ['./image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image1.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image2.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image3.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image4.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image5.png', './image/22_01/Henri_distrubution_Tassa_verre_pipette_en_verre_2000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, élégant, complet.',
        modalDescription: ' Théière à filtre de 1L accompagnée de 4 petites tasses en verre. Parfaite pour préparer et déguster du thé en toute simplicité, cette ensemble offre tout ce dont vous avez besoin pour partager un moment agréable.'
    },*/
    {
        id: 1189,
        name: 'Couteau ondulé en acier',
        price: 700, //500
        originalPrice: 800,
        category: 'tous',
        imgSrcs: ['./image/22_01/Martistore_couteau_ondule_acier_500/image1.png', './image/22_01/Martistore_couteau_ondule_acier_500/image2.png', './image/22_01/Martistore_couteau_ondule_acier_500/image3.png', './image/22_01/Martistore_couteau_ondule_acier_500/image4.png', './image/22_01/Martistore_couteau_ondule_acier_500/image5.png', './image/22_01/Martistore_couteau_ondule_acier_500/image6.png', './image/22_01/Martistore_couteau_ondule_acier_500/image7.png', './image/22_01/Martistore_couteau_ondule_acier_500/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Précis, pratique, tranchant.',
        modalDescription: 'Le couteau ondulé en acier 🔪 apporte une coupe précise et nette, parfait pour trancher les pains ou fruits avec facilité 🍞🍏.'
    },
    {
        id: 1190,
        name: 'Organisateur de cannette pour réfrigerateur',
        price: 750, //500
        originalPrice: 1200,
        category: 'tous',
        imgSrcs: ['./image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image1.png', './image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image2.png', './image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image3.png', './image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image4.png', './image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image5.png', './image/22_01/Martistore_Organisateur_de_cannette_refrigerateur_500/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, compact, organisé.',
        modalDescription: 'L’organisateur de cannettes pour réfrigérateur 🥤 garde vos boissons bien rangées et à portée de main, maximisant l’espace tout en évitant le chaos 🍺.'
    },
    {
        id: 1191,
        name: 'Ventilateur numérique',
        price: 3500, //3000
        originalPrice: 5000,
        category: 'electronique',
        imgSrcs: ['./image/22_01/Martistore_Ventilateur_numérique_chargeable_3000/image1.png', './image/22_01/Martistore_Ventilateur_numérique_chargeable_3000/image2.png', './image/22_01/Martistore_Ventilateur_numérique_chargeable_3000/image3.png', './image/22_01/Martistore_Ventilateur_numérique_chargeable_3000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, puissant, moderne',
        modalDescription: 'Le ventilateur numérique 🌬️ offre une fraîcheur instantanée avec des réglages précis, idéal pour rafraîchir votre espace en toute simplicité et efficacité 🔥'
    },
    /////02_02




    {
        id: 1192,
        name: 'Armoire de rangement 3 battants',
        price: 30000, //22000
        originalPrice: 35000,
        category: 'tous',
        imgSrcs: ['./image/02_02/Akuesley_Armoire_de_rangement_3 _battant_22000/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Grande, pratique, élégante.',
        modalDescription: 'Une armoire spacieuse et bien pensée pour ranger facilement vos affaires tout en apportant une touche de style à votre intérieur.'
    },
    {
        id: 1193,
        name: 'Chauffe eau pliable',
        price: 5200, //4000
        originalPrice: 6500,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Chauffe_eau_pliable_4000/image1.png', './image/02_02/Akuesley_Chauffe_eau_pliable_4000/image2.png', './image/02_02/Akuesley_Chauffe_eau_pliable_4000/image3.png'],
        videoSrc: './video/Chauffe_eau_pliable1.mp4',
        stock: "en stock",
        description: 'Compact, pratique, innovant',
        modalDescription: 'Un chauffe-eau pliable, facile à transporter et à ranger, idéal pour les petits espaces ou les voyages.'
    },
    {
        id: 1194,
        name: 'Chauffe eau RAF',
        price: 5000, //4000
        originalPrice: 6000,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image1.png', './image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image2.png', './image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image3.png', './image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image4.png', './image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image5.png', './image/02_02/Akuesley_Chauffeur_eau_RAF_2,3L_4000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Puissant, rapide, fiable.',
        modalDescription: 'Le chauffe-eau RAF chauffe rapidement, pour un confort au quotidien. Fiable et économique, il s’adapte à vos besoins en eau chaude.'
    },
    {
        id: 1195,
        name: 'Ensemble jeu de dames et ludo',
        price: 900, //700
        originalPrice: 2000,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Ensemble_jeu_de_dames_ludo_700/image1.png', './image/02_02/Akuesley_Ensemble_jeu_de_dames_ludo_700/image2.png', './image/02_02/Akuesley_Ensemble_jeu_de_dames_ludo_700/image3.png', './image/02_02/Akuesley_Ensemble_jeu_de_dames_ludo_700/image4.png', './image/02_02/Akuesley_Ensemble_jeu_de_dames_ludo_700/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Amusant, convivial, classique.',
        modalDescription: 'Un ensemble complet avec les jeux de dames et de ludo, parfait pour des moments de détente et de fun en famille ou entre amis.'
    },
    {
        id: 1196,
        name: 'Ensemble séchoir',
        price: 16500, //9000
        originalPrice: 18500,
        category: 'beauté',
        imgSrcs: ['./image/02_02/Akuesley_Ensemble_séchoir_8000/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, léger, efficace.',
        modalDescription: 'Un séchoir à cheveux compact et puissant, parfait pour un séchage rapide tout en douceur pour vos cheveux.'
    },
    {
        id: 1197,
        name: 'Fouet manuel',
        price: 400, //350
        originalPrice: 500,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Fouet_manuel_350/image1.png', './image/02_02/Akuesley_Fouet_manuel_350/image2.png', './image/02_02/Akuesley_Fouet_manuel_350/image3.png', './image/02_02/Akuesley_Fouet_manuel_350/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, léger, efficace',
        modalDescription: 'Un fouet manuel idéal pour battre, mélanger et fouetter vos ingrédients facilement, avec un design simple et efficace.'
    },
    {
        id: 1198,
        name: 'Kits de manucure et pédicure',
        price: 900, //700
        originalPrice: 1500,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Kits_de_manucure_et_pédicure_800/image1.png', './image/02_02/Akuesley_Kits_de_manucure_et_pédicure_800/image2.png', './image/02_02/Akuesley_Kits_de_manucure_et_pédicure_800/image3.png', './image/02_02/Akuesley_Kits_de_manucure_et_pédicure_800/image4.png', './image/02_02/Akuesley_Kits_de_manucure_et_pédicure_800/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Complet, pratique, soigné',
        modalDescription: 'Un kit complet pour manucure et pédicure, avec tout le nécessaire pour prendre soin de vos ongles à la maison.'
    },
    {
        id: 1199,
        name: 'Ménagère en plaqué or',
        price: 9500, //8000
        originalPrice: 10500,
        category: 'tous',
        imgSrcs: ['./image/02_02/Akuesley_ménagère_en_plaqué_or_8000/image1.png', './image/02_02/Akuesley_ménagère_en_plaqué_or_8000/image2.png', './image/02_02/Akuesley_ménagère_en_plaqué_or_8000/image3.png', './image/02_02/Akuesley_ménagère_en_plaqué_or_8000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Élégant, raffiné, durable',
        modalDescription: 'Une ménagère en plaqué or comprenant cuillères, fourchettes et couteaux, alliant luxe et fonctionnalité pour vos repas.'
    },
    {
        id: 1200,
        name: 'Mini Plaque Chauffante',
        price: 5500, //4000
        originalPrice: 7000,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Mini_Plaque_Chauffante_4000/image1.png', './image/02_02/Akuesley_Mini_Plaque_Chauffante_4000/image2.png', './image/02_02/Akuesley_Mini_Plaque_Chauffante_4000/image3.png', './image/02_02/Akuesley_Mini_Plaque_Chauffante_4000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Compacte, pratique, rapide',
        modalDescription: 'Une mini plaque chauffante idéale pour chauffer rapidement vos plats, facile à utiliser et à transporter.'
    },
    {
        id: 1201,
        name: 'Mini ventilo',
        price: 1800, //1300
        originalPrice: 2500,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Mini_ventilo_1300/image1.png', './image/02_02/Akuesley_Mini_ventilo_1300/image2.png', './image/02_02/Akuesley_Mini_ventilo_1300/image3.png', './image/02_02/Akuesley_Mini_ventilo_1300/image4.png'],
        videoSrc: './video/Mini_ventilo.mp4',
        stock: "en stock",
        description: 'Compact, puissant, portable',
        modalDescription: 'Un mini ventilo léger et efficace, parfait pour vous rafraîchir où que vous soyez.'
    },
    {
        id: 1202,
        name: 'Moulinex à sec',
        price: 6900, //2800
        originalPrice: 8000,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Akuesley_Moulinex_à_sec_2800/image1.png', './image/02_02/Akuesley_Moulinex_à_sec_2800/image2.png', './image/02_02/Akuesley_Moulinex_à_sec_2800/image3.png', './image/02_02/Akuesley_Moulinex_à_sec_2800/image4.png', './image/02_02/Akuesley_Moulinex_à_sec_2800/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, puissant, rapide',
        modalDescription: 'Un moulinex à sec idéal pour moudre vos épices, café et autres ingrédients secs rapidement et efficacement.'
    },
    {
        id: 1203,
        name: 'Tapis',
        price: 2500, //1500
        originalPrice: 3500,
        category: 'decoration',
        imgSrcs: ['./image/02_02/Akuesley_Tapis_1500/image1.png', './image/02_02/Akuesley_Tapis_1500/image2.png', './image/02_02/Akuesley_Tapis_1500/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Confortable, décoratif, polyvalent.',
        modalDescription: 'Un tapis doux et élégant, parfait pour ajouter du confort et de la couleur à n importe quelle pièce.'
    },
    {
        id: 1204,
        name: 'Tapis antidérapant',
        price: 2500, //1700
        originalPrice: 3000,
        category: 'decoration',
        imgSrcs: ['./image/02_02/Akuesley_Tapis_antidérapant_1700/image1.png', './image/02_02/Akuesley_Tapis_antidérapant_1700/image2.png', './image/02_02/Akuesley_Tapis_antidérapant_1700/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Sécurisé, pratique, stable',
        modalDescription: 'Un tapis antidérapant qui reste bien en place, offrant confort et sécurité dans toutes les pièces.'
    },
    {
        id: 1205,
        name: 'Aspirateur portable',
        price: 7200, //5500
        originalPrice: 9000,
        category: 'electronique',
        imgSrcs: ['./image/02_02/Martistore_aspirateur_portable_5500/image1.png', './image/02_02/Martistore_aspirateur_portable_5500/image2.png', './image/02_02/Martistore_aspirateur_portable_5500/image3.png', './image/02_02/Martistore_aspirateur_portable_5500/image4.png', './image/02_02/Martistore_aspirateur_portable_5500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Compact, puissant, pratique',
        modalDescription: 'Un aspirateur portable léger et efficace, idéal pour nettoyer facilement vos espaces et les recoins difficiles d accès.'
    },
    ///////////09_02


    {
        id: 1206,
        name: 'Planche légumes',
        price: 2200, //1500
        originalPrice: 3000,
        category: 'cuisine',
        imgSrcs: ['./image/09_02/Akuesley_Planche_legumes_1500/image1.png', './image/09_02/Akuesley_Planche_legumes_1500/image2.png', './image/09_02/Akuesley_Planche_legumes_1500/image3.png', './image/09_02/Akuesley_Planche_legumes_1500/image4.png'],
        videoSrc: './video/Planche_légumes1.mp4',
        stock: "en stock",
        description: 'Pratique, stable, solide',
        modalDescription: 'Planche pour découper vos légumes en toute simplicité, pratique, stable et solide'
    },
    {
        id: 1207,
        name: 'Thermos sport',
        price: 3000, //2000
        originalPrice: 4000,
        category: 'tous',
        imgSrcs: ['./image/09_02/Akuesley_Thermos_sport_2000/image1.png', './image/09_02/Akuesley_Thermos_sport_2000/image2.png', './image/09_02/Akuesley_Thermos_sport_2000/image3.png', './image/09_02/Akuesley_Thermos_sport_2000/image4.png', './image/09_02/Akuesley_Thermos_sport_2000/image5.png', './image/09_02/Akuesley_Thermos_sport_2000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Thermos de luxe, stylé, simple et facile à utiliser. Parfait pour vos pauses.'
    },
    {
        id: 1208,
        name: 'Chauffe eau',
        price: 7800, //6500
        originalPrice: 8500,
        category: 'electronique',
        imgSrcs: ['./image/09_02/Martistore_Chauffe_eau_double_option_6500/image1.png', './image/09_02/Martistore_Chauffe_eau_double_option_6500/image2.png', './image/09_02/Martistore_Chauffe_eau_double_option_6500/image3.png', './image/09_02/Martistore_Chauffe_eau_double_option_6500/image4.png', './image/09_02/Martistore_Chauffe_eau_double_option_6500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Chauffe eau multi-fonctions, thermos. 3L'
    },
    {
        id: 1209,
        name: 'Ecouteur powerbank M88',
        price: 4000, //2500
        originalPrice: 6000,
        category: 'electronique',
        imgSrcs: ['./image/09_02/Martistore_Ecouteur_powerbank_M88_2500/image1.png', './image/09_02/Martistore_Ecouteur_powerbank_M88_2500/image2.png', './image/09_02/Martistore_Ecouteur_powerbank_M88_2500/image3.png', './image/09_02/Martistore_Ecouteur_powerbank_M88_2500/image4.png', './image/09_02/Martistore_Ecouteur_powerbank_M88_2500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Ecouteur powerbank M88, qualité sonore exceptionnelle. Parfait pour les appels etpour écouter de la musique'
    },
    {
        id: 1210,
        name: 'Etagère de rangement multifonctions',
        price: 36000, //30000
        originalPrice: 40000,
        category: 'tous',
        imgSrcs: ['./image/09_02/Martistore_etagere_de_rangement_multifonctions_de_5niveaux_30000/image1.png', './image/09_02/Martistore_etagere_de_rangement_multifonctions_de_5niveaux_30000/image2.png', './image/09_02/Martistore_etagere_de_rangement_multifonctions_de_5niveaux_30000/image3.png', './image/09_02/Martistore_etagere_de_rangement_multifonctions_de_5niveaux_30000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Etagère de rangement multifonctions, 5 niveaux, rangez efficacement vos affaires grâce à cette étagère solide et esthétique.'
    },
    {
        id: 1211,
        name: 'Scelleur de sachet',
        price: 12500, //8000
        originalPrice: 15000,
        category: 'tous',
        imgSrcs: ['./image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image1.png', './image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image2.png', './image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image3.png', './image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image4.png', './image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image5.png', './image/09_02/MArtistore_Grand_Scelleur_de_sachet_33mm_8000/image6.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Scelleur de sachet 33mm, Portable, pratique pour sceller vos sachet en toute sécurité'
    },
    {
        id: 1212,
        name: 'Sac de rangement',
        price: 6900, //3500
        originalPrice: 7000,
        category: 'tous',
        imgSrcs: ['./image/09_02/Martistore_Sac_de_rangement_100l_3500/image1.png', './image/09_02/Martistore_Sac_de_rangement_100l_3500/image2.png', './image/09_02/Martistore_Sac_de_rangement_100l_3500/image3.png', './image/09_02/Martistore_Sac_de_rangement_100l_3500/image4.png', './image/09_02/Martistore_Sac_de_rangement_100l_3500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Sac de rangement, pratique, facile à transporter, efficace pour les sorties et les voyages'
    },
    {
        id: 1213,
        name: 'Tasse de mélange automatique',
        price: 6500, //3000
        originalPrice: 7000,
        category: 'tous',
        imgSrcs: ['./image/09_02/Martistore_Tasse_de_melange_automatique_3000/image1.png', './image/09_02/Martistore_Tasse_de_melange_automatique_3000/image2.png', './image/09_02/Martistore_Tasse_de_melange_automatique_3000/image3.png', './image/09_02/Martistore_Tasse_de_melange_automatique_3000/image4.png', './image/09_02/Martistore_Tasse_de_melange_automatique_3000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Tasse de mélange automatique, profiter d une tasse unique pour vous'
    },





















    //////////18_02
    /*{
        id: 1214,
        name: 'Lampe multi-colores',
        price: 8500, //4000
        originalPrice: 10500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Akuesley_Lampe_multi_colores_avec_panneau_solaire_4000/image1.png', './image/18_02/Akuesley_Lampe_multi_colores_avec_panneau_solaire_4000/image2.png', './image/18_02/Akuesley_Lampe_multi_colores_avec_panneau_solaire_4000/image3.png', './image/18_02/Akuesley_Lampe_multi_colores_avec_panneau_solaire_4000/image4.png', './image/18_02/Akuesley_Lampe_multi_colores_avec_panneau_solaire_4000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, durable, portable',
        modalDescription: 'Rechargeable à l’énergie solaire et électrique 🔋⚡. Ultra pratique et indispensable au quotidien ! 💡✨  '
    },*/
    {
        id: 1215,
        name: 'Powerbank 20000 mAh',
        price: 9500, //4500
        originalPrice: 11500,
        category: 'electronique',
        imgSrcs: ['./image/18_02/Akuesley_Powerbank_6-en-1_de_20000_mAh_4500/image1.png', './image/18_02/Akuesley_Powerbank_6-en-1_de_20000_mAh_4500/image2.png', './image/18_02/Akuesley_Powerbank_6-en-1_de_20000_mAh_4500/image3.png', './image/18_02/Akuesley_Powerbank_6-en-1_de_20000_mAh_4500/image4.png', './image/18_02/Akuesley_Powerbank_6-en-1_de_20000_mAh_4500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, puissant, polyvalent',
        modalDescription: 'Avec ventouse pour poser ton téléphone 📱 et lampe torche intégrée 🔦. Pratique et toujours prêt à l’usage ! ⚡✨ '
    },
    {
        id: 1216,
        name: 'Thermos numérique avec intérieur en verre',
        price: 8600, //4000
        originalPrice: 9500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Akuesley_Thermos_numériques_4000/image1.jpeg'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, Compact, portable',
        modalDescription: 'Haute qualité pour garder vos boissons à la bonne température toute la journée ! ⏳👌'
    },
    {
        id: 1217,
        name: 'Ventilateur + veilleuse rechargeable ',
        price: 7600, //3500
        originalPrice: 8500,
        category: 'electronique',
        imgSrcs: ['./image/18_02/Akuesley_Ventilo_veilleuse_rechargeable_3500/image1.png', './image/18_02/Akuesley_Ventilo_veilleuse_rechargeable_3500/image2.png', './image/18_02/Akuesley_Ventilo_veilleuse_rechargeable_3500/image3.png', './image/18_02/Akuesley_Ventilo_veilleuse_rechargeable_3500/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, design, efficace',
        modalDescription: 'Super joli, esthétique et rafraîchit efficacement ! ✨❄️'
    },
    {
        id: 1218,
        name: 'Boîte à couture complète 🧵✂️',
        price: 2500, //1000
        originalPrice: 4000,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Boite_couture_1000/image1.png', './image/18_02/Martistore_Boite_couture_1000/image2.png', './image/18_02/Martistore_Boite_couture_1000/image3.png', './image/18_02/Martistore_Boite_couture_1000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Compacte, fonctionnelle, essentielle',
        modalDescription: 'Pratique, bien organisée et idéale pour toutes vos réparations ! 👌✨'
    },
    {
        id: 1219,
        name: 'Bol en mélamine 🍽️',
        price: 3700, //1500
        originalPrice: 4500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_bol_en_melamine_1500/image1.png', './image/18_02/Martistore_bol_en_melamine_1500/image2.png', './image/18_02/Martistore_bol_en_melamine_1500/image3.png', './image/18_02/Martistore_bol_en_melamine_1500/image4.png', './image/18_02/Martistore_bol_en_melamine_1500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Solide, pratique, durable',
        modalDescription: 'Léger, résistant et parfait pour un usage quotidien ! ✨👌'
    },
    {
        id: 1220,
        name: 'Chic diffuseur de senteur',
        price: 6500, //3000
        originalPrice: 8500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Chic_Diffuseur_de_senteur_3en1_avec_clazer_3000/image1.png', './image/18_02/Martistore_Chic_Diffuseur_de_senteur_3en1_avec_clazer_3000/image2.png', './image/18_02/Martistore_Chic_Diffuseur_de_senteur_3en1_avec_clazer_3000/image3.png', './image/18_02/Martistore_Chic_Diffuseur_de_senteur_3en1_avec_clazer_3000/image4.png'],
        videoSrc: './video/Chic_diffuseur_de_senteur.mp4',
        stock: "en stock",
        description: 'Design, apaisant, innovant',
        modalDescription: 'Avec laser et jeux de lumière ✨🎆. Ultra stylé et crée une ambiance magique ! 🏡💖'
    },
    {
        id: 1221,
        name: 'Distributeur de boissons en forme de globe',
        price: 18500, //9000
        originalPrice: 19900,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Distributeur_de_boissons_en_forme_de_globe_3,5L_9000/image1.png', './image/18_02/Martistore_Distributeur_de_boissons_en_forme_de_globe_3,5L_9000/image2.png', './image/18_02/Martistore_Distributeur_de_boissons_en_forme_de_globe_3,5L_9000/image3.png', './image/18_02/Martistore_Distributeur_de_boissons_en_forme_de_globe_3,5L_9000/image4.png', './image/18_02/Martistore_Distributeur_de_boissons_en_forme_de_globe_3,5L_9000/image5.png'],
        videoSrc: './video/Distributeur_de_boissons_en_forme_de_globe.mp4',
        stock: "en stock",
        description: 'Unique, fonctionnel, décoratif',
        modalDescription: 'Distributeur de boissons en forme de globe 🌍 de 3,5L. Original, pratique et parfait pour épater vos invités ! 🍹✨ '
    },
    {
        id: 1222,
        name: 'Genouillère',
        price: 3700, //1500
        originalPrice: 5500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Genouillere_1500/image1.png', './image/18_02/Martistore_Genouillere_1500/image2.png', './image/18_02/Martistore_Genouillere_1500/image3.png', './image/18_02/Martistore_Genouillere_1500/image4.png', './image/18_02/Martistore_Genouillere_1500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Confortable, fiable, protectrice',
        modalDescription: 'Genouillère de qualité avec support, 1 pièce 🦵💪. Confortable, robuste et idéale pour le soutien ! 🏋️‍♂️✨'
    },
    {
        id: 1223,
        name: 'Gourde coca cola isotherme',
        price: 3500, //1700
        originalPrice: 4900,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Gourde_coca_cola_isotherme_1700/image1.png', './image/18_02/Martistore_Gourde_coca_cola_isotherme_1700/image2.png', './image/18_02/Martistore_Gourde_coca_cola_isotherme_1700/image3.png', './image/18_02/Martistore_Gourde_coca_cola_isotherme_1700/image4.png', './image/18_02/Martistore_Gourde_coca_cola_isotherme_1700/image5.png'],
        videoSrc: './video/Gourde_coca_cola_isotherme.mp4',
        stock: "en stock",
        description: 'Pratique, efficace, stylée',
        modalDescription: 'Gourde Coca-Cola isotherme 🥤❄️🔥. Parfaite pour garder vos boissons bien chaudes ou bien froides toute la journée ! 🌡️✨ '
    },
    {
        id: 1224,
        name: 'Matelas gonflable',
        price: 15700, //10000
        originalPrice: 19500,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Matelas_gonflable_1place_10000/image1.png', './image/18_02/Martistore_Matelas_gonflable_1place_10000/image2.png', './image/18_02/Martistore_Matelas_gonflable_1place_10000/image3.png', './image/18_02/Martistore_Matelas_gonflable_1place_10000/image4.png', './image/18_02/Martistore_Matelas_gonflable_1place_10000/image5.png'],
        videoSrc: './video/Matelas_gonflable.mp4',
        stock: "en stock",
        description: 'Pratique, confortable, rapide',
        modalDescription: 'Matelas gonflable 1 place avec pompe. Confortable, facile à installer et parfait pour les nuits improvisées ! 🌙✨'
    },
    {
        id: 1225,
        name: 'Mini fer à eau',
        price: 5500, //2500
        originalPrice: 7800,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Mini_fer_a_eau_2500/image1.png', './image/18_02/Martistore_Mini_fer_a_eau_2500/image2.png', './image/18_02/Martistore_Mini_fer_a_eau_2500/image3.png', './image/18_02/Martistore_Mini_fer_a_eau_2500/image4.png', './image/18_02/Martistore_Mini_fer_a_eau_2500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Compact, performant, pratique',
        modalDescription: 'Mini fer à vapeur très efficace et pratique 🌟👚.Idéal pour un repassage rapide et facile où que vous soyez ! ✨'
    },
    {
        id: 1226,
        name: 'Serviette en microfibre',
        price: 3500, //1700
        originalPrice: 4700,
        category: 'tous',
        imgSrcs: ['./image/18_02/Martistore_Serviette_en_microfibre_3500/image1.png', './image/18_02/Martistore_Serviette_en_microfibre_3500/image2.png', './image/18_02/Martistore_Serviette_en_microfibre_3500/image3.png', './image/18_02/Martistore_Serviette_en_microfibre_3500/image4.png', './image/18_02/Martistore_Serviette_en_microfibre_3500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Absorbant, durable, économique',
        modalDescription: 'Serviettes en microfibre absorbantes réutilisables, boîte de 20 pièces 🧻💧. Ultra pratiques, écologiques et parfaites pour toutes les utilisations ! ✨🌿'
    },
    {
        id: 1227,
        name: 'Chargeurs',
        price: 2600, //1200
        originalPrice: 3700,
        category: 'tous',
        imgSrcs: ['./image/18_02/Poupe_chine_chargeurs_1200/image1.png', './image/18_02/Poupe_chine_chargeurs_1200/image2.png', './image/18_02/Poupe_chine_chargeurs_1200/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Rapide, pratique, efficace',
        modalDescription: 'Chargeurs rapides et fiables ⚡🔌. Idéals pour garder vos appareils toujours chargés ! 📱✨ '
    },
    {
        id: 1228,
        name: 'Mixeur 2 en 1',
        price: 6700, //3000
        originalPrice: 8700,
        category: 'tous',
        imgSrcs: ['./image/18_02/Poupe_chine_Mixeur2en1_3000/image1.png', './image/18_02/Poupe_chine_Mixeur2en1_3000/image2.png', './image/18_02/Poupe_chine_Mixeur2en1_3000/image3.png', './image/18_02/Poupe_chine_Mixeur2en1_3000/image4.png', './image/18_02/Poupe_chine_Mixeur2en1_3000/image5.png'],
        videoSrc: './video/Mixeur_2_en_1.mp4',
        stock: "en stock",
        description: 'Polyvalent, puissant, efficace',
        modalDescription: 'Mixeur 2 en 1 🌀🍹. Idéal pour mixer et hacher en un clin d œil, pratique pour toutes vos recettes ! ✨'
    },
    {
        id: 1229,
        name: 'Moulinex 2 en 1',
        price: 18700, //10500
        originalPrice: 19600,
        category: 'tous',
        imgSrcs: ['./image/18_02/Poupe_chine_Moulinex_2_en_1SAVANNA_10500/image1.png', './image/18_02/Poupe_chine_Moulinex_2_en_1SAVANNA_10500/image2.png', './image/18_02/Poupe_chine_Moulinex_2_en_1SAVANNA_10500/image3.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Polyvalent, robuste, pratique',
        modalDescription: 'Moulinex 2 en 1 SAVANNA 🍲🍹. Multifonction, facile à utiliser et idéal pour toutes vos préparations culinaires ! ✨ '
    },
    {
        id: 1230,
        name: 'Thermos à 3 gobolet',
        price: 5600, //2500
        originalPrice: 6700,
        category: 'tous',
        imgSrcs: ['./image/18_02/Ppoupé_chine_Thermos_trois_Gobolet_2500/image1.png', './image/18_02/Ppoupé_chine_Thermos_trois_Gobolet_2500/image2.png', './image/18_02/Ppoupé_chine_Thermos_trois_Gobolet_2500/image3.png', './image/18_02/Ppoupé_chine_Thermos_trois_Gobolet_2500/image4.png', './image/18_02/Ppoupé_chine_Thermos_trois_Gobolet_2500/image5.png'],
        videoSrc: './video/Thermos_à_3_gobolet1.mp4',
        stock: "en stock",
        description: 'Pratique, Résistant, portable',
        modalDescription: 'Thermos numérique 🧃, pratique et moderne, permettant de contrôler la température de vos boissons avec précision grâce à son affichage numérique'
    },


    //////////////////19_02

    {
        id: 1231,
        name: 'Diffuseur de senteurs en cristal + veilleuse',
        price: 5400, //2500
        originalPrice: 6200,
        category: 'decoration',
        imgSrcs: ['./image/19_02/Martistore_Diffuseur_de_senteurs_de_luxe_en_cristal_avec_veilleuse_2500/image1.png', './image/19_02/Martistore_Diffuseur_de_senteurs_de_luxe_en_cristal_avec_veilleuse_2500/image2.png', './image/19_02/Martistore_Diffuseur_de_senteurs_de_luxe_en_cristal_avec_veilleuse_2500/image3.png', './image/19_02/Martistore_Diffuseur_de_senteurs_de_luxe_en_cristal_avec_veilleuse_2500/image4.png', './image/19_02/Martistore_Diffuseur_de_senteurs_de_luxe_en_cristal_avec_veilleuse_2500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Raffiné, apaisant, lumineux ✅',
        modalDescription: 'Diffuseur de senteurs de luxe en cristal 💎🌿 Avec veilleuse multicolore 🌈✨, il crée une ambiance élégante et apaisante ! 🏡💖'
    },
    {
        id: 1232,
        name: 'Lot de cintres en acier',
        price: 4500, //1500
        originalPrice: 5300,
        category: 'tous',
        imgSrcs: ['./image/19_02/Martistore_Lot_de_10_cintres_en_acier_1500/image1.png', './image/19_02/Martistore_Lot_de_10_cintres_en_acier_1500/image2.png', './image/19_02/Martistore_Lot_de_10_cintres_en_acier_1500/image3.png', './image/19_02/Martistore_Lot_de_10_cintres_en_acier_1500/image4.png', './image/19_02/Martistore_Lot_de_10_cintres_en_acier_1500/image5.png'],
        videoSrc: './video/Lot_de_cintres_en_acier.mp4',
        stock: "en stock",
        description: 'Solide, pratique, antidérapant ✅',
        modalDescription: 'Lot de 10 cintres en acier 🏡👕 avec creux antidérapants pour un maintien parfait de vos vêtements ! ✨👌'
    },
    {
        id: 1233,
        name: 'Protège Brosse à dent et pâte',
        price: 2800, //1300
        originalPrice: 3500,
        category: 'tous',
        imgSrcs: ['./image/19_02/Martistore_Protège_Brosse_à_dent_et_pâte_1300/image1.png', './image/19_02/Martistore_Protège_Brosse_à_dent_et_pâte_1300/image2.png', './image/19_02/Martistore_Protège_Brosse_à_dent_et_pâte_1300/image3.png', './image/19_02/Martistore_Protège_Brosse_à_dent_et_pâte_1300/image4.png', './image/19_02/Martistore_Protège_Brosse_à_dent_et_pâte_1300/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Pratique, hygiénique, compact ✅',
        modalDescription: 'Protège brosse à dents et pâte 🪥🧴 Pratique et hygiénique, parfait pour garder votre brosse à dents propre ! ✨🚶‍♂️'
    },
    {
        id: 1234,
        name: 'Racloir miroirs, vitres de voiture',
        price: 850, //400
        originalPrice: 1200,
        category: 'tous',
        imgSrcs: ['./image/19_02/Martistore_Racloir_pour_nettoyer_vos_miroirs_vitres_de_voiture_3500/image1.png', './image/19_02/Martistore_Racloir_pour_nettoyer_vos_miroirs_vitres_de_voiture_3500/image2.png', './image/19_02/Martistore_Racloir_pour_nettoyer_vos_miroirs_vitres_de_voiture_3500/image3.png', './image/19_02/Martistore_Racloir_pour_nettoyer_vos_miroirs_vitres_de_voiture_3500/image4.png', './image/19_02/Martistore_Racloir_pour_nettoyer_vos_miroirs_vitres_de_voiture_3500/image5.png'],
        videoSrc: './video/Racloir_miroirs_vitres_de_voiture.mp4',
        stock: "en stock",
        description: 'Polyvalent, efficace, pratique ✅',
        modalDescription: 'Racloir multi-usage 🧼🚗. Idéal pour nettoyer miroirs, vitres de voiture, fenêtres, canapés et meubles en bois ou métal ! ✨'
    },
    {
        id: 1235,
        name: 'Verre acrylique',
        price: 6200, //3000
        originalPrice: 7500,
        category: 'tous',
        imgSrcs: ['./image/19_02/Martistore_Verre_à_acrylique_6pcs_3000/image1.png', './image/19_02/Martistore_Verre_à_acrylique_6pcs_3000/image2.png', './image/19_02/Martistore_Verre_à_acrylique_6pcs_3000/image3.png', './image/19_02/Martistore_Verre_à_acrylique_6pcs_3000/image4.png', './image/19_02/Martistore_Verre_à_acrylique_6pcs_3000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Résistant, pratique, élégant ✅',
        modalDescription: 'Verre en acrylique, lot de 6 🍹✨ Légers, résistants et parfaits pour toutes les occasions ! 🎉👌'
    },
    {
        id: 1236,
        name: 'Verre en forme de boule',
        price: 9200, //4500
        originalPrice: 10500,
        category: 'tous',
        imgSrcs: ['./image/19_02/Martistore_Verre_en_forme_de_boule_6pcs_4500/image1.png', './image/19_02/Martistore_Verre_en_forme_de_boule_6pcs_4500/image2.png', './image/19_02/Martistore_Verre_en_forme_de_boule_6pcs_4500/image3.png', './image/19_02/Martistore_Verre_en_forme_de_boule_6pcs_4500/image4.png', './image/19_02/Martistore_Verre_en_forme_de_boule_6pcs_4500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Luxe, unique, raffiné ✅',
        modalDescription: 'Verre en forme de boule en or, lot de 6 🏅✨ Chic, élégant et parfait pour ajouter du style à vos boissons ! 🍸🌟'
    },
    {
        id: 1237,
        name: 'Tasse',
        price: 3500, //1700
        originalPrice: 5700,
        category: 'tous',
        imgSrcs: ['./image/19_02/Poupe_chine_Tasse_1700/image1.png', './image/19_02/Poupe_chine_Tasse_1700/image2.png', './image/19_02/Poupe_chine_Tasse_1700/image3.png', './image/19_02/Poupe_chine_Tasse_1700/image4.png', './image/19_02/Poupe_chine_Tasse_1700/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Isolante, pratique, durable ✅',
        modalDescription: 'Tasse qui garde le chaud et froid 🍵❄️🔥 Idéale pour maintenir la température de vos boissons toute la journée ! ✨☕'
    },
    /*{
        id: 1238,
        name: 'Petite valise',
        price: 8000, //3700
        originalPrice: 9700,
        category: 'tous',
        imgSrcs: ['./image/19_02/Poupee_chine_Petit_valide_3700/image1.png', './image/19_02/Poupee_chine_Petit_valide_3700/image2.png', './image/19_02/Poupee_chine_Petit_valide_3700/image3.png', './image/19_02/Poupee_chine_Petit_valide_3700/image4.png', './image/19_02/Poupee_chine_Petit_valide_3700/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: ' Pratique, maniable, stylée ✅',
        modalDescription: 'Petite valise 🧳 Compacte, légère et parfaite pour les escapades de courte durée ! ✨🌍'
    },*/




    /////////////07_03
    {
        id: 1239,
        name: 'Armoire de rangement 3 battants',
        price: 38500, //26500
        originalPrice: 51700,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_Armoire_de_rangement_3_battants_26500/image1.png', './image/07_03/Akuesley_Armoire_de_rangement_3_battants_26500/image2.png', './image/07_03/Akuesley_Armoire_de_rangement_3_battants_26500/image3.png', './image/07_03/Akuesley_Armoire_de_rangement_3_battants_26500/image4.png', './image/07_03/Akuesley_Armoire_de_rangement_3_battants_26500/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Spacieuse, robuste, élégante ✅',
        modalDescription: 'Une armoire idéale pour organiser vos affaires avec style et efficacité ! 🏡✨'
    },
    {
        id: 1240,
        name: 'Gourde ice cream',
        price: 4500, //2000
        originalPrice: 5800,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_Gourde_ice_cream_2000/image1.png', './image/07_03/Akuesley_Gourde_ice_cream_2000/image2.png', './image/07_03/Akuesley_Gourde_ice_cream_2000/image3.png', './image/07_03/Akuesley_Gourde_ice_cream_2000/image4.png', './image/07_03/Akuesley_Gourde_ice_cream_2000/image5.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Colorée, pratique, légère ✅',
        modalDescription: 'Restez hydraté avec une gourde fun et stylée ! Parfaite pour toutes vos sorties. 💦🎨'
    },
    {
        id: 1241,
        name: 'Micro cravate multi-fonction',
        price: 8500, //3500
        originalPrice: 5800,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_micro_cravate_multi-fonction_3_bouts_3500/image1.png', './image/07_03/Akuesley_micro_cravate_multi-fonction_3_bouts_3500/image2.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Compact, performant, polyvalent ✅',
        modalDescription: 'Capturez un son clair et net partout où vous allez ! Idéal pour vidéos et conférences. 🎤🎬'
    },
    {
        id: 1242,
        name: 'Thermos coffee',
        price: 4700, //2300
        originalPrice: 5800,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image1.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image2.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image3.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image4.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image5.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image6.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image7.png', './image/07_03/Akuesley_thermos_coffee_des_caviars_2300/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Isolant, moderne, durable ✅',
        modalDescription: 'Gardez vos boissons chaudes ou froides toute la journée ! Un design élégant et pratique. ☕❄️🔥'
    },
    {
        id: 1243,
        name: 'Thermos coffee haute Qualité',
        price: 5700, //2700
        originalPrice: 7800,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_thermos_haute_qualitée_2700/image1.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image2.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image3.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image4.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image5.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image6.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image7.png', './image/07_03/Akuesley_thermos_haute_qualitée_2700/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: ' Élégant, efficace, isolant ✅',
        modalDescription: 'Un thermos premium pour savourer vos boissons à la température idéale ! 🔥❄️'
    },
    {
        id: 1244,
        name: 'Verre Smothie',
        price: 2500, //1000
        originalPrice: 3800,
        category: 'tous',
        imgSrcs: ['./image/07_03/Akuesley_verre_smothie_1000/image1.png', './image/07_03/Akuesley_verre_smothie_1000/image2.png', './image/07_03/Akuesley_verre_smothie_1000/image3.png', './image/07_03/Akuesley_verre_smothie_1000/image4.png', './image/07_03/Akuesley_verre_smothie_1000/image5.png', './image/07_03/Akuesley_verre_smothie_1000/image6.png', './image/07_03/Akuesley_verre_smothie_1000/image7.png', './image/07_03/Akuesley_verre_smothie_1000/image8.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: ' Transparent, chic, ergonomique ✅',
        modalDescription: ' Savourez vos smoothies et boissons fraîches avec style ! Léger et facile à transporter. 🥤✨'
    },
    {
        id: 1245,
        name: 'Bouteuille d eau en acier 710 ml',
        price: 7300, //3500
        originalPrice: 8900,
        category: 'tous',
        imgSrcs: ['./image/07_03/Martistore_bouteuille_deau_en_acier_710ml_3500/image1.png', './image/07_03/Martistore_bouteuille_deau_en_acier_710ml_3500/image2.png', './image/07_03/Martistore_bouteuille_deau_en_acier_710ml_3500/image3.png', './image/07_03/Martistore_bouteuille_deau_en_acier_710ml_3500/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Robuste, étanche, écologique ✅',
        modalDescription: ' Une bouteille en acier inoxydable pour garder votre eau fraîche toute la journée ! 💧♻️'
    },
    {
        id: 1246,
        name: 'Grand extracteur de jus',
        price: 42000, //35000
        originalPrice: 45000,
        category: 'tous',
        imgSrcs: ['./image/07_03/Martistore_géante_extracteur_de_jus_35000/image1.png', './image/07_03/Martistore_géante_extracteur_de_jus_35000/image2.png', './image/07_03/Martistore_géante_extracteur_de_jus_35000/image3.png', './image/07_03/Martistore_géante_extracteur_de_jus_35000/image4.png', './image/07_03/Martistore_géante_extracteur_de_jus_35000/image5.png'],
        videoSrc: './video/Grand_extracteur_de_jus.mp4',
        stock: "en stock",
        description: 'Puissant, rapide, pratique ✅',
        modalDescription: 'Préparez des jus frais et naturels en un instant ! Facile à utiliser et à nettoyer. 🍊🥕'
    },
    {
        id: 1247,
        name: 'Lumière led 24 pouces',
        price: 27000, //20000
        originalPrice: 32000,
        category: 'tous',
        imgSrcs: ['./image/07_03/Martistore_grande_lumière_led_24pouces_20000/image1.png', './image/07_03/Martistore_grande_lumière_led_24pouces_20000/image2.png', './image/07_03/Martistore_grande_lumière_led_24pouces_20000/image3.png', './image/07_03/Martistore_grande_lumière_led_24pouces_20000/image4.png'],
        videoSrc: './video/link.mp4',
        stock: "en stock",
        description: 'Lumineux, réglable, puissant ✅',
        modalDescription: ' Une lumière LED idéale pour un éclairage optimal ! Parfait pour le maquillage ou les vidéos. 💡📸'
    },
    {
        id: 1248,
        name: 'Machine à popcorn',
        price: 17000, //13000
        originalPrice: 19000,
        category: 'tous',
        imgSrcs: ['./image/07_03/Martistore_machine_a_popcorn_13000/image1.png', './image/07_03/Martistore_machine_a_popcorn_13000/image2.png', './image/07_03/Martistore_machine_a_popcorn_13000/image3.png', './image/07_03/Martistore_machine_a_popcorn_13000/image4.png', './image/07_03/Martistore_machine_a_popcorn_13000/image5.png', './image/07_03/Martistore_machine_a_popcorn_13000/image6.png'],
        videoSrc: './video/pop_corn_machine.mp4',
        stock: "en stock",
        description: 'Rapide, ludique, compacte ✅',
        modalDescription: 'Faites du popcorn maison en quelques minutes ! Idéale pour les soirées ciné. 🍿🎬'
    },
];

export default products;
