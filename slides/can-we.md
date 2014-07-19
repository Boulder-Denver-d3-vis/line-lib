## That sounds easy.

***

Can we do the same thing? Sure!

```
function ourline(d) {
  var out = "M0,0";
  for(var i = 0; i < d.length; i++) {
    out += " L" + (i * 10) + "," + d[i];
  }
  return out;
}
```

Applied to ```data = [2,9,4,7,5,9,2,0,4,8,2,0,4]```, we get this:

TODO
