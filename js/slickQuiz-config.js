// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Bienvendio a tu examen de ingreso!!",
        "main":    "<p>Crees que eres lo suficientemente listo como para formar parte de nuestro equipo de trabajo!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Diamond",
        "level2":  "Platinum",
        "level3":  "Gold",
        "level4":  "Silver",
        "level5":  "Bronze..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "¿Que significa PHP?",
            "a": [
                {"option": "Personal Hypertext Processor","correct": false},
                {"option": "Private Home Page","correct": false},
                {"option": "PHP: Hypertext processor","correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "¿El codigo php esta encapsulado en delimitadores, cuales son?",
            "a": [
                {"option": "<&>...</&>","correct": false},
                {"option": "<?php...?>","correct": true},
                {"option": "<script></script>","correct": false},
                {"option": "<?php?></?>", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },/*
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "¿Como imprimes \"Hola Mundo\" en PHP?.",
            "a": [
                {"option": "echo \"Hello World\";",           "correct": true},
                {"option": " \"Hello World\";",                  "correct": false},
                {"option": " Document.Write(\"Hello World\");",  "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 4
            "q": "¿Todas las variables de php empiezan con cual simbolo?",
            "a": [
                {"option": "!",    "correct": false},
                {"option": "&",     "correct": false},
                {"option": "$",      "correct": true},
                {"option": "_",   "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 5
            "q": "¿Cual es la manera correcta de terminar un enunciado en PHP?",
            "a": [
                {"option": "Nueva linea",    "correct": false},
                {"option": "</php>",     "correct": false},
                {"option": ".",     "correct": false},
                {"option": ";",     "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Como recuperas infromación de un formulario enviado con metodo GET?",
            "a": [
                {"option": "$_GET[];",    "correct": true},
                {"option": "Request.QueryString;",     "correct": false},
                {"option": "Request.Form;",     "correct": false},
                {"option": "$_SERVER['GET']",     "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cuando usas el metodo POST, las variables son visibles desde la URL?",
            "a": [
                {"option": "Verdadero",    "correct": false},
                {"option": "Falso",     "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Puedes usar comillas simples y comillas dobles en PHP?",
            "a": [
                {"option": "Verdadero",    "correct": true},
                {"option": "Falso",     "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es la forma correcta de incluir el archivo \"tiempo.inc\"?",
            "a": [
                {"option": " <?php include file=\"tiempo.inc\"; ?>",    "correct": false},
                {"option": " <?php include \"tiempo.inc\"; ?>",    "correct": true},
                {"option": " <?php include:\"tiempo.inc\"; ?>",    "correct": false},
                {"option": " <!-- include file=\"tiempo.inc\" -->",    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual varialbe superglobal tiene la informacion de los Cabeceras, rutas, y ubicaciones de los archivos?",
            "a": [
                {"option": "$_SERVER",    "correct": true},
                {"option": "$_GET",    "correct": false},
                {"option": "$_GLOBALS",    "correct": false},
                {"option": "$_SESSION",    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿La funcion setcookie() debe aparecer antes de la etiqueta <html>?",
            "a": [
                {"option": "Verdadero",    "correct": true},
                {"option": "Falso",    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Como creas un array en php?",
            "a": [
                {"option": " $cars = array(\"Volvo\", \"BMW\", \"Toyota\");",    "correct": true},
                {"option": " $cars = \"Volvo\", \"BMW\", \"Toyota\";",    "correct": false},
                {"option": " $cars = array[\"Volvo\", \"BMW\", \"Toyota\"];", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual operador es usado para revisar si dos valores son iguales y del mismo tipo de dato?",
            "a": [
                {"option": "=",    "correct": false},
                {"option": "==",    "correct": false},
                {"option": "===", "correct": true},
                {"option": "!=", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Que significa HTML?",
            "a": [
                {"option": "Hyper Text Markup Language",    "correct": true},
                {"option": "Hyperlinks and Text Markup Language",    "correct": false},
                {"option": "Home Tool Markup Language", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Quien hace los estandares WEB?",
            "a": [
                {"option": "The Word Wide Web Consortium",    "correct": true},
                {"option": "Mozilla",    "correct": false},
                {"option": "Microsoft", "correct": false},
                {"option": "Google", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"Elige el HTML correcto para la cabecera mas grande",
            "a": [
                {"option": "<head>",    "correct": false},
                {"option": "<h1>",    "correct": true},
                {"option": "<h6>", "correct": false},
                {"option": "<heading>", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es el HTML correcto para insertar un salto de linea?",
            "a": [
                {"option": "<break>",    "correct": false},
                {"option": "<br>",    "correct": true},
                {"option": "<lb>", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"Elige el HTML correcto que define texto importante",
            "a": [
                {"option": "<important>",    "correct": false},
                {"option": "<i>",    "correct": false},
                {"option": "<b>", "correct": false},
                {"option": "<strong>", "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"Elige el HTML correcto que define texto enfatizado",
            "a": [
                {"option": "<em>",    "correct": true},
                {"option": "<italic>",    "correct": false},
                {"option": "<i>", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es el HTML correcto para crear un hipervinculo?",
            "a": [
                {"option": " <a name=\"http://www.test.com\">test.com</a>",    "correct": false},
                {"option": " <a>http://www.test.com</a>",    "correct": false},
                {"option": " <a url=\"http://www.test.com\">test.com</a>", "correct": false},
                {"option": " <a href=\"http://www.test.com\">Test</a>", "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual caracter es usado para indicar una etiqueta final?",
            "a": [
                {"option": "/",    "correct": true},
                {"option": "*",    "correct": false},
                {"option": "^", "correct": false},
                {"option": "<", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual de estos conjuntos son todos elementos <table>?",
            "a": [
                {"option": "<table><tr><tt>",    "correct": false},
                {"option": "<thead><body><tr>",    "correct": false},
                {"option": "<table><head><tfoot>", "correct": false},
                {"option": "<table><tr><td>", "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Como puedes hacer una lista enumerada?",
            "a": [
                {"option": "<dl>",    "correct": false},
                {"option": "<list>",    "correct": false},
                {"option": "<ul>", "correct": false},
                {"option": "<ol>", "correct": true}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Como puedes hacer una lista con vińetas?",
            "a": [
                {"option": "<dl>",    "correct": false},
                {"option": "<list>",    "correct": false},
                {"option": "<ul>", "correct": true},
                {"option": "<ol>", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es la forma correcta para hacer un TextArea en HTML?",
            "a": [
                {"option": "<textarea>",    "correct": true},
                {"option": "<input type=\"textbox\">",    "correct": false},
                {"option": "<input type=\"textarea\">", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"En HTML, onblur y onfocus son:",
            "a": [
                {"option": "Elementos HMTL",    "correct": false},
                {"option": "Atributos de eventos",    "correct": true},
                {"option": "Atributos de estilos", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },


        {
            "q":"¿En que formato estan definidos los graficos de SVG?",
            "a": [
                {"option": "HMTL",    "correct": false},
                {"option": "XML",    "correct": true},
                {"option": "CSS", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },


        {
            "q":"El elemento HTML <canvas> es usado para:",
            "a": [
                {"option": "Dibujar graficos",    "correct": true},
                {"option": "Mostrar infromación de la Base de Datos",    "correct": false},
                {"option": "Crear elementos arrastrables", "correct": false},
                {"option": "Manipular datos en MySQL", "correct": false},
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"En HTML, ¿Cual atributo es usado para especificar que un campo debe de ser llenado?",
            "a": [
                {"option": "required",    "correct": true},
                {"option": "placeholder",    "correct": false},
                {"option": "validate", "correct": false},
                {"option": "formvalidate", "correct": false},
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual input type define un control slider?",
            "a": [
                {"option": "range",    "correct": true},
                {"option": "slider",    "correct": false},
                {"option": "search", "correct": false},
                {"option": "controls", "correct": false},
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Que significa CSS?",
            "a": [
                {"option": "Cascading Style Sheets",    "correct": true},
                {"option": "Computer Style Sheets",    "correct": false},
                {"option": "Colorful Style Sheets", "correct": false},
                {"option": "Creative Style Sheets", "correct": false},
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es el HTML correcto para referirte a una hoja de estilos externa?",
            "a": [
                {"option": '<link rel="stylesheet" type="text/css" href="mystyle.css">',    "correct": true},
                {"option": '<style src="mystyle.css">',    "correct": false},
                {"option": "<stylesheet>mystyle.css</stylesheet>", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual atributo HTML es usado para definir estilos en linea?",
            "a": [
                {"option": "style",    "correct": true},
                {"option": "class",    "correct": false},
                {"option": "styles", "correct": false},
                {"option": "font", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Como agregas un color de fondo a todos los elementos <h1>?",
            "a": [
                {"option": "h1 {background-color: #FFFFFF;}",    "correct": true},
                {"option": "h1.all {background-color: #FFFFFF;}",    "correct": false},
                {"option": "all.h1 {background-color: #FFFFFF;}", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual propiedad CSS es usada para cambiar el color del texto?",
            "a": [
                {"option": "color",    "correct": true},
                {"option": "text-color",    "correct": false},
                {"option": "fgcolor", "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es la sintaxis correcta para cambiarle el contenido del siguiente elemento HTML? <p id=\"demo\"Esto es una demostracion.</p>",
            "a": [
                {"option": 'document.getElementById("demo").innerHTML = "Hola Mundo!";',    "correct": true},
                {"option": 'document.getElementByName("p").innerHTML = "Hola Mundo!";',    "correct": false},
                {"option": 'document.getElement("p").innerHTML = "Hola Mundo!";', "correct": false},
                {"option": ' #demo.innerHTML = "Hola Mundo!";', "correct":false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es la manera correcta para escribir un array en JavaScript?",
            "a": [
                {"option": ' var colors = ["red", "green", "blue"]',    "correct": true},
                {"option": ' var colors = "red", "green", "blue"',    "correct": false},
                {"option": ' var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', "correct": false},
                {"option": ' var colors = (1:"red", 2:"green", 3:"blue")', "correct":false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿El sistema de cuadricula de Bootstrap se basa en cuantas columnas?",
            "a": [
                {"option": '12',    "correct": true},
                {"option": '3',    "correct": false},
                {"option": '9', "correct": false},
                {"option": '6', "correct":false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Es posible usar jQuery con Ajax?",
            "a": [
                {"option": 'Si',    "correct": true},
                {"option": 'No',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual es la definicion de Ajax?",
            "a": [
                {"option": 'Asynchronous JavaScript And XML',    "correct": true},
                {"option": 'Asynchronous JSON And XML',    "correct": false},
                {"option": 'Ajustment Java And XML',    "correct": false},
                {"option": 'Asynchronous Joy And X-mas',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Que es jQuery?",
            "a": [
                {"option": 'Libreria de JavaScript',    "correct": true},
                {"option": 'Framework de JavaScript',    "correct": false},
                {"option": 'Clase para JSON',    "correct": false},
                {"option": 'Lenguaje de programacion',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿jQuery es un estandard de W3C?",
            "a": [
                {"option": 'No',    "correct": true},
                {"option": 'Si',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual instruccion SQL es usada para recuperar datos de la Base de Datos?",
            "a": [
                {"option": 'SELECT',    "correct": true},
                {"option": 'EXTRACT',    "correct": false},
                {"option": 'GET',    "correct": false},
                {"option": 'OPEN',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual instruccion SQL es usada para actualizar datos de la Base de Datos?",
            "a": [
                {"option": 'UPDATE',    "correct": true},
                {"option": 'SAVE AS',    "correct": false},
                {"option": 'MODIFY',    "correct": false},
                {"option": 'SAVE',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual instruccion SQL es usada para borrar datos de la Base de Datos?",
            "a": [
                {"option": 'DELETE',    "correct": true},
                {"option": 'COLLAPSE',    "correct": false},
                {"option": 'REMOVE',    "correct": false},
                {"option": 'ERASE',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual instruccion SQL es usada para insertar datos de la Base de Datos?",
            "a": [
                {"option": 'INSERT INTO',    "correct": true},
                {"option": 'ADD RECORD',    "correct": false},
                {"option": 'INSERT NEW',    "correct": false},
                {"option": 'ADD NEW',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },

        {
            "q":"¿Cual instruccion SQL es usada para recuperar solo valores diferentes?",
            "a": [
                {"option": 'SELECT DISTINCT',    "correct": true},
                {"option": 'SELECT UNIQUE',    "correct": false},
                {"option": 'SELECT DIFFERENT',    "correct": false},
                {"option": 'SELECT NOT EQUALS',    "correct": false}
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },*/




        {
            'q': "¿Que linea juegas en lol?",
            'a': [
                {'option': 'Top', 'correct': true},
                {'option': 'Jungle', 'correct': true},
                {'option': 'Middle', 'correct': true},
                {'option': 'ADC', 'correct': true},
                {'option': 'Support', 'correct': true},
                {'option': 'Ninguno', 'correct': false}
            ],
            'correct':'',
            'incorrect': '',
            "select_any": true,
            "force_checkbox": true,
            "disable_random": true
        }
    ]
};
