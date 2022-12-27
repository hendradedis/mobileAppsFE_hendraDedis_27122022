# _signUp with AsyncStorage_

![N|Solid](https://www.pngitem.com/pimgs/m/514-5142665_react-native-transparent-react-native-logo-png-png.png)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


<img src="https://user-images.githubusercontent.com/31977125/209681971-33e37ce8-29a8-46f9-b2da-f9a493b3186b.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681963-cd0e1f6a-302f-4ef8-9323-3054b1002c5e.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681926-f2958351-aa24-44b4-a2ab-40418df38acd.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" />
<img src="https://user-images.githubusercontent.com/31977125/209681957-cbfb15ae-60c9-463d-8ad3-1ef8f5da3298.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681953-bfd6e529-9b10-4853-913f-e23565e7b644.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681948-2cc61a44-731c-4b96-986b-e7a5343837b9.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" />
<img src="https://user-images.githubusercontent.com/31977125/209681942-86c3bd5f-9d78-4c17-9b81-5fbb79ade72c.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681911-1a29ee87-f14c-461e-821b-e30276a58c12.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" /><img src="https://user-images.githubusercontent.com/31977125/209681895-a92b0220-73af-4889-9cc6-01e576866142.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" />




the experiment is to build an app WOM apps , user signup and signIn with Asycnstorage

#Feature
- we can create user on register screen , and we have validation:
  - validation email on username
  - validation password on 8 character, uppercase, lowercaseand also number
  - validation password on retype password must the same
- we can login using the account that we created at the register 
- at home we can see our username and password and also logout 

notes : 
- we cant back with back button on device at home screen just if we want back we klik logout
- also on login screen we can back on device button , we just can force close app

# Contents
* [How to run demo application](#How-to-run-demo-application)
* [Recomendation](#Recomendation)
* [Additional information](#additional-information)


## How to run demo application
1. make sure you are able to run the react native application [install React native](https://reactnative.dev/docs/environment-setup) instructions on how to install react native
2. clone this repository using the command terminal `git@github.com:hendradedis/mobileAppsFE_hendraDedis_27122022.git` with `.SSH key`.
3. clone this repository using the command terminal `https://github.com/hendradedis/mobileAppsFE_hendraDedis_27122022.git` with `without .SSH`.
3. after that open repo the following commands in Terminal:

```bash
$ cd mobileAppsFE_hendraDedis_27122022
$ npm install or (if using yarn) yarn install
$ cd ios
$ pod install
$ cd ..
$ git checkout master (master branch for run)
$ npx `npx react-native run-android` for Android run
$ npx `npx react-native run-ios for` Ios run

if you have probleme with pod ios , you can run it
$ cd ios
$ RCT_NEW_ARCH_ENABLED=1 pod install
```

## Recomendation
- Node -v : v16.18.1
- pod --version : 1.11.3
- java --version : openjdk 11.0.17 2022-10-18 LTS

## Additional information
- help me for improvement this app


# Enjoy 




