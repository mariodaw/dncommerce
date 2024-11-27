
# Dncommerce

Este proyecto es el backend de un ecommerce siendo una sucesion de endpoints que permiten el funcionamiento de una tienda de juegos de mesa.

## Como inicializar el proyecto en tu ordenador



Primero se crea una replica y se accede a ella

```bash
  git clone https://github.com/mariodaw/dncommerce.git
  cd dncommerce

```



Despues se instalan las dependencias

```bash
  npm install

```

Despues migras el proyecto
```bash
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all

```
Y se iniciaria 
```bash
  npm start
```

## Estrcutura del programa

Mi programa organiza eficientemente las relaciones entre usuarios, pedidos, productos y categorías para mantener un sistema estructurado y funcional.

Usuarios y pedidos ("Uno a muchos")
Cada usuario puede realizar múltiples pedidos, lo que permite rastrear su historial de compras y personalizar su experiencia.

Usuario y Token ("Uno a muchos")
Cada usuario puede tener muchos token, lo que permite recabar toda la contraseña de manera segura.

Pedidos y productos ("Muchos a muchos")
Un pedido puede incluir varios productos, y un producto puede estar en múltiples pedidos. Esto se gestiona mediante una tabla intermedia que registra cantidades específicas por pedido, facilitando el control de inventarios y cálculos totales.

Productos y categorías ("Muchos a uno")
Cada producto pertenece a una única categoría, mientras que una categoría puede contener varios productos. Esto organiza el catálogo y permite filtros eficientes.

## Hecho con =

* [Sequelize](https://sequelize.org/) - El framework web usado
* [VSC](https://code.visualstudio.com/) - Programa de programación
* [Postman](https://www.postman.com/) - Programa prueba enrutamiento
* [Trello](https://trello.com/b/CDQpcl2b/vida) - Programa de gestión de tareas
* [MySQLDriver](https://dev.mysql.com/downloads/connector/j/) - Programa de gestión de datos
* [JS](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de Programación
## Autor

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Mario Tomás** - *Programador Junior Web* - [Creator](https://github.com/mariodaw) 

## Licencia 

Este proyecto está licenciado bajo los términos de la licencia MIT. Para más detalles, revisa el archivo [LICENSE](https://es.wikipedia.org/wiki/Licencia_MIT).


## Expresiones de Gratitud 

* Gracias a Sofia por enseñarnos
* Unos compañeros de estudio increibles
* Ha sigo un proyecto del que he aprendido mucho
* Y si alguien le interesa este man me encontrara [aqui](https://es.wikipedia.org/wiki/Licencia_MIT)