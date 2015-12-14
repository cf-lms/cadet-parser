# Cadet Parser

<strong>How to use Cadet Parser</strong>
==========================
Installation
-----------------
```npm install cadet-parser```

To then use Cadet Parser you must require it in.

```var parser = require('cadet-parser')```

<strong>parser(pathname, callback)</strong>

Cadet Parser gives you a function that will read a file and return to you a course object generated from that file.

1. Pathname: The path to any vaild markdown file in the form of a string.
2. Callback: Allows this to run asyncrously with a node style callback. It returns error as the first argument and data as the second argument. Error should be null and Data should be the course object.

```
parser(__dirname + '/example/exmaple.md', function(error, data) {
  //error should be null if provided a valid path
  //data will be course object
});
```

<strong>Markdown Structure</strong>
===================================

The structure you build your markdown is very important.

The parser is looking for a specific number of # to build the object.

<strong>Title</strong>

Title of the course should follow a single #

```#JavaScript Full-stack Development Accelorator```

<strong>Week</strong>

Week of the course should follow two ##. Followed by a numerical number for the week.

```##Week 1```

<strong>Day</strong>

Day of the course should follow three ###. Followed by a numerical number for the day of the week.

```###Day 1```

<strong>Assignment</strong>

Assignment should follow four ####. Then lead off with a type of assignment followed by a title seperated by a :.

```####Code: Code some stuff```

<strong>Rubric</strong>

Rubric should follow five #####. Then lead off with the title Rubric followed by a numerical number serperated by a :.

```#####Rubric: 10```
