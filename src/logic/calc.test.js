import calculate from './calculate';
import operate from './operate';

describe('string testings', () => {
  const obj = {
    total: 7,
    next: 6,
    operation: '-',
  };
  const getOperation = obj.operation;
  const getInput = calculate(obj, getOperation);

  const numOne = 6;
  const numTwo = 6;
  const operation = '+';
  const getOperator = operate(numOne, numTwo, operation);

  test('The user input is number', () => {
    expect(getInput).toEqual(expect.not.stringMatching(getOperation));
  });

  test('The operator should be + ', () => {
    expect(getOperator).toBeDefined();
  });
});
