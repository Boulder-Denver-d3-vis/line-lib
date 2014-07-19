<!-- .slide: data-state="d-attr" -->
## The d Attribute

***

```d``` is a special attribute in SVG paths that interprets a string with a certain format.

The format is like the commands you'd give to a pen-plotter.  Move the pen to here, draw a straight line to there, and then a smooth curve to elsewhere.

That example in SVG would look like this:

<pre>
  <code contentEditable="true" class="no-highlight path d-attr">
    <path d="M10,10 L50,50 L10,30"></path>
  </code>
</pre>

And produce this:

<svg class="d-attr">
  <path d="M30,30 L80,80 L30,60 A "></path>
</svg>
