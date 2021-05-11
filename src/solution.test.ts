import {solve} from './solution'

// Partitionare in clase de echivalenta

test("--------PARTITIONARE IN CLASE DE ECHIVALENTA--------\n Input valid", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: 5, second: 12 }])
  ).toBe("5 9");
});
test("N prea mic", () => {
  expect(
    solve(4, -1)
  ).toBe("Input invalid");
});
test("N prea mare", () => {
  expect(
    solve(4, Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("XS prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: -5, second: 13 }])
  ).toBe("Input invalid");
});
test("M prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], -1)
  ).toBe("Input invalid");
});
test("M prea mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("XT prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: -5, second: 12 }])
  ).toBe("Input invalid");
});
test("K prea mic", () => {
  expect(
    solve(-5)
  ).toBe("Input invalid");
});
test("K prea mare", () => {
  expect(
    solve(Math.pow(10,9)+1)
  ).toBe("Input invalid");
});


// --------------------------- // ---------------------------
// Analiza valorilor de frontiera

test("--------ANALIZA VALORILOR DE FRONTIERA--------\n K mediu", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: 5, second: 12 }])
  ).toBe("5 9");
});
test("K mare", () => {
  expect(
    solve(Math.pow(10,9), 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: 5, second: 12 }])
  ).toBe(-1);
});
test("N prea mic", () => {
  expect(
    solve(4, 0)
  ).toBe("Input invalid");
});
test("N prea mare", () => {
  expect(
    solve(4, Math.pow(10,6))
  ).toBe("Input invalid");
});
test("XS prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: -1 }])
  ).toBe("Input invalid");
});
test("XS prea mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: Math.pow(10,9)+1 }])
  ).toBe("Input invalid");
});
test("M prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 0)
  ).toBe("Input invalid");
});
test("M prea mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("XT prea mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: -1, second: 12 }])
  ).toBe("Input invalid");
});
test("XT prea mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 2, second: 4 }, { first: 5, second: Math.pow(10,9)+1 }])
  ).toBe("Input invalid");
});
test("K prea mic", () => {
  expect(
    solve(0)
  ).toBe("Input invalid");
});
test("K prea mare", () => {
  expect(
    solve(Math.pow(10,9)+1)
  ).toBe("Input invalid");
});


// --------------------------- // ---------------------------
// Partitionarea in categorii

test("--------PARTITIONARE IN CATEGORII--------\n K prea mic -1", () => {
  expect(
    solve(-1)
  ).toBe("Input invalid");
});
test("K prea mic 0", () => {
  expect(
    solve(0)
  ).toBe("Input invalid");
});
test("N prea mic -1", () => {
  expect(
    solve(1, -1)
  ).toBe("Input invalid");
});
test("N prea mic 0", () => {
  expect(
    solve(1, 0)
  ).toBe("Input invalid");
});
test("M prea mic -1", () => {
  expect(
    solve(1, 1, [{ first: 1, second: 10 }], -1)
  ).toBe("Input invalid");
});
test("M prea mic 0", () => {
  expect(
    solve(1, 1, [{ first: 1, second: 10 }], 0)
  ).toBe("Input invalid");
});
test("M mic", () => {
  expect(
    solve(1, 1, [{ first: 1, second: 10 }], 1, [{ first: 8, second: 10 }])
  ).toBe("8 9");
});

const intervals = [{ first:8, second:13 }];
for(let i=0;i<Math.pow(10,5)-1;i++) {
  intervals.push({first: 15, second: 16});
}
test("M mare", () => {
  expect(
    solve(1, 1, [{ first: 1, second: 10 }], 10^5, intervals)
  ).toBe("8 9");
});
test("M prea mare", () => {
  expect(
    solve(1, 1, [{ first: 1, second: 10 }], Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("N prea mare 10^5+1", () => {
  expect(
    solve(1, Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("N prea mare 10^5+2", () => {
  expect(
    solve(1, Math.pow(10,5)+2)
  ).toBe("Input invalid");
});
test("M prea mic -1", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], -1)
  ).toBe("Input invalid");
});
test("M prea mic 0", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], 0)
  ).toBe("Input invalid");
});
test("M mic", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 14 }, { first: 16, second: 18 }], 1, [{ first: 8, second: 13 }])
  ).toBe("8 12");
});
test("M mediu", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 14 }, { first: 16, second: 18 }], 2, [{ first: 8, second: 13 }, { first: 14, second: 15 }])
  ).toBe("8 12");
});
test("M mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 14 }, { first: 16, second: 18 }], Math.pow(10,5), intervals)
  ).toBe("8 12");
});
test("M prea mare", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 11, second: 13 }], Math.pow(10,5)+1)
  ).toBe("Input invalid");
});
test("N prea mic -1", () => {
  expect(
    solve(Math.pow(10,9), -1)
  ).toBe("Input invalid");
});
test("N prea mic 0", () => {
  expect(
    solve(Math.pow(10,9), 0)
  ).toBe("Input invalid");
});
test("M prea mic", () => {
  expect(
    solve(Math.pow(10,9), Math.pow(10,5), intervals, 0)
  ).toBe("Input invalid");
});

const newIntervals = [...intervals]
newIntervals[0] = {first: 0, second: Math.pow(10,9)};
test("M mic", () => {
  expect(
    solve(Math.pow(10,9), Math.pow(10,5), newIntervals, 1, [{first: 0, second: Math.pow(10,9)}])
  ).toBe("0 1000000000");
});
test("M mediu", () => {
  expect(
    solve(Math.pow(10,9), Math.pow(10,5), newIntervals, 2, [{first: 0, second: 4}, {first: 7, second: 12}])
  ).toBe(-1);
});
test("M mare", () => {
  expect(
    solve(Math.pow(10,9), Math.pow(10,5), newIntervals, Math.pow(10,5), newIntervals)
  ).toBe("0 1000000000");
});
test("M prea mare", () => {
  expect(
    solve(Math.pow(10,9), Math.pow(10,5), newIntervals, Math.pow(10,5)+1)
    ).toBe("Input invalid");
});
test("K prea mare", () => {
  expect(
    solve(Math.pow(10,9)+1)
    ).toBe("Input invalid");
});

// --------------------------- // ---------------------------
//  Statement coverage

test("--------STATEMENT COVERAGE--------\n K prea mic", () => {
  expect(
    solve(0)
  ).toBe("Input invalid");
});
test("N prea mic", () => {
  expect(
    solve(4, -1)
  ).toBe("Input invalid");
});
test("Input valid", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 5, second: 12 }, { first: 14, second: 16 }])
  ).toBe("5 9");
});
test("Input valid fara solutie", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 4, second: 5 }, { first: 89, second: 96 }])
  ).toBe(-1);
});
test("Input valid caz 2", () => {
  expect(
    solve(4, 2, [{ first: 29, second: 30 }, { first: 92, second: 96 }], 2, [{ first: 4, second: 30 }, { first: 89, second: 101 }])
  ).toBe("92 96");
});


// --------------------------- // ---------------------------
//  Decision coverage

test("--------DECISION COVERAGE--------\n K prea mic", () => {
  expect(
    solve(0)
  ).toBe("Input invalid");
});
test("N prea mic", () => {
  expect(
    solve(4, -1)
  ).toBe("Input invalid");
});
test("Input valid", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 5, second: 12 }, { first: 14, second: 16 }])
  ).toBe("5 9");
});
test("Input valid fara solutie", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 12, second: 14 }, { first: 89, second: 96 }])
  ).toBe(-1);
});


// --------------------------- // ---------------------------
//  Condition coverage

test("--------CONDITION COVERAGE--------\n K prea mic", () => {
  expect(
    solve(0)
  ).toBe("Input invalid");
});
test("K prea mare", () => {
  expect(
    solve(Math.pow(10,10))
  ).toBe("Input invalid");
});
test("N prea mic", () => {
  expect(
    solve(4, 0)
  ).toBe("Input invalid");
});
test("N prea mare", () => {
  expect(
    solve(4, Math.pow(10,6))
  ).toBe("Input invalid");
});
test("M prea mic", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 0)
  ).toBe("Input invalid");
});
test("M prea mare", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], Math.pow(10,6))
  ).toBe("Input invalid");
});
test("XS prea mic", () => {
  expect(
    solve(4, 1, [{ first: -2, second: 5 }])
  ).toBe("Input invalid");
});
test("XS prea mare", () => {
  expect(
    solve(4, 1, [{ first: 5, second: Math.pow(10,10) }])
  ).toBe("Input invalid");
});
test("XT prea mic", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 1, [{ first: -2, second: 5 }])
  ).toBe("Input invalid");
});
test("XT prea mare", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 1, [{ first: 4, second: Math.pow(10,10) }])
  ).toBe("Input invalid");
});
test("Input valid", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 5, second: 12 }, { first: 14, second: 16 }])
  ).toBe("5 9");
});
test("Input valid fara solutie", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 10 }, { first: 11, second: 13 }], 2, [{ first: 12, second: 14 }, { first: 89, second: 96 }])
  ).toBe(-1);
});


// --------------------------- // ---------------------------
//  Circuite independente

test("--------CIRCUITE INDEPENDENTE--------\n Circuit 1", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 9 }, { first: 11, second: 19 }], 3, [{ first: 2, second: 3 }, { first: 5, second: 12 }, { first: 14, second: 20 }])
  ).toBe("5 9");
});
test("Circuit 2", () => {
  expect(
    solve(4, 2, [{ first: 2, second: 6 }, { first: 11, second: 19 }], 2, [{ first: 13, second: 18 }, { first: 23, second: 27 }])
  ).toBe("13 17");
});

test("Circuit 3", () => {
  expect(
    solve(4, 2, [{ first: 11, second: 16 }, { first: 25, second: 31 }], 2, [{ first: 14, second: 16 }, { first: 23, second: 29 }])
  ).toBe("25 29");
});


// --------------------------- // ---------------------------
//  Teste suplimentare pentru omorarea mutantilor

test("ConditionalExpression test", () => {
  expect(
    solve(4, 2, [{ first: 11, second: 16 }, { first: 25, second: 31 }], 2, [{ first: 14, second: -1 }, { first: 23, second: 29 }])
  ).toBe("Input invalid");
});

test("EqualityOperator test", () => {
  expect(
    solve(4, 2, [{ first: 1, second: 10 }, { first: 13, second: 15}], 1, [{ first: Math.pow(10,9), second: Math.pow(10,8)}])
  ).toBe(-1);
});