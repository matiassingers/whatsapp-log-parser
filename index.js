'use strict';

var fs = require('fs');
var stream = require('stream');
var readline = require('readline');
var moment = require('moment');

function readFileContent(filename, callback){
  var lines = [];

  var instream = fs.createReadStream(filename);
  var outstream = new stream;
  outstream.readable = true;
  outstream.writable = true;

  instream.on('error', function (error){
    if(error.code === 'ENOENT'){
      error.message = 'File doesn\'t exist, please try again with a different file/path.';
    }
    return callback(error);
  });

  var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
  });

  rl.on('line', function(line){
    lines.push(formatLine(line));
  });

  rl.on('close', function(){
    callback(null, lines);
  });
}

function formatLine(line) {
  // Remove empty lines
  if(!line || !line.length) {
    return;
  }

  var lineParts = line.split(': ');
  return messageDetails(lineParts);
}
function messageDetails(parts){
  var date = formatDate(parts[0]);

  var details = {
    date: date
  };

  if(parts[2]){
    details.sender = parts[1];

    // remove timestamp and sender info
    parts.splice(0, 2);

    details.message = parts.join(': ');

    return details;
  }

  details.message = parts[1];
  details.announcement = true;

  return details;
}
function formatDate(timestamp){
  // https://github.com/nmoya/whatsapp-parser/blob/master/wp_parser/parsers/whatsapp.py
  // A line can be either:
  //   09/12/2012 17:03:48: Sender Name: Message
  //   3/24/14, 1:59:59 PM: Sender Name: Message
  //   24/3/14, 13:59:59: Sender Name: Message

  if (parseInt(timestamp.slice(-1))) {
    // moment supports both 2-digit and 4-digit years with this format
    return moment(timestamp, "DD/MM/YYYY HH:mm:ss").format();
  } else {
    // the third option with a single-digit hour
    return moment(timestamp, "DD/MM/YY hh:mm:ss a").format();
  }

}

module.exports = function(filename){
  return readFileContent.apply(this, arguments);
};
