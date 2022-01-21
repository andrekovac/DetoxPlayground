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

  const typedYear = '2000';
  it('should show the typed year at the top', async () => {
    await element(by.id('yearTextInput')).typeText(typedYear);

    await expect(element(by.id('resultText'))).toHaveText(typedYear);
  });

  it('should remain at a four digit number when more digits are typed', async () => {
    await element(by.id('yearTextInput')).typeText('000');

    await expect(element(by.id('resultText'))).toHaveText(typedYear);
  });

  it('should show zero if no year is present in the input', async () => {
    await element(by.id('yearTextInput')).clearText();

    await expect(element(by.id('resultText'))).toHaveText('0');
  });
});
