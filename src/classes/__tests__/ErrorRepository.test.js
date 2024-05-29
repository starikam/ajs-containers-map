import ErrorRepository from '../ErrorRepository';

test('Testing adding a character to a team', () => {
  const errorRepository = new ErrorRepository();

  const result = errorRepository.translate(400);

  expect(result).toBe('Bad Request');
});

test('Testing for receiving an unknown error by code', () => {
  const errorRepository = new ErrorRepository();

  const result = errorRepository.translate(404);

  expect(result).toBe('Not Found');
});
