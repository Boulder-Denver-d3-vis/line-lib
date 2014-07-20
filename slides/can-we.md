<!-- .slide: data-state="can-we" -->
## That sounds easy.

***

Can we do the same thing? Sure!

<code contentEditable="true" class="can-we">
  <pre id="can-we-code">
  function ourline(d) {
    var out = "M0,0";
    for(var i = 0; i < d.length; i++) {
      out += " L" + (i * 10) + "," + d[i];
    }
    return out;
  }
  </pre>
</code>

Applied to ```data = [2,9,4,7,5,9,2,0,4,8,2,0,4]```, we get this:

<svg width="600" height="400" class="can-we">
</svg>

