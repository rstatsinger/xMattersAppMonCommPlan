/*
 * To use functions that are defined in a shared library, import
 * the shared library using the require function. You can then
 * access the functions in the shared library. Shared library names
 * are case-sensitive.
 *
 * The following statements show how to use a function named 'myFunction'
 * that is included in a shared library named 'My Shared Library'.
 *
 * var mySharedLibrary = require('My Shared Library');
 * var message = mySharedLibrary.myFunction();
 */


var data;

// If your data is posted as JSON
data = JSON.parse(request.body);
  
// If your data is posted as query string parameters or form post body
// data = request.parameters;

// If your data is posted as xml
// data = JXON.parse(request.body)

// Parse data from incoming payload and construct the trigger object
// trigger.properties.Impact = data.Importance;
// trigger.properties.Summary = data.Summary;
// trigger.properties['Incident ID'] = data['Incident ID'];

trigger.properties.message = data.properties[0].text;
trigger.properties.subject = data.properties[0].subject;
trigger.properties.passedMessage = data.properties[0].passedMessage;
trigger.properties.incidentRule = data.properties[0].incidentRule;
trigger.properties.systemProfile = data.properties[0].systemProfile;
trigger.properties.incidentKey = data.properties[0].incidentKey;
trigger.properties.incidentID = data.properties[0].incidentID;
trigger.properties.appMonServer = data.properties[0].appMonServer;

// Define recipients
//var recipients = [];
// Add a recipient targeting a user or group
//recipients.push({
//    'targetName': 'Operations'
//});
// Add a recipient targeting specific devices
//recipients.push({
//    'targetName': 'bsmith',
//    'devices': ['Work Email', 'Work Phone']
//});
///trigger.recipients = recipients;

// Post trigger to form
 form.post(trigger);
