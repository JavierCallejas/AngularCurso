# Curso de angular
-------------------------------
* GIT
* Typescript
* Sass
* Angular Modules
* Angular Components
* Angular Directives
* Angular Routing
-----------------------------------------
## GIT
### Inicializar repo
1. `git clone {{repo url}}` clonar repositorio
2. `ECHO "" >> README.md` crea el archivo readme.md
3. `git add README.md` agrega el readme al stage
4. `git commit -m "{{mensaje de cambios realizados}}"` se ejecuta el commit en repo local
5. `git push origin {{Rama}}` realiza el push al repo remoto
 
### hacer commit
1. `git add -A` agrega todos los cambios al stage o `git add {{ruta del archivo}}` agrega un solo cambio al stage
2. `git commit -m "{{mensaje de cambios realizados}}"` se ejecuta el commit en repo local
3. `git push origin {{nombre de la rama}}` realiza el push al repo remoto
----------------------------------------
## Javascript
 
1. ` npm init `
2. Crear código en index.js
3. ` node index.js ` ó ` npm start `
4. hacer commit
5. `git add -A` agrega todos los archivos modifigados
6. `git status` checa el estatus de cambios
7. ` git commit -m "un mensaje de los cambios realizados" ` hace el commit en el repositorio local
8. ` git push origin {{RAMA}}` envia los cambios locales a la rama remota
 
----------------------------------
## Typescript
 
1. ` npm install -g typescript ` instalación global de typescript
2. ` npm install -s typescript ` instalación local de typescript
3. `tsc {{ruta del archivo}}` compila el archivo global
4. `npm run tsc -- {{ruta del archivo}}` compila el local
5. `npm install nodemon` instala nodemon
6. crear el archivo de configuración nodemon.json
```
{
 "verbose": true,
 "watch": [
 "src"
 ],
 "exec": "npm run tsc && npm start",
 "ext": "ts"
}
```
7. agregar watch a package.json `"watch": "nodemon"`
8. ejecutar nodemon en watch mode `npm run watch`