import { google } from 'googleapis';
import readline from 'readline';

const CLIENT_ID = '365104062616-21l08t3jnfoh67mu30dond05ntsl1c6a.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:4321/callback';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this url:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', (code) => {
  rl.close();
  oauth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    console.log('\n========================================');
    console.log('REFRESH TOKEN:');
    console.log(token.refresh_token);
    console.log('========================================\n');
    console.log('Guarda este refresh token en tu .env como:');
    console.log('GA_REFRESH_TOKEN=' + token.refresh_token);
  });
});