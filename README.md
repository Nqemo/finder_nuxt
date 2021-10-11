# finder_nuxt

Aplicación NUXT: Buscador de imagenes en el feed púclico de Flickr.

## Arranque

_Instrucciones básicas:._

1. [Clona o descarga](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) el codigo fuente de la aplicación a tu ordenador.
2. Instala Node.js si no lo tienes instalado. [Pagina de descarga](https://nodejs.org/en/download/) o [via package manager](https://nodejs.org/en/download/package-manager/).
3. Muevete a la carpeta del directorio.
4. Instala las dependencias

```bash
$ yarn install
```

5. Lanza la aplicación en localhost:3000

```bash
$ yarn dev
```

## Despliegue 📦

Crear un archivo .env en el raiz del proyecto

Añadir al archivo .env los siguientes parametros:

```
VUE_APP_TITLE=Flickr-Search
VUE_APP_API=https://www.flickr.com/services/feeds/photos_public.gne
```

y con esto

**`Ya estaría desplegado el proyecto`**
<br/>
<br/>

## Construido con 🛠️

- [Vue](https://vuejs.org) - El framework JS
- [Nuxt](https://nuxt.org) - El framework del framework
- [TailwindCSS](https://tailwindcss.com) - El framework CSS

## Autor ✒️

- **Nacho Quero** - [NqEmO](https://github.com/Nqemo)

## Licencia 📄

_privada_

[Nacho](https://github.com/Nqemo) 😊

## Notas

Se hace uso de **Fetch-jsonp**, y no de un **fetch** o **axios** clásico, para evitar los problemas CORS que genera la feeds pública de Flickr.
