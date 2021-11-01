# Frameworks and tools

## 1.0 Website
We want to build:
1. A standard parent QMIND branded website to host all projects under portfolios.qmind.ca
1. A dashboard with some empty information grabbed from some random source (perhaps we grab info on a stock just to populate some basic stats)
1. An integration with a computer vision model on the backend of the website to make predictions by using the webcam or uploading a file. 

### 1.1 Backend framework: Django/Python
For the backend development of the website templates we will use [Django](https://www.djangoproject.com/). 
#### 1.1.1 Installing Django
With python installed you should be able to install Django simply using the package installer pip.

```pip install django```

### 1.2 Front-end framework: React.js
[React.js](https://reactjs.org/) will be used to built user friendly front-end interfaces for our websites. 
#### 1.2.1 Installing React.js
1. Install Node.js [here](https://nodejs.org/en/download/)
1. Install Bootstrap and Reactstrap packages:

```npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps```

### 1.3 Resources
- [Tutorial: Django / React simple website](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)

## 2.0 Mobile application
We want to build:
1. A blank QMIND branded mobile app
1. An integration with tensorflow.js for a computer vision template

### 2.1 Development framework: React Native
For the development of mobile applications we will use React Native. We will use [Expo](https://expo.dev/) to build these app templates in React Native.  

#### 2.1.1 Installing Expo
Prequesites include first installing Node.js or the npm package manager. 
1. Then you should be able to install expo with npm:

```npm install --global expo-cli```

2. You will also want to be sure to install the [Expo go app](https://expo.dev/client) from the Google Play Store or App Store so that you can run these applications in a test environment. 


More info on installing React Native can be found [here](https://docs.expo.dev/get-started/installation/)

### 2.2 Resources
- 