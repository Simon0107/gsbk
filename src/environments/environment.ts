import firebase from '@firebase/app';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export const firebaseConfig = {
  apiKey: 'AIzaSyD3wyWVoQlHX7FiMPyH9eaSbykFfBz3e8c',
  authDomain: 'gsbk-75e55.firebaseapp.com',
  databaseURL: 'https://gsbk-75e55.firebaseio.com',
  projectId: 'gsbk-75e55',
  storageBucket: 'gsbk-75e55.appspot.com',
  messagingSenderId: '749455123851',
  appId: '1:749455123851:web:3bb4ca7a9c36e936c17b8e',
  measurementId: 'G-VQ4782F4DC'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
