## What about D3?

***

When you want to turn data into a line, you usually do the following (simplified):

```
var line = d3.svg.line();
d3.select("svg").append("path")
  .datum(myData)
  .attr(d, line);
```

In this case, ```line``` is a _function_ that takes your data and turns it into a list of commands in ```d```.

D3 loops over your data, applies the ```line``` function to it and sets the resulting attribute, causing the browser to draw a line.
