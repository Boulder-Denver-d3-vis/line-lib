/* global Reveal */
/* global console */
/* global d3 */
/* jshint indent: false */
/* jshint -W015 */
/* jshint -W098 */

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
    evalSvg('code.d-attr', 'svg.d-attr');
  });
})();
