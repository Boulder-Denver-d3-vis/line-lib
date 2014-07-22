<!-- .slide: data-state="can-we" -->
## That sounds easy.

***

Can we do the same thing? Sure!
```javascript
  function ourline(d) {
    var out = "M5," + (d[0] + 5);
    for(var i = 1; i < d.length; i++) {
      out += " L" + (i * 40 + 5) + "," + (d[i] * 20 + 5);
    }
    return out;
  }
```
  
Applied to ```data = [2,9,4,7,5,9,2,0,4,8,2,0,4]```, we get this:

<svg width="600" height="400" class="can-we">
</svg>

