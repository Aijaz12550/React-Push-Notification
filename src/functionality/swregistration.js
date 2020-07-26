import { getfcmtoken} from './getfcmtoken'
export default function RegisterSW() {

  let swConfig = `${process.env.PUBLIC_URL}/swConfig.js`
if('serviceWorker' in navigator){
  navigator.serviceWorker.register(swConfig).then(app=>{
    console.log('service worker registration',app)
    getfcmtoken(app)
  })
}
}
