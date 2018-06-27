import firebase from 'firebase/app'
import 'firebase/auth'

const devConfig = {
    apiKey: "AIzaSyBm8M8Xu_kqRaciBf5dOzIYzAP88_BAndM",
    authDomain: "diyshop-3de5e.firebaseapp.com",
    databaseURL: "https://diyshop-3de5e.firebaseio.com",
    projectId: "diyshop-3de5e",
    storageBucket: "diyshop-3de5e.appspot.com",
    messagingSenderId: "998626705679"
  };
  const prodConfig = {
    apiKey: "AIzaSyBm8M8Xu_kqRaciBf5dOzIYzAP88_BAndM",
    authDomain: "diyshop-3de5e.firebaseapp.com",
    databaseURL: "https://diyshop-3de5e.firebaseio.com",
    projectId: "diyshop-3de5e",
    storageBucket: "diyshop-3de5e.appspot.com",
    messagingSenderId: "998626705679"
  };

  const config=process.env.MODE_ENV==='production'
  ? prodConfig
  : devConfig


  if(!firebase.apps.length){
      firebase.initializeApp(config);
  }

  const auth=firebase.auth();

  export{
      auth
  }



















