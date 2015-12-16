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

The parser is looking for a specific number of # to build the object.

**Title**

Title of the course should follow a single #

```#JavaScript Full-stack Development Accelorator```

**Week**

Week of the course should follow two ##. Followed by a numerical number for the week.

```##Week 1```

**Day**

Day of the course should follow three ###. Followed by a numerical number for the day of the week.

```###Day 1```

**Assignment**

Assignment should follow four ####. Then lead off with a type of assignment followed by a title seperated by a :.

```####Code: Code some stuff```

**Rubric**

Rubric should follow five #####. Then lead off with the title Rubric followed by a numerical number serperated by a :.

```#####Rubric: 10```
