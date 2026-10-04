// Demo controls only. The header blocker effect itself is pure CSS.
(function () {
  var body = document.body;
  var off = document.getElementById('mode-off');
  var on = document.getElementById('mode-on');
  var xray = document.getElementById('xray');
  var legend = document.getElementById('legend');
  var dock = document.getElementById('dock');
  var hide = document.getElementById('hide');
  var restore = document.getElementById('restore');

  function setMode(isOff) {
    body.classList.toggle('is-off', isOff);
    off.setAttribute('aria-pressed', String(isOff));
    on.setAttribute('aria-pressed', String(!isOff));
  }
  off.addEventListener('click', function () { setMode(true); });
  on.addEventListener('click', function () { setMode(false); });

  xray.addEventListener('click', function () {
    var next = !body.classList.contains('is-xray');
    body.classList.toggle('is-xray', next);
    xray.setAttribute('aria-pressed', String(next));
    legend.hidden = !next;
  });

  hide.addEventListener('click', function () {
    dock.hidden = true;
    restore.hidden = false;
  });
  restore.addEventListener('click', function () {
    dock.hidden = false;
    restore.hidden = true;
  });
})();
