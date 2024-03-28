# SimpleStudy Test

Social Sharing Test

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [iOS Installation](#ios-installation)
  - [Android Installation](#android-installation)
- [Architecture](#architecture)
- [Components](#components)
- [Challenges](#challenges)
- [Approach](#approach)

## Getting Started

Provide instructions for setting up and running your project locally. Include any prerequisites, installation steps, and configuration details.

### Prerequisites

**Js Library:** React Native CLI

**Tools:** Xcode or Android Studio

### iOS Installation

Step-by-step instructions on how to install your project. [Basic iOS](https://reactnative.dev/docs/environment-setup?platform=ios).

```bash
git clone https://github.com/elvismilan/SimpleStudyTest
cd SimpleStudyTest
cd ios
pod install
open simplestudytest.xcworkspace
npm run ios
```

### Android Installation

Step-by-step instructions on how to install your project. [Basic Android](https://reactnative.dev/docs/environment-setup?platform=android).

```bash
git clone https://github.com/elvismilan/SimpleStudyTest
cd SimpleStudyTest
npm run android
```

## Architecture

Component-based architecture

## Components

I have used this components:
[React Native Share](https://github.com/react-native-share/react-native-share)

## Challenges

Structure our folder for the hold project also we can implement Atomic Design in the components.

```bash
- src
  - components
    - Button.js
    - Header.js
  - screens
    - HomeScreen.js
    - ProfileScreen.js
  - utils
    - api.js
  - App.js
```

## Approach

Atomic Design will help us to re use the components.
