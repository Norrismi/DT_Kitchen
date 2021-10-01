import firebase from '../../utils/firebase';
import Router from 'next/router'



const SocialMediaAuth = (provider) => {


    return firebase.auth().signInWithPopup(provider).then((res) => {
        return res.user
    }).then(
        Router.push('/orderForm')
    ).catch((err) => {
            return err;
        })



}


export default SocialMediaAuth;
