export type Interval = {
  first: number;
  second: number;
};

export const defaultInterval = [
  { first: 1, second: 2 },
  { first: 3, second: 4 }
];

export const sort = (intervals: Interval[]) => {
  return intervals.sort((a: Interval, b: Interval) =>
    a.first <= b.first ? -1 : 1
  );
};
