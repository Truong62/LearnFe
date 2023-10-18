// hãy viết hàm arrToObj để chuyển array thành object

function arrToObj(arr) {
  return arr.reduce((acc, childArr) => {
    acc[childArr[0]] = childArr[1];
    return acc;
  }, {});
}