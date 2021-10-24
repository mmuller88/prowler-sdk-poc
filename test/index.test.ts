import { handler } from '../src/index';

test('check 73', async () => {
  await expect(handler()).resolves.toBe('failed martin--mueller.com is public');
});

test('check 73 with whitelist', async () => {
  await expect(handler({ whiteListedBucketNames: ['martin--mueller.com'] })).resolves.toBe('ok');
});