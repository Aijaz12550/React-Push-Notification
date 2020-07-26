import {fire, db} from '../credentials/firebase'

export const getfcmtoken = (app) => {
  fire.messaging().useServiceWorker(app);

                       fire.messaging().getToken().then(function(currentToken) {
                         console.log('fcm token',currentToken)
                         db.ref('/').set({name:"aijaz"})
                       }).catch(function(error) {
                           console.error('Unable to get messaging token.', error);
                       });






}
