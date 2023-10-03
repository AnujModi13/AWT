Array.prototype.firstElement = function() {
    if (this.length === 0) {
      return 0;
    }
    return this[0];
  };
Array.prototype.lastElement = function() {
    if(this.length === 0) return 0
    return this[this.length-1];
}
  
  // Now you can use the firstElement method on any array
  const myArray = [1, 2, 3, 4, 5];
  console.log("first element of array : " , myArray.firstElement()); // Output: 1
  console.log("last element of array : " , myArray.lastElement()); // Output: 5

String.prototype.countWords = function() {
    const words = this.split(' ');
    return words.length
  };
  
String.prototype.reverseString = function() {
    const words = this.split('').reverse().join('');
    return words;
}
  const myString = "Hello, this is a sample sentence.";
  console.log("total words : " ,myString.countWords()); 
  console.log("reverse string : ", myString.reverseString());
