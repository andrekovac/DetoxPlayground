# Detox Playground

Small React Native App to learn about [Detox](https://github.com/wix/Detox) end-to-end tests running on the iOS Simulator.

## Table of contents

- [Detox Playground](#detox-playground)
  - [Table of contents](#table-of-contents)
  - [Run end-to-end tests](#run-end-to-end-tests)
    - [Setup](#setup)
    - [Run test](#run-test)
    - [Notes](#notes)

## Run end-to-end tests

### Setup

1. Clone this repository
2. Run `git checkout input-e2e-tests-start -b my-detox-tests` by replacing `my-detox-tests` with a branchname of your choice. This will create a new local branch at the git tag `input-e2e-tests-start`.
3. Run `yarn` to install the project dependencies.
4. If you haven't yet installed the extra tools for Detox end-2-end tests (as described in the preparation exercise) do it now. Alternatively follow the official [guide to set up an iOS development & testing environment](https://wix.github.io/Detox/docs/introduction/ios-dev-env).
5. Run `cd ios && pod install` to install the Cocoapods dependencies (`cocoapods` has to be installed globally on your machine).
6. Run `yarn start` to start the development server.
7. In a separate terminal window: Run `yarn ios` to confirm that the app starts in an iOS Simulator.

### Run test

1. Make sure an iOS Simulator is already running (if you ran `yarn ios` before this should be the case).
2. Run this command to build the App in release mode. This only has to be done once:

    ```
    yarn test:e2e:ios:release:build
    ```

3. Run all existing end-2-end tests via this command:

    ```
    yarn test:e2e:ios:release
    ```

You should see the tests running in the console and something happening in the iOS Simulator.

A successful test run should print the following to the console:

<img width="600" alt="image" src="https://user-images.githubusercontent.com/1945462/150637369-a0fe69f5-679a-4cb6-b79e-6a0452f90681.png">


### Notes

Any branch after **tag** `input-e2e-tests-start` has Detox installed for **iOS** (not **Android**).
