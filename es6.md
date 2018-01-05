1、建立工程目录：

先建立一个项目的工程目录，并在目录下边建立两个文件夹：src和dist
src：书写ES6代码的文件夹，写的js程序都放在这里。
dist：利用Babel编译成的ES5代码的文件夹，在HTML页面需要引入的时这里的js文件。
编写index.html：
文件夹建立好后，我们新建一个index.html文件。
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="./dist/index.js"></script>
    </head>
    <body>
        Hello ECMA Script 6
    </body>
</html>
需要注意的是在引入js文件时，引入的是dist目录下的文件。

<script src="./dist/index.js"></script>



2、编写index.js
在src目录下，新建index.js文件。这个文件很简单，我们只作一个a变量的声明，并用console.log()打印出来。

let a=1;
console.log(a);

我们用了let声明，这里let是ES6的一种声明方式，接下来我们需要把这个ES6的语法文件自动编程成ES5的语法文件。



3、初始化项目
在安装Babel之前，需要用npm init先初始化我们的项目。打开终端或者通过cmd打开命令行工具，进入项目目录，输入下边的命令：

npm init -y

-y代表全部默认同意，就不用一次次按回车了。命令执行完成后，会在项目根

目录下生产package.json文件。
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
可以根据自己的需要进行修改，比如我们修改name的值。



4、全局安装Babel-cli
在终端中输入以下命令,如果你安装很慢的话，可以使用淘宝镜像的cnpm来进行安装。安装cnpm的方法，大家自己百度吧。

npm install -g babel-cli

虽然已经安装了babel-cli，只是这样还不能成功进行转换，如果你不相信可以输入下边的命令试一下。

babel src/index.js -o dist/index.js

你会发现，在dist目录下确实生产了index.js文件，但是文件并没有变化，还是使用了ES6的语法。因为我们还需要安装转换包才能成功转换，继续往下看吧。



5、本地安装babel-preset-es2015 和 babel-cli

npm install --save-dev babel-preset-es2015 babel-cli

安装完成后，我们可以看一下我们的package.json文件，已经多了devDependencies选项。

  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  }


6、新建.babelrc
在根目录下新建.babelrc文件，并打开录入下面的代码

{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
这个文件我们建立完成后，现在可以在终端输入的转换命令了，这次ES6成功转化为ES5的语法。

babel src/index.js -o dist/index.js



7、简化转化命令：
在学习vue 的时候，可以使用npm run build 直接利用webpack进行打包，在这里也希望利用这种方式完成转换。打开package.json文件，把文件修改成下面的样子。

{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  }
}
修改好后，以后我们就可以使用 npm run build 来进行转换了。

