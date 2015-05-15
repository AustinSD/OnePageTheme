Meteor.startup(function () {
// code to run on server at startup
feedReader();
});
function feedReader() {
var collections = {
feeds: Feeds,
feed_entries: FeedEntries
}
Feed.collections(collections);
var twitter_feed = {
	_id: "Bryan's Twitter",
	category: "Twitter",
	link: "https://twitter.com/bryan619",
	refresh_interval: 5000
//_id: Meteor.settings.twitter_id,
/*category: Meteor.settings.twitter_category,
link: Meteor.settings.twitter_link,
refresh_interval: Meteor.settings.twitter_refresh_interval*/
};
Feed.createTwitterFeed(twitter_feed);
var twitter_parameters = {
	consumer_key: "uBcGu73u0L1y8hW911rdj5bru",
consumer_secret: "dZqgB4JdWSeexTdxfvpHjakzBxVPAHcFt2FFP8O94tfIC7ZyvA",
access_token: "381206011-oIHSdW6oAy3lgj7I78LoEWXkesGyKNpBZTpu8KSs",
access_token_secret: "eiPUeNU3VtKvA7cEEAIBOBOrGj7KV9KwuanUUedXZf2NZ",
screen_name: "bryan619"
/*consumer_key: Meteor.settings.twitter_consumer_key,
consumer_secret: Meteor.settings.twitter_consumer_secret,
access_token: Meteor.settings.twitter_access_token,
access_token_secret: Meteor.settings.twitter_access_token_secret,
screen_name: Meteor.settings.twitter_screen_name*/
};
Feed.initTwitterFeed(twitter_parameters);
// invoke feedReader to get real-time reactive social stream
Feed.read();
}