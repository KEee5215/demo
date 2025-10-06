function baseCurve(x) {
  if (x < 0 || x > 1) {
    return 0;
  }
  return Math.sin(x * Math.PI);
}

export function createCurve(XRange, topX, minY, maxY) {
  return function curve(x) {
    const beginX = topX - XRange / 2;
    const endX = topX + XRange / 2;
    if (beginX > x || x > endX) {
      return minY;
    }
    const YRange = maxY - minY;
    return baseCurve((x - beginX) / XRange) * YRange + minY;
  };
}
