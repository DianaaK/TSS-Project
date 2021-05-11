import { defaultInterval, Interval, sort } from "./utils";

export const solve = (
  k: number,
  n: number = 2,
  xsys: Interval[] = defaultInterval,
  m: number = 2,
  xtyt: Interval[] = defaultInterval
) => {
  if (
    k < 1 ||
    k > Math.pow(10, 9) ||
    n < 1 ||
    n > Math.pow(10, 5) ||
    m < 1 ||
    m > Math.pow(10, 5)
  ) {
    return "Input invalid";
  }
  if (
    xsys.some(
      (item) =>
        item.first < 0 ||
        item.first > Math.pow(10, 9) ||
        item.second < 0 ||
        item.second > Math.pow(10, 9)
    ) ||
    xtyt.some(
      (item) =>
        item.first < 0 ||
        item.first > Math.pow(10, 9) ||
        item.second < 0 ||
        item.second > Math.pow(10, 9)
    )
  ) {
    return "Input invalid";
  }
  const sortedXSYS = sort(xsys);
  const sortedXTYT = sort(xtyt);
  let a: number,
    b: number,
    i: number = 0,
    j: number = 0;
  while (i < n && j < m) {
    a = Math.max(sortedXSYS[i].first, sortedXTYT[j].first);
    b = Math.min(sortedXSYS[i].second, sortedXTYT[j].second);
    if (b - a >= k) {
      return a + " " + (a + k);
    }
    if (sortedXSYS[i].second > sortedXTYT[j].second) {
      j++;
    } else if (sortedXSYS[i].second < sortedXTYT[j].second) {
      i++;
    } else {
      i++;
      j++;
    }
  }
  return -1;
};
