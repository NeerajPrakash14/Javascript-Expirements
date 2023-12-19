// Testing the effect of using extensive try/catch blocks in JavaScript code can involve comparing the performance with and without the blocks. 
// You can measure the runtime performance using the performance.now() method or other profiling tools available in browsers.


// Function with extensive try/catch blocks
function withTryCatch() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      try {
        sum += i;
      } catch (error) {
        console.error("Error occurred:", error.message);
      }
    }
    return sum;
  }
  
  // Function without try/catch blocks
  function withoutTryCatch() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Measure time with try/catch blocks
  const startTime1 = performance.now();
  withTryCatch();
  const endTime1 = performance.now();
  console.log("Time taken with try/catch blocks:", endTime1 - startTime1, "milliseconds");
  
  // Measure time without try/catch blocks
  const startTime2 = performance.now();
  withoutTryCatch();
  const endTime2 = performance.now();
  console.log("Time taken without try/catch blocks:", endTime2 - startTime2, "milliseconds");
  