// To Store all the details to local Storage.

export default function Serialize(storeToken,storeUser){
    const serialized_token =  JSON.stringify(storeToken);
    const serialized_auth = JSON.stringify(true);
    const serialized_user = JSON.stringify(storeUser);
    window.localStorage.setItem('Auth_state' , serialized_auth )
    window.localStorage.setItem('Auth_token' , serialized_token )
    window.localStorage.setItem('Auth_user', serialized_user)
}