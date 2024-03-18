import { errorStatus, successStatus } from '../src/constants/status/http';
import { isSuccessResponse } from '../src/utils/http';
import { toOnlyDigits } from '../src/utils/string';

describe('utilities test', () => {
  test('isSuccessResponse works with all success status', () => {
    const mockedSuccessResponses = Object.values(successStatus)
      .map((status) => ({ status, data: null }));

    mockedSuccessResponses.forEach((response) => {
      expect(isSuccessResponse(response)).toBe(true);
    });
  });

  test('isSuccessStatus works with all error status', () => {
    const mockedErrorResponses = Object.values(errorStatus)
      .map((status) => ({ status, message: '' }));

    mockedErrorResponses.forEach((response) => {
      expect(isSuccessResponse(response)).toBe(false);
    });
  });

  test('toOnlyDigits', () => {
    expect(toOnlyDigits('q1w2e3r4t5y6u7')).toBe('1234567');
    expect(toOnlyDigits('1234567')).toBe('1234567');
    expect(toOnlyDigits('abcdefg')).toBe('');
  });
});
