/* global Reveal */
/* global console */
/* global CodeMirror */
/* global d3 */
/* global document */
/* jshint indent: false */
/* jshint -W015 */
/* jshint -W098 */
/* jshint evil: true */
/* jshint quotmark: true */

(function () {
  'use strict';

  function evalSvg(source, target) {
    var sourceSel = d3.select(source);
    var targetSel = d3.select(target);
    sourceSel.on('input', function () {
      targetSel.html(d3.select(this).text());
    });
  }

  Reveal.addEventListener('paths', function (event) {
    var svg = d3.select('svg');
    svg.append('path')
      .classed('example-path', true)
      .attr('d', 'M 10, 50 L 20, 60 L 100, 80 L 20,200 Z');

    svg.append('circle')
      .classed('example-circle', true)
      .attr({
        cx: 300,
        cy: 200,
        r: 100
      });

    svg.append('rect')
      .classed('example-rect', true)
      .attr({
        x: 450,
        y: 50,
        width: 80,
        height: 30
      });
  });

  Reveal.addEventListener('d-attr', function (event) {
    evalSvg('pre.d-attr', 'svg.d-attr');
  });

  function ourline(d) {
    var out = "M0,0";
    for(var i = 0; i < d.length; i++) {
      out += " L" + (i * 40) + "," + (d[i] * 20);
    }
    return out;
  }

  Reveal.addEventListener('can-we', function (event) {
    var data = [2, 9, 4, 7, 5, 9, 2, 0, 4, 8, 2, 0, 4],
        code = document.getElementById('can-we-code').innerText,
        source = d3.select("code.can-we");
   eval(code);
   console.log(code, typeof(code));
   var svg = d3.select("svg.can-we");
   svg.datum(data).append("path").classed("can-we", true).attr("d", ourline);
  });
})();
