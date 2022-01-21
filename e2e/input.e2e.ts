import { by, expect, element } from 'detox';

describe('Input', () => {
  beforeAll(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });

  it('should get to the home screen', async () => {
    const e = element(by.id('startButton'));
    await expect(e).toExist();

    await e.tap();
    await expect(element(by.text('Enter any year'))).toBeVisible();
  });

  it('should show the typed year at the top', async () => {
    // Write test here
  });

  it('should remain at a four digit number when more digits are typed', async () => {
    // Write test here
  });

  it('should show zero if no year is present in the input', async () => {
    // Write test here
  });
});
