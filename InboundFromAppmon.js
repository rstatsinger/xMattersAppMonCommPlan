/*
 * Script for Inbound Integrations from Dynatrace AppMon. Handles notifications from the xMatters Plugin for AppMon.
 */

var data;

// If your data is posted as JSON
data = JSON.parse(request.body);

trigger.properties.message = data.properties[0].text;
trigger.properties.subject = data.properties[0].subject;
trigger.properties.passedMessage = data.properties[0].passedMessage;
trigger.properties.incidentRule = data.properties[0].incidentRule;
trigger.properties.systemProfile = data.properties[0].systemProfile;
trigger.properties.incidentKey = data.properties[0].incidentKey;
trigger.properties.incidentID = data.properties[0].incidentID;
trigger.properties.appMonServer = data.properties[0].appMonServer;

// Post trigger to form
 form.post(trigger);
