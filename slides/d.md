## The d Attribute

***

```d``` is a special attribute in SVG paths that interprets a string with a certain format.

The format is like the commands you'd give to a pen-plotter.  Move the pen to here, draw a straight line to there, and then a curve to elsewhere. That example in SVG would look like this:

<p>
   <code contenteditable><path d="M10,10 L20,20 C10,30"></path></code>
</p>

And produce this:

<svg>
  <path d="M10,10 L20,20 C10,30"></path>
</svg>
