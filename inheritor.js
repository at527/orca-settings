
// Read the JSON file
const filePath = '0.20mm Standard @Elegoo Neptune3.json';
const jsonData = JSON.parse(Deno.readFile(filePath, 'utf8'));

console.log(jsonData)
// Now jsonData contains the parsed JSON content
