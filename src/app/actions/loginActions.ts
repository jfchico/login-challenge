import { LOGIN_AUTH } from './actionsTypes';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ? process.env.REACT_APP_GOOGLE_CLIENT_ID : '675980648818-t4dr5o1d5pi9gbeq153t4n50juk9e6m2.apps.googleusercontent.com';

export interface authCookieModel {
    name: string;
    email: string;
    tokenId: string;
}

export const handleLogin = (googleData: any) => (dispatcher: any) => {
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(clientId);

    client.verifyIdToken({
        idToken: googleData.tokenId,
        audience: clientId
    }).then((ticket: any) => {
        const { name, email } = ticket.getPayload();
    
        dispatcher({type: LOGIN_AUTH, payload: {name, email, tokenId: googleData.tokenId}});
    });

}