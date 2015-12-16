# Cadet Parser

[![Build Status](https://travis-ci.org/cf-lms/cadet-parser.svg)](https://travis-ci.org/cf-lms/cadet-parser)

**How to use Cadet Parser**
==========================
Installation
-----------------
```npm install cadet-parser```

To then use Cadet Parser you must require it in.

```var parser = require('cadet-parser')```

**parser(pathname, callback)**

Cadet Parser gives you a function that will read a file and return to you a course object generated from that file.

1. Pathname: The path to any vaild markdown file in the form of a string.
2. Callback: Allows this to run asyncrously with a node style callback. It returns error as the first argument and data as the second argument. Error should be null and Data should be the course object.

```
parser(__dirname + '/example/exmaple.md', function(error, data) {
  //error should be null if provided a valid path
  //data will be course object
});
```

**Markdown Structure**
===================================

The structure you build your markdown is very important.

The parser is looking for a specific number of hashes(`#`) to build the object.

**Title**

Title of the course should follow a single hash(`#`).
If you wish to add a description to the course follow the titile with a colon(`:`) And add your desctiption after the colon(':') and a space(` `).

```#JavaScript```

**Week**

Week of the course should follow two hashes(`##`). They should be ordered from top to bottom in numerical order.

```##Week 1```

**Day**

Day of the course should follow three hashes(`###`). Days should follow the week they are a part of and should be ordered from top to bottom in numerical order.

```###Day 1```

**Assignment**

Assignment should follow four hashes(`####`). Then lead off with a type of assignment followed by a description seperated by a colon(`:`) and a space(` `). Assignments should follow the day they are a part of.

```####Code: Code some stuff```

**Rubric**

Rubric should follow five hashes(`#####`). Then lead off with the title Rubric followed by a numerical number serperated by a colon(`:`) and a space(` `).

```#####Rubric: 10```
