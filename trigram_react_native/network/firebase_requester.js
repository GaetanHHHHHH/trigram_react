//-----------------------------------
// Imports
//-----------------------------------

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 // ---------- Constructors ----------

    /**
     * Is the constructor of the Firebase requester.
     * 
     * No parameters needed.
     */

        /**
         * Is the configuration used to get access to the database.
         */
        const firebaseConfig = {
            apiKey: "AIzaSyDObLEvazGsTmGSZgGjoJbY7hH2LcwVXlo",
            authDomain: "projetmobile-ed818.firebaseapp.com",
            databaseURL: "https://projetmobile-ed818-default-rtdb.europe-west1.firebasedatabase.app/",
            projectId: "projetmobile-ed818",
            storageBucket: "projetmobile-ed818.appspot.com",
            messagingSenderId: "133062054548",
            appId: "1:133062054548:web:5559026e37bb63f8571a81"};

        initializeApp(firebaseConfig)

    // ---------- Methods ----------

//-----------------------------------
// Exports
//-----------------------------------

    export default firebaseConfig;