# Basic Setup
```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

# Error: EACCES: permission denied, access...
modifiez les autorisations de vos fichiers

vérifiez d'abord à qui appartient l'annuaire : 

```
ls -la /usr/local/lib/node_modules
```

vérifier votre utilisateur actuel : 

```
id -un
```

changez de propriétaire : 

```
sudo chown -R ownerName: /usr/local/lib/node_modules
```

réexecuter la commande : 

```
sudo npm install webpack webpack-cli --save-dev
```

# Création d'un nouveau projet

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

# Dépendence lodash

Pour regrouper la lodashdépendance index.js, nous devons installer la bibliothèque localement:

```
npm install --save lodash
```

# RUN WEBPACK
Cela dit, exécutons npx webpack, ce qui prendra notre script src/index.jscomme point d'entrée et générera dist/main.jscomme sortie . La npxcommande, fournie avec Node 8.2 / npm 5.2.0 ou supérieur, exécute le binaire webpack ( ./node_modules/.bin/webpack) du package webpack que nous avons installé au début:

```
npx webpack
```

ou

```
npx webpack --config webpack.config.js
```

# Script NPM
ajouter au fichier package.json:

```
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
-      "test": "echo \"Error: no test specified\" && exit 1"
+      "test": "echo \"Error: no test specified\" && exit 1",
+      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
  }
```

ensuite executer la commande :

```
  npm run build
```

La commande ```npm run build``` peut être utilisée à la place de la npxcommande que nous avons utilisée précédemment.

# Compilation du TypeScript

```
npm install --save-dev typescript ts-loader
```
> https://webpack.js.org/guides/typescript/


# Create a new repository on the command line

```
git clone git@github.com:Thomasgravy/webpack-initProjet-js-ts.git
echo "# webpack-initProjet-js-ts" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:Thomasgravy/webpack-initProjet-js-ts.git
git push -u origin master
```