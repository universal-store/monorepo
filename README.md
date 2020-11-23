# Universal Store

## 1. Overview
Universal Store is a mobile application that eliminates wait times and long lines when shopping for items. As a team, we felt that waiting in long lines just to purchase a few items is inefficient. So, we decided to work with our client, Sneh Parmar, to develop this app and to solve this issue. Besides inefficiency, there are a couple more consequential reasons why it is important to reduce shopping wait times and long lines: customer satisfaction and safety. The purpose of this document is to communicate the delivery information to the customer, the status of the software at the time of hand-off, and the steps to acquire, install, and run the Universal Store mobile application.

## 2. Release Notes Version 1.0

### 2.1 Software Features
-   Signup and login features
-   Map screen that you can navigate to look and search for stores
-   Stores can be selected to start shopping in
-   Barcode scanning feature
-   Item details page that shows information about scanned items and  allows them to be added to cart or favorites
-   Cart page to see all items in your cart
-   Favorites page to see all favorited items
-   Checkout screen, but no actual payment functionality yet

### 2.2 Bug Fixes Since Last Release
-   Not applicable because this is the first release

### 2.3 Known Bugs and Defects
-   No bugs or defects are currently known

## 3. Install Guide

### 3.1 Pre-requisites
-   Android (Mac/Windows) 
    -   Android Studio - https://developer.android.com/studio/install
    -   Android device (to run the app on a physical Android device)
-   iOS App (Mac only)
    -   XCode - Install XCode using the App Store
    -   iOS device (to run the app on a physical iPhone device)

### 3.2 Dependent Libraries
-   Download and Install Yarn
    -   https://classic.yarnpkg.com/en/docs/getting-started
-   Download and Install Node
    -   https://nodejs.org/en/download/

### 3.3 Download Instructions
-   Visit the Universal Store GitHub Repository
    -   https://github.com/universal-store/monorepo
-   Click on the “Code” button and download the ZIP file
-   Unzip the ZIP file and save it in a folder you can access later through command line

### 3.4 Build Instructions
-   Android
    -   Open app/android folder in Android Studio to allow gradle to sync
        -   Located in the monorepo-develop folder (unzipped file)
    -   Once gradle sync has completed, connect an android device to your computer.
-   iOS
    -   Open command line
        -   Terminal for Mac / Command Prompt for Windows
    -   Navigate to monorepo-develop/app folder using cd 
    -   Run *yarn ios:pods*
    -   Run *yarn ios:build*
    -   These two commands create a bundle of all JavaScript code that will run from the app natively

### 3.5 Installing the App
-   Android
    -   After gradle sync has completed, open command line 
        -   Terminal for Mac / Command Prompt for Windows
    -   Navigate to the monorepo-develop/app folder using cd
    -   Type run *yarn android*
        -   This command will build the app on the Android device connected to the computer
-   iOS
    -   After running the two yarn commands in command line, open XCode application (if not downloaded, install from App Store)
    -   Open UniversalStore.xcworkspace file in XCode
        -   This will open the entire project.
    -   Click UniversalStore icon from the files list on the left
    -   Navigate to Signing & Capabilities
    -   Under the “Team” selection, click on your Apple profile
    -   Connect an iPhone to your computer
    -   At the top bar, select the drop down for where it says “Any iOS device”
    -   Select your connected device 
    -   Click Universal Store tab located left of drop down just used
    -   Click Edit Scheme
    -   Change build configuration from debug to release
    -   In the General tab, change Bundle Identifier to org.reactjs.native.example.UniversalStore1
    -   Navigate to Build Phases, and then go to the section “Bundle React Native code and images”, change the code in this section to the following:
        -   export NODE_BINARY=(which) node ../../node_modules/react-native/scripts/react-native-xcode.sh  
    -   Click Play button at the top bar 
        -   This installs the app to your iPhone

### 3.6 Run Instructions
-   To run the app on your iPhone/Android, simply tap on the Universal Store app icon on your device

### 3.7 Troubleshooting
-   iOS
    -   If during app installation it says it failed due to lack of verification in your physical device
        -   Visit the settings app on your iPhone and navigate to General
        -   Then visit the Device Management tab
        -   Click on the Developer App tab
        -   Verify Universal Store
    -   In XCode, rebuild the app by clicking the Play button again
        -   This should allow the app to install with no errors on to your iPhone 

