function debounce(fn, delay) {
  let timer = null;
  let res = null;
  let fuc = function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      res = fn.apply(context, args);
    }), delay);
    return res;
  }
  return fuc;
}