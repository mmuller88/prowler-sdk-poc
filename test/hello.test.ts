import { handler } from '../src/index';

test('hello', async () => {
  await expect(handler()).resolves.toBe('ok');
  //expect(new Hello().sayHello()).toBe('hello, world!');
});