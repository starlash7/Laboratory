type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b"]);
superPrint([1, 2, true, false]);
