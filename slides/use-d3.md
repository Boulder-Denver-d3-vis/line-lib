## And we can use D3!

***

D3 has all these wonderful interpolation functions, built on top of the SVG specification. We can use them to make our custom generators better!

We can create and call d3 line function generators whenever we need to, not just in an enter/append/attr chain:

The defaults for d3 line functions are to consider the incoming data as an array of [x,y] values

```
function genLine(data, xfunction, yfunction, interpolator) {
  return d3.svg.line().interpolate(interpolator)(data)
}
```
