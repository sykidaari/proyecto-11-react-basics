Hola!

Gracias por corregir mi proyecto, dejo aquí algunas aclaraciones sobre el mismo 🙂

Soy consciente de que el proyecto es relativamente más complicado de lo solicitado. Lo hice así porque bueno, me hacía mucha ilusión trabajar con React y quería ya de entrada explorarlo sin limitarme. Tuve una idea de la página que quería hacer, y quise hacerla sin pensar en que si podía o no, y simplemente fui estudiando sobre la marcha con la propia documentación de React, foros como StackOverFlow, youtube, ChatGPT, etc. Aclaro que todo el código que hay lo entiendo y lo he escrito yo, a través de mucha prueba y error 😂 . Me alegro de haber trabajado de esta forma, porque sinceramente ahora al haber finalizado la página, me siento ya muy cómoda con React y creo que entiendo bien cómo funciona, y me será más fácil seguir estudiándolo.

En cuanto a React en sí, comentar que hago uso de un custom hook, que estuve estudiando ya como funcionan. Esto se dio porque me di cuenta de que en todos los componentes con una petición a una API, iba a repetirse una misma secuencia de 4 hooks, y me chirriaba muchísimo el tener que repetir ese código en cada uno de los componentes, y quería aprender cual sería la solución real en un caso así.

Más cosillas:

# AXIOS

Pasé de usar fetch a Axios ya que me parecía una librería útil para aprender, estudiando principalmente a través de la documentación oficial.

# Tailwind

Desde ya hace tiempo quería aprender Tailwind, pero con js-vainilla me parecía un sufrimiento, así que esperé hasta ahora al usar React. Me vi una clase muy completa que tiene MiduDev en youtube, y a partir de allí fui aprendiendo con la documentación de Tailwind en la otra pantalla. Es verdad que al principio se me hizo bastante tedioso, pero ya me he acostumbrado bastante a la sintaxis. Hay momentos en los que hubiera preferido utilizar CSS normal, o por ejemplo el @apply de Tailwind, pero quise en este primer uso de la librería, usar digamos un "tailwind puro", para forzarme a aprenderlo. En futuros proyectos mi intención sí es usar Tailwind de forma más dinámica. Creo que e sería útil intentar acostumbrarme al mobile-first entre otras. Aparte, quiero explorar algunos plugins de Tailwind, como DaisyUI.

Lo que sí implementé ya en este proyecto fue el uso de las librerías tailwind-merge y clsx, juntándolas en la función cN en hooks/classNameManager. Clsx para tener una sintaxis más legible y fácil de manejar, y tailwind-merge para el manejo de conflictos de Tailwind, especialmente al usar clases condicionales/dinámicas.

Eso es todo, muchas gracias!
