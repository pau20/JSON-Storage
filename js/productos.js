let productos = [
    // soquetes en stock
    {id: 1, modelo: "Soquetes", nombre: "Bzz", precio: 300, descrip: "Soquetes de Buzz Lightyear", img: "/img/socks/bzz.JPG", cantidad: 1 },
    {id: 2, modelo: "Soquetes", nombre: "Faces", precio: 300, descrip: "Soquetes de Happy Faces", img: "/img/socks/caritaN.JPG", cantidad: 1 },
    {id: 3, modelo: "Soquetes", nombre: "Poh", precio: 300, descrip: "Soquetes de Winnie de Poh", img: "/img/socks/poh.JPG", cantidad: 1 },
    {id: 4, modelo: "Soquetes", nombre: "Ricky", precio: 300, descrip: "Soquetes de Ricardo Ford", img: "/img/socks/rickky.JPG", cantidad: 1},
    // medias caña en stock
    {id: 5, modelo: "Media Caña", nombre: "Bob", precio: 380, descrip: "Medias de media caña de Bob Esponja", img: "/img/media/bob.jpg", cantidad: 1 },
    {id: 6, modelo: "Media Caña", nombre: "Patrik", precio: 380, descrip: "Medias de media caña de Patricio Estrella", img: "/img/media/patricio.jpg", cantidad: 1},
    {id: 7, modelo: "Media Caña", nombre: "Faces1", precio: 380, descrip: "Medias negras de media caña de Happy Faces", img: "/img/media/caraN.jpg", cantidad: 1 },
    {id: 8, modelo: "Media Caña", nombre: "Faces2", precio: 380, descrip: "Medias blancas de media caña de Happy Faces", img: "/img/media/caraB.jpg", cantidad: 1 },
    {id: 9, modelo: "Media Caña", nombre: "Buterflie", precio: 380, descrip: "Medias blancas de media caña de mariposas violetas", img: "/img/media/maripo.jpg", cantidad: 1 },
    {id: 10, modelo: "Media Caña", nombre: "Drew", precio: 380, descrip: "Medias blancas de media caña de caritas Drew", img: "/img/media/drew.jpg", cantidad: 1 },
    {id: 11, modelo: "Media Caña", nombre: "Nubes", precio: 380, descrip: "Medias rosadas de media caña de nubes", img: "/img/media/nubes.jpg", cantidad: 1 },
    {id: 12, modelo: "Media Caña", nombre: "Pizzas", precio: 380, descrip: "Medias negras de media caña de pizzas", img: "/img/media/pizza.jpg", cantidad: 1 },
    {id: 13, modelo: "Media Caña", nombre: "HP", precio: 380, descrip: "Medias blancas de media caña de Harry Potter", img: "/img/media/hp.jpg", cantidad: 1 },
    {id: 14, modelo: "Media Caña", nombre: "Bees", precio: 380, descrip: "Medias amarillas de media caña de abejas", img: "/img/media/bee.jpg", cantidad: 1 },
    {id: 15, modelo: "Media Caña", nombre: "Momia", precio: 380, descrip: "Medias a rayas de media caña de momia", img: "/img/media/momia.jpg", cantidad: 1 },
    // medias nike/jourdan en stock
    {id: 16, modelo: "Fila", nombre: "FilaB", precio: 380, descrip: "Medias blancas Fila", img: "/img/nike/filaB.jpg", cantidad: 1 },
    {id: 17, modelo: "Fila", nombre: "FilaN", precio: 380, descrip: "Medias negras Fila", img: "/img/nike/filaN.jpg", cantidad: 1 },
    {id: 18, modelo: "Jourdan", nombre: "Jourdan", precio: 380, descrip: "Medias blancas Jourdan", img: "/img/nike/jourdan.jpg", cantidad: 1 },
    {id: 19, modelo: "Nike", nombre: "NikeRojo", precio: 380, descrip: "Medias rojas Nike", img: "/img/nike/nikeR.jpg", cantidad: 1},
    {id: 20, modelo: "Nike", nombre: "NikeRosa", precio: 380, descrip: "Medias rosadas Nike", img: "/img/nike/nikeRosa.jpg", cantidad: 1},
    {id: 21, modelo: "Nike", nombre: "NikeVioleta", precio: 380, descrip: "Medias violetas Nike", img: "/img/nike/nikeV.jpg", cantidad: 1},
    {id: 22, modelo: "Nike", nombre: "NikeAmarilla", precio: 380, descrip: "Medias amarillas Nike", img: "/img/nike/nikeA.jpg", cantidad: 1},
    // medias tenis en stock
    {id: 23, modelo: "Tenis", nombre: "FaceB", precio: 400, descrip: "Medias tenis blancas de carita solitaria", img:"/img/tenis/caritaB.jpg", cantidad: 1},
    {id: 24, modelo: "Tenis", nombre: "FaceN", precio: 400, descrip: "Medias tenis negras de carita solitaria", img:"/img/tenis/caritaN.jpg", cantidad: 1},
    {id: 25, modelo: "Tenis", nombre: "Marciano", precio: 400, descrip: "Medias tenis blancas de marciano", img:"/img/tenis/marciano.jpg", cantidad: 1},
    {id: 26, modelo: "Tenis", nombre: "BlackHeart", precio: 400, descrip: "Medias tenis blancas de corazon negro", img:"/img/tenis/cora.jpg", cantidad: 1},
    {id: 27, modelo: "Tenis", nombre: "RedHeart", precio: 400, descrip: "Medias tenis negras de corazon rojo", img:"/img/tenis/coraR.jpg", cantidad: 1},
    {id: 28, modelo: "Tenis", nombre: "MariposaRosa", precio: 400, descrip: "Medias tenis blancas de mariposa rosa", img:"/img/tenis/maripoR.jpg", cantidad: 1},
    {id: 29, modelo: "Tenis", nombre: "MariposaAzul", precio: 400, descrip: "Medias tenis blancas de mariposa azul", img:"/img/tenis/maripoV.jpg", cantidad: 1},
    {id: 30, modelo: "Tenis", nombre: "Burbuja", precio: 400, descrip: "Medias tenis blancas de Burbuja", img:"/img/tenis/burbuja.jpg", cantidad: 1},
    {id: 31, modelo: "Tenis", nombre: "Cactus", precio: 400, descrip: "Medias tenis blancas de Cactus", img:"/img/tenis/cactus.jpg", cantidad: 1},
    // medias retro en stock
    {id: 32, modelo: "Retro", nombre: "TenisRosa", precio: 380, descrip: "Medias retro rosadas", img:"/img/retro/retroR.jpg", cantidad: 1},
    {id: 33, modelo: "Retro", nombre: "TenisVerde", precio: 380, descrip: "Medias retro verde oscuro", img:"/img/retro/retroV.jpg", cantidad: 1},

    
]
