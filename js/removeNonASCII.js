// Removes non-printable ASCII characters.

// Use a regular expression to remove non-printable ASCII characters.

const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');

let a = removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'

console.log(a)
