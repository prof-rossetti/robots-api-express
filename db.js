var mongoose = require( 'mongoose' );

var mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/robots-api';
mongoose.connect(mongoConnectionString); // establishes a database connection which may in some cases need to be manually closed via disconnect();

module.exports = mongoose;
