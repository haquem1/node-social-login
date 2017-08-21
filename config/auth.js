module.exports = {
    'facebookAuth' : {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK
    },
    'twitterAuth' : {
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK
    },
    'googleAuth' : {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        returnURL: process.env.GOOGLE_RETURN
    }
};
