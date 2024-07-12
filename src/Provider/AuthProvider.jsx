import { createUserWithEmailAndPassword, signInWithEmailAndPassword , GoogleAuthProvider, signOut , signInWithPopup, updateProfile, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";


export const AuthContext = createContext([]);


const AuthProvider = ({ children }) => {

  const axiosPublic = useAxiosPublic()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
 

  const googleProvider = new GoogleAuthProvider();

  // google login  

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
 
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo

    })
  }



  //   create User 

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }



  //   loging  Account 

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //   logOut account 

  const logOut = () => {
    return signOut(auth);

  }

  // using Obseverb    ata  user ke  deka suna kore  

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        if (user) {
            // TODO 
            const userInfo = { email: user.email }
            // axiosPublic.post('/jwt', userInfo)
            .then(res=>{
               if (res.data.token) {
                localStorage.setItem('access-token', res.data.token)
                setLoading(false)
               }
            })
        }
        else {
            // TODO 
            localStorage.removeItem('access-token')
            setLoading(false)
        }
        

    });
    return () => {
        unSubcribe()

    }
}, [axiosPublic]);



  const authInfo = {
    googleLogin,
    createUser,
    user,
    signInUser,
    logOut,
    loading,
    handleUpdateProfile,
  };
  return (

    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
    // <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
