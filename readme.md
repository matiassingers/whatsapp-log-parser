# whatsapp-log-parser [![Build Status](http://img.shields.io/travis/matiassingers/whatsapp-log-parser.svg?style=flat-square)](https://travis-ci.org/matiassingers/whatsapp-log-parser) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/whatsapp-log-parser.svg?style=flat-square)](https://gemnasium.com/matiassingers/whatsapp-log-parser)
> parse WhatsApp log files

## Install

```sh
$ npm install --save whatsapp-log-parser
```


## Usage

```js
var whatsappLogParser = require('whatsapp-log-parser');

whatsappLogParser('path/to/log.txt', function(messages){
  console.log(messages);
  
  => [ { date: '2014-02-27T05:16:12+08:00',
         message: 'Steve Rogers changed the subject to “The Avengers”',
         announcement: true },
       { date: '2014-02-27T05:16:18+08:00',
         message: 'Tony Stark was added',
         announcement: true } ]
});

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
