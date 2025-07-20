const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    
    collection:require('./collection/UserHub API Testing report.json'),
    environment: require('./collection/UserHub Env.postman_environment.json'), 
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
  
