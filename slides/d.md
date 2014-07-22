<!-- .slide: data-state="d-attr" -->
## The d Attribute

***

```d``` is a special attribute in SVG paths that interprets a string with a certain format.

The format is like the commands you'd give to a pen-plotter.  Move the pen to here, draw a straight line to there, and then a smooth curve by specifying control points.

<code contentEditable="true" class="no-highlight path">
  <pre class="d-attr">
 <path d="M10,10 L50,80 C100,100 250,100 250,200 S400,300 400,200"></path> </pre>
</code>

And produce this:

<svg class="d-attr" width="60%" height="300px">
    <path d="M10,10 L50,80 C100,100 250,100 250,200 S400,300 400,200"></path>
</svg>
