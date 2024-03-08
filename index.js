// Helper function to sort an array of numbers in ascending order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Main code to use the helper function
  const numbers = [5, 2, 9, 1, 6]; // You can change the array elements
  const sortedNumbers = sortAscending(numbers);
  console.log(`Sorted numbers in ascending order: ${sortedNumbers}`);
  