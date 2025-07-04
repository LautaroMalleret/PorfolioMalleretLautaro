//informacion de los proyectos a mostrar
const projects =
[
  {
    "id": "project7",
    "title": "Dashboard tienda web",
    "subtitle": "Desarrollo de una herramienta interna para facilitar la gestión de productos.",
    "tech": "React, TypeScript, Node.js, MongoDB Atlas.",
    "images": [
      "/PorfolioMalleretLautaro/img/panel/1.png",
      "/PorfolioMalleretLautaro/img/panel/2.png",
      "/PorfolioMalleretLautaro/img/panel/3.png",
      "/PorfolioMalleretLautaro/img/panel/4.png"
    ],
    "description": "Este panel administrativo fue desarrollado como parte del sistema completo de catálogo online de indumentaria. Permite al administrador gestionar los productos del catálogo en tiempo real: agregar, editar y eliminar productos, subir imágenes y asociarlas a cada producto, filtrar productos por tipo, prenda o nombre, controlar stock, precio, talles y variantes. El acceso está protegido mediante login con autenticación por cuenta de Google. La experiencia está pensada para ser clara y directa, sin necesidad de conocimientos técnicos para su uso.",
    "github": "https://github.com/LautaroMalleret/dashboard-ales"
  },
  {
    "id": "project6",
    "title": "Catálogo online de tienda de indumentaria",
    "subtitle": "Web pública simple, accesible y gratuita para un emprendimiento local de indumentaria deportiva.",
    "tech": "React con Vite, Typescript, Tailwind CSS.",
    "images": [
      "/PorfolioMalleretLautaro/img/tiendaWeb/1.png",
      "/PorfolioMalleretLautaro/img/tiendaWeb/2.png",
      "/PorfolioMalleretLautaro/img/tiendaWeb/3.png",
      "/PorfolioMalleretLautaro/img/tiendaWeb/4.png",
      "/PorfolioMalleretLautaro/img/tiendaWeb/5.png"
    ],
    "description": "Este proyecto fue desarrollado a pedido de un emprendimiento local de indumentaria deportiva, con el objetivo de contar con una web pública simple, accesible y totalmente gratuita donde los clientes puedan navegar por los productos disponibles, filtrarlos por tipo y nombre, ver imágenes, talles y descripciones, y generar un pedido directamente por WhatsApp, sin necesidad de registro. El diseño priorizó la experiencia desde dispositivos móviles, permitiendo una navegación fluida, una visualización clara de los productos, y un flujo de compra sencillo para el usuario final.",
    "github": "https://github.com/LautaroMalleret/LosAles",
    "web": "https://losales.netlify.app"
  },
  {
    "id": "project",
    "title": "API de canchas de futbol de Buenos Aires",
    "subtitle": "Proyecto enfocado en el diseño y ejecución de una API-REST.",
    "tech": "Java, Springboot, Git, SQL, Maven",
    "images": [
      "/PorfolioMalleretLautaro/img/api-canchasba/canchasba-api (1).png",
      "/PorfolioMalleretLautaro/img/api-canchasba/canchasba-api (2).png",
      "/PorfolioMalleretLautaro/img/api-canchasba/canchasba-api (3).png",
      "/PorfolioMalleretLautaro/img/api-canchasba/canchasba-api (4).png",
      "/PorfolioMalleretLautaro/img/api-canchasba/canchasba-api.png"
    ],
    "description": "Desarrollé una API REST para un portal de gestión de canchas de fútbol en la provincia de Buenos Aires. La API permite consultar, agregar, modificar y eliminar información sobre canchas, incluyendo detalles como el nombre, dirección, zona, tipo de cancha, cantidad de canchas, teléfono de contacto y calificación de usuarios. Implementé endpoints para filtrar canchas por diversos parámetros, como nombre, zona y tamaño. Además, la API gestiona la autenticación y las variables de configuración a través de entorno, y está diseñada para ser fácilmente consumida por aplicaciones web y móviles.",
    "github": "https://github.com/LautaroMalleret/canchasba-api",
    "docs": "https://canchasba-api.onrender.com/swagger-ui/index.html"
  },
  {
    "id": "project4",
    "title": "CanchasBA: Web para la búsqueda de canchas de fútbol",
    "subtitle": "Portal web para la búsqueda y gestión de canchas de fútbol en la provincia de Buenos Aires.",
    "tech": "Angular 19, Git, Typescript",
    "images": [
      "/PorfolioMalleretLautaro/img/canchasba-web/canchasba.web.png",
      "/PorfolioMalleretLautaro/img/canchasba-web/canchasba.web1.png",
      "/PorfolioMalleretLautaro/img/canchasba-web/canchasba.web2.png",
      "/PorfolioMalleretLautaro/img/canchasba-web/canchasba.web3.png"
    ],
    "description": "Portal web para la búsqueda y gestión de canchas de fútbol en la provincia de Buenos Aires, desarrollado en Angular. La aplicación permite a los usuarios buscar canchas filtrando por nombre, ubicación, tipo de suelo y tamaño, mostrando los resultados en una interfaz dinámica y responsiva. Además, integra una API REST creada en Spring Boot para gestionar los datos de las canchas, ofreciendo una experiencia eficiente y en tiempo real.",
    "github": "https://github.com/LautaroMalleret/canchaba-web",
    "web": "https://LautaroMalleret.github.io/canchaba-web"
  },
  {
    "id": "project1",
    "title": "Wordle de nombres - juego de palabras",
    "subtitle": "Separación de interfaz gráfica y lógica para un diseño modular y mantenible.",
    "tech": "Java, UML, Git",
    "images": [
      "/PorfolioMalleretLautaro/img/Wordle/Wordle-game (1).png",
      "/PorfolioMalleretLautaro/img/Wordle/Wordle-game (2).png",
      "/PorfolioMalleretLautaro/img/Wordle/Wordle-game (3).png",
      "/PorfolioMalleretLautaro/img/Wordle/Wordle-game (4).png",
      "/PorfolioMalleretLautaro/img/Wordle/Wordle.png"
    ],
    "description": "Durante mi carrera en la Universidad General Sarmiento, tuve la oportunidad de trabajar en un proyecto muy interesante para la aprobación de la materia de programación 2. El proyecto consistía en crear un videojuego en Java del tipo Wordle, en el cual el usuario debía adivinar un nombre oculto de 5 letras. El juego marcaba con distintos colores las letras que aparecían o no en el nombre buscado. El objetivo del trabajo era separar la interfaz de usuario de la lógica del proyecto. Trabajé en conjunto con un compañero para crear este proyecto en Java, y los nombres a adivinar eran aleatorios. Fue una experiencia valiosa ya que me permitió aplicar mis habilidades técnicas y trabajar en equipo para crear un juego desafiante y emocionante.",
    "github": "https://gitlab.com/AleAima/tpwordle"
  },
  {
    "id": "project2",
    "title": "Simulador de álbum de figuritas",
    "subtitle": "Software con múltiples hilos para optimizar el cálculo de probabilidades.",
    "tech": "Java, UML, Git",
    "images": [
      "/PorfolioMalleretLautaro/img/Album/simulaciones (1).png",
      "/PorfolioMalleretLautaro/img/Album/simulaciones (2).png",
      "/PorfolioMalleretLautaro/img/Album/simulaciones (3).png",
      "/PorfolioMalleretLautaro/img/Album/simulaciones (4).png",
      "/PorfolioMalleretLautaro/img/Album/simulaciones (5).png"
    ],
    "description": "Proyecto para la aprobación de la materia de Programación 3. El proyecto consistía en crear un software de escritorio en Java que simula la experiencia de rellenar un álbum de figuritas. El programa generaba figuritas aleatorias en paquetes y calculaba, luego de miles o millones de ejecuciones, el promedio de paquetes que el usuario debería comprar para completar el álbum. El trabajo se centró en el proceso en distintos hilos para optimizar la ejecución del programa, mientras se mantenía la interfaz de usuario separada de la lógica de trabajo.",
    "github": "https://gitlab.com/LautaroMalleret/simulacionalbummundial"
  },
  {
    "id": "project3",
    "title": "Barbarianna - Juego 2D plataforma",
    "subtitle": "Videojuego 2D en Java aplicando POO para gestionar enemigos dinámicos.",
    "tech": "Java, UML, Git",
    "images": [
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna.png",
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna-game (1).png",
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna-game (2).png",
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna-game (3).png",
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna-game (4).png",
      "/PorfolioMalleretLautaro/img/Barbarianna/Barbarianna-game (5).png"
    ],
    "description": "Proyecto de programación que consistía en crear un videojuego en lenguaje Java, que se centraba en un personaje principal controlado por el usuario que subía pisos y destruía enemigos con poderes. El proyecto me permitió trabajar con programación orientada a objetos y clases, lo que me permitió controlar automáticamente la generación de enemigos en el mapa y su comportamiento. Este proyecto fue una experiencia valiosa en mi carrera, ya que me enseñó a trabajar en equipo y me permitió aplicar habilidades técnicas avanzadas de programación para crear un videojuego divertido y emocionante en una plataforma 2D.",
    "github": "https://gitlab.com/LautaroMalleret/TP-Programacion1"
  },
  {
    "id": "project5",
    "title": "Wordle ARM - Assembler",
    "subtitle": "Desarrollo en assembler ARM a bajo nivel con manejo de memoria, archivos e interrupciones.",
    "tech": "Assembler ARM",
    "images": [
      "/PorfolioMalleretLautaro/img/Arm - Wordle/Texto.png",
      "/PorfolioMalleretLautaro/img/Arm - Wordle/ejemplo.png",
      "/PorfolioMalleretLautaro/img/Arm - Wordle/inicio.png"
    ],
    "description": "Este proyecto lo diseñé y fue utilizado como trabajo práctico integrador por todas las comisiones de la materia 'Organización del computador' de la Universidad Nacional de General Sarmiento. Consiste en desarrollar el juego Wordle utilizando ARM en ensamblador, el cual debía ejecutarse en terminal a través de una conexión remota a una Raspberry Pi. A través de este proyecto, los alumnos pusieron en práctica conceptos de arquitectura ARM, como el manejo de memoria, uso de subrutinas e interrupciones, así como la manipulación de archivos y colores en terminal. La evaluación consideraba estos aspectos junto con el funcionamiento completo del juego, incluyendo un informe detallado con pseudocódigo y dificultades encontradas."
  },
    {
    "id": "project8",
    "title": "Mantenimiento de pc",
    "subtitle": "Mantenimiento y reparación de computadoras de escritorio y portátiles.",
    "tech": "Software de diagnóstico, limpieza, actualización.",
    "images": [
      "/PorfolioMalleretLautaro/img/tecnico/pc (1).jpg",
      "/PorfolioMalleretLautaro/img/tecnico/pc (2).jpg",
      "/PorfolioMalleretLautaro/img/tecnico/pc (3).jpg",
      "/PorfolioMalleretLautaro/img/tecnico/pc (4).jpg",
      "/PorfolioMalleretLautaro/img/tecnico/pc (5).jpg",
    ],
    "description": "Mantenimiento y reparación de computadoras de escritorio y portátiles. Diagnóstico de fallas, limpieza, actualización de hardware y software, instalación de sistemas operativos y programas, optimización del rendimiento y seguridad. Experiencia en la resolución de problemas técnicos y atención al cliente.",
  },
   {
    "id": "project9",
    "title": "Clusters - graficador de clusters en mapas",
    "subtitle": "aplicacion de algoritmos de grafos",
    "tech": "Java, UML, Git, JMapViewer",
    "images": [
      "/PorfolioMalleretLautaro/img/mapas/mapas.png",
      "/PorfolioMalleretLautaro/img/mapas/mapas (1).png",
      "/PorfolioMalleretLautaro/img/mapas/mapas (2).png",
      "/PorfolioMalleretLautaro/img/mapas/mapas (3).png",
      "/PorfolioMalleretLautaro/img/mapas/mapas (4).png",
    ],
    "description": "Cursando la materia de Programación 3, realice el siguiente proyecto que consistió en crear un software de escritorio en Java que permitía al usuario ingresar puntos y luego graficarlos en un mapa separandolos en grupos dependiendo la distancia entre los mismos. Se usaba un algoritmo de grafos de nodos para crear un árbol generador mínimo con el algoritmo de Kruskal, para luego dividirlo y crear clusters de puntos cercanos. El proyecto se centró en trabajar con grafos de nodos y en la aplicación de algoritmos para resolver problemas complejos. Dicho proyecto me permitió aprender a cómo aplicar algoritmos para resolver problemas de manera efectiva en la programación.",
  }
]


export default projects;