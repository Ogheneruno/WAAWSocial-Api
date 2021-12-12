const sendEmail = require('../config/mailer');

const welcomeEmail = async (req, username, email, secretToken) => {
    const html = `
        Welcome to WAAWChat ${username}, we're excited to have you join us.
        <br/>
        <br/>
        You can copy and paste the following code <strong>${secretToken}</strong> in the confirmation page
        or click on the link below to activate you account.
        <br/><br/>
        confirmation Link: https://${req.headers.host}/user/confirm-account/${secretToken}
        <br/>
        <br/>
        WAAWChat will give you the best experience ever!!!!!!!!
        <br/>
        <br/>
        Cheers,
        <br/>
        <strong>WAAWChat Team</strong>
    `;

    await sendEmail (
        'support@WAAWChat..com',
        email,
        'Welcome to WAAWChat',
        html
    );
}


module.exports = welcomeEmail;