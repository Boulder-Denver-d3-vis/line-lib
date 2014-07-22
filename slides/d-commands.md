## Commands in D

***

Commands are one letter followed by one or more comma-separated arguments.

* ```Mx,y``` : Move (pen up) to x, y coordinates
* ```mx,y``` : Move (pen up) current position + (x, y)
* ```Lx,y``` : Straight line to x, y coordinate
* ```lx,y``` : Straight line to current position + (x, y)

***

There are more. H and V for simple horizontal and vertical lines, C for cubic Bézier curves, Q for Quadratic curves, A for elliptical arcs.

Read [the spec](http://www.w3.org/TR/SVG/paths.html#PathData)!


