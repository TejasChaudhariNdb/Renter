import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config ={
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

class base{

 constructor(){
  app.initializeApp(config)  
  this.auth = app.auth();
  this.db = app.firestore();

 }

 login(email,password){
   return this.auth.signInWithEmailAndPassword(email,password);
 }

 logout(){
   return this.auth.signOut();
 }

async register(name,email,password){

  console.log(email)

await this.auth.createUserWithEmailAndPassword(email,password);

return this.auth.currentUser.updateProfile({
displayName:name

})

}

isInitalized(){

  return new Promise(resolve =>{
    this.auth.onAuthStateChanged(resolve)
  })

}

getCurrentUserName(){
  return this.auth.currentUser && this.auth.currentUser.displayName;
}


}

export default new base();
