function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var elements = ["Email Address"/**0*/, 
                  "Student Name"/**1*/, 
                  "Reason"/**2*/, 
                  "Amount"/**3*/,
                  "Date Received"/**4*/, 
                  "Team Agent"/**5*/,
                  "Agent Email"/**6*/, 
                  "Secret Agent Code"/**7*/, 
                  "Other Reason"/**8*/,
                  "Another Reason"/**9*/, 
                  "Check Number"/**10*/];
  var lastRow = sheet.getLastRow();
  var row1 = sheet.getSheetValues(1, 2, 1, 11); // gets the column labels, that are in the first row
  var data = sheet.getSheetValues( lastRow, 2, 1 , 11); //get the newest submission
  
  var payeeEmail = data[0][row1[0].indexOf("Email Address")];
  var payeeName = data[0][row1[0].indexOf("Student Name")];
  var reason = data[0][row1[0].indexOf("Reason")];
  var price = data[0][row1[0].indexOf("Amount")];
  var sender = data[0][row1[0].indexOf("Team Agent")];
  var checkNumber = data[0][row1[0].indexOf("Check Number")];
  var agentName = data[0][row1[0].indexOf("Team Agent")];
  var agentEmail = data[0][row1[0].indexOf("Agent Email")];
  var agentCode = data[0][row1[0].indexOf("Secret Agent Code")];
//  var otherReason1 = data[0][row1[0].indexOf("Other Reason")];
//  var otherReason2 = data[0][row1[0].indexOf("Check Number")];
//  
  
  var subject = "[846Receipt] " + reason; //subject of the email for payee
  var subjectAgent = "[846Receipt] " + reason + " - " + payeeName;  //subject of the email for team agent
  var currdate = new Date();
  var date = currdate.getMonth()+1 + "/" + currdate.getDate() + "/" + currdate.getFullYear();
  var body;
  var agentBody;
  body = "Your Receipt:\n\tName: " + payeeName + "\n\tAmount: " + price
  + "\n\tReason: " + reason + "\n\tDate: " + date + "\n\tRecorded by: " + sender+ "\n\tCheck Number: " + checkNumber;
  agentBody = "Your Receipt:\n\tName:" + payeeName + "\n\tAmount: " + price
  + "\n\tReason: " + reason + "\n\tDate: " + date + "\n\tRecorded by: " + sender
  + "\n\tSecret Agent Code: " + agentCode + "\n\tCheck Number: " + checkNumber;
 // Logger.log(body);
 // Logger.log(agentBody);
  MailApp.sendEmail(payeeEmail, subject, body);
  MailApp.sendEmail(agentEmail, subjectAgent, agentBody);
//  }
}

function index(list, searchValue){
var i;
  for(i =0; i< list.length; i++){
    if(list[0][i] == searchValue)
      return i;
  }
  return;
  
}