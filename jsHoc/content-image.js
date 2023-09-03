var nnt = {};
nnt.styleElements = function (elements, prop, val) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    nnt.styleElement(elements[i], prop, val);
  }
};
nnt.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
nnt.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
nnt.slideshow = function (sel, ms, func) {
  var i,
    ss,
    x = nnt.getElements(sel),
    l = x.length;
  ss = {};
  ss.current = 1;
  ss.x = x;
  ss.ondisplaychange = func;
  if (!isNaN(ms) || ms == 0) {
    ss.milliseconds = ms;
  } else {
    ss.milliseconds = 1000;
  }
  ss.start = function () {
    ss.display(ss.current);
    if (ss.ondisplaychange) {
      ss.ondisplaychange();
    }
    if (ss.milliseconds > 0) {
      window.clearTimeout(ss.timeout);
      ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
    }
  };
  ss.next = function () {
    ss.current += 1;
    if (ss.current > ss.x.length) {
      ss.current = 1;
    }
    ss.start();
  };
  ss.previous = function () {
    ss.current -= 1;
    if (ss.current < 1) {
      ss.current = ss.x.length;
    }
    ss.start();
  };
  ss.display = function (n) {
    nnt.styleElements(ss.x, "display", "none");
    nnt.styleElement(ss.x[n - 1], "display", "block");
  };
  ss.start();
  return ss;
};


