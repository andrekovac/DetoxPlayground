// import detox functions to prevent TS errors
import { by, device, expect, element } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // Equivalent to pressing CMD+R in the simulator window.
    // It will just reload the React Native bundle.
    await device.reloadReactNative();
  });

  it('should have a container', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
