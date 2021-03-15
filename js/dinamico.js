const objects = [
    {
        image: "<img src='./img/foto1.jpg'>",
        description: "Grupo Inmobiliario Latorre <br> Empresa conformada desde hace más de 15 años. <br> Asesorando a nuestros clientes para que hagan <br> el mejor negocio de su vida ",
    },
    {
        image: "<img src='./img/foto2.jpg'>",
        description: "Venta de inmuebles <br> brindamos la asesoria que usted necesita <br> Negociación segura y eficaz para propietarios y compradores",
    },
    {
        image: "<img src='./img/foto3.jpg'>",
        description: "De acuerdo a sus necesidades y requerimientos <br> planteamos la mejor estrategia para que su inversion sea rentable",
    },
    {
        image: "<img src='./img/foto4.jpg'>",
        description: "Amplio catalogo, en casas, apartamentos, <br> bodegas, fincas, locales, garajes, <br> solo busque por la dirección en <br> Google Maps, y puede ver la ubicacion del predio",
    },
    {
        image: "<img src='./img/foto5.jpg'>",
        description: "Amplio catalogo, en casas, apartamentos, bodegas, fincas, locales, garajes, <br> solo busque por la dirección en Google Maps, y puede ver la ubicacion del predio",
    },
    {
        image: "<img src='./img/foto6.jpg'>",
        description: "Busque segun la zona en la que quiera hacer la inversion, encuentre y agendamos una cita para hacer la visita, y enseñarte el proceso de alquiler o compra <br>  ",
    },
    {
        image: "<img src='./img/gil.jpg'>",
        description: "",
    },
    // {
    //     image: "<img src='./img/imagenDemo.jpg'>",
    //     description: "Amplio catalogo, en casas, apartamentos, bodegas, fincas, locales, garajes, <br> solo busque por la dirección en Google Maps, y puede ver la ubicacion del predio",
    // },

];


const message = document.getElementById("section_dinamico");

class Batman {
    constructor(image, description) {
        this.image = `<div>${image}</div>`;
        this.description = `<h1>${description}</h1>`;
    }
}

let counter = 0;

function timex() {
    if (counter != 0) {
        setTimeout(() => {
            send();
        }, 4000)
    } else {
        setTimeout(() => {
            send();
        }, 0)
    }
}

function send() {
    if (counter < objects.length) {
        const robin = new Batman(`${objects[counter].image}`,
            `${objects[counter].description}`)

        message.innerHTML = `
        ${robin.image}
        ${robin.description}
		`;

        counter++
        timex();
        console.log(robin, counter)
    } else {
        counter = 0;
        // console.log(counter)
        timex();
    }
}
send();