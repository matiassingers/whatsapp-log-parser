# whatsapp-log-parser [![Build Status](http://img.shields.io/travis/matiassingers/whatsapp-log-parser.svg?style=flat-square)](https://travis-ci.org/matiassingers/whatsapp-log-parser) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/whatsapp-log-parser.svg?style=flat-square)](https://gemnasium.com/matiassingers/whatsapp-log-parser)
> parse WhatsApp log files

## Install

```sh
$ npm install --save whatsapp-log-parser
```


## Usage

```js
var whatsappLogParser = require('whatsapp-log-parser');

whatsappLogParser()

```


## CLI

```sh
$ npm install --global whatsapp-log-parser
```

```sh
$ whatsapp-log-parser --help

  parse WhatsApp log files

  Example
    whatsapp-log-parser log.txt

   => Tony Stark was added
      Tony Stark: What just happened? Please tell me nobody kissed me.
    
```


## License

MIT © [Matias Singers](http://mts.io)
