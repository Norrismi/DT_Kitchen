import firebase from '../../utils/firebase'
import Router from 'next/router'


const Logout = (provider) => {
    return firebase.auth().signOut()
        .then(
            Router.push('/')
        )
}



export default Logout;
