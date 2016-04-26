# PlanPoker

PlanPoker is developed by [Trantect](http://www.trantect.com/).

- [website](http://www.trantect.com/PlanPoker/)

# Installation

You need Node installed globally:

1.Install dependencies
```sh
$ npm install
```
2.Make build files
```sh
$ npm run build
```

3.Run with python simpleHttpServer(default port 3000)
```sh
$ cd build && ../script/manifest.py
```

# Tests

run test with mocha

```sh
$ npm run test
```

# Development

Want to contribute? Great!

Open your favorite Terminal and run these commands.

1.Listen on http://localhost:8080, make a change in your file and instantanously see your updates!
```sh
$ npm run dev
```

2.If you change any files and want to see your updates on other devices,
you need to modify src/offline.manifest version.

And then run these commands:
```sh
$ npm run build
$ cd build && ../script/manifest.py
```

# License

[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0)