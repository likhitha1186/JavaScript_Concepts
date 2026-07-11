/*JSON: Javascipt Object Notation is a lightweight data-interchange format
 that is easy for humans to read and write, 
and easy for machines to parse and generate. 
It is often used to transmit data between a server and a web application as text.
*/

let text='{  "employees":['+
'{"firstName":"John", "lastName":"Doe"},'+
'{"firstName":"Anna", "lastName":"Smith"},'+
'{"firstName":"Peter", "lastName":"Jones"} ]}';

let obj = JSON.parse(text); //converts JSON text into a JavaScript object
console.log(obj.employees[1].firstName + "  " + obj.employees[1].lastName); //Anna Smith
console.log(obj.employees[1].firstName + "  " + obj.employees[2].lastName); //Anna Jones

data='{"name":"mkyong","age":30,"address":{"streetAddress":"88 8nd Street","city":"New York", "state":"NY", "postalCode":"10021-3100"},"phoneNumbers":[{"type":"home","number":"212 555-1234"},{"type":"fax","number":"646 555-4567"}]}';

let parsedData = JSON.parse(data);

console.log(parsedData.name); //mkyong
console.log(parsedData["name"]); //mkyong

console.log(parsedData.address.streetAddress); //88 8nd Street
console.log(parsedData["address"]["streetAddress"]); //88 8nd Street
console.log(parsedData["address"].streetAddress); //88 8nd Street

console.log(parsedData.phoneNumbers[0].type); //home
console.log(parsedData["phoneNumbers"][0]["type"]); //home
console.log(parsedData.phoneNumbers[0].type + " " + parsedData.phoneNumbers[0].number); //home 212 555-1234
