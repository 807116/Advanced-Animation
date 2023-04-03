function simulate100PrisonerProblem(numPrisoners) {
    // Initialize the array of cells with random values
    const cells = Array.from({ length: numPrisoners }, () => Math.floor(Math.random() * numPrisoners));
  
    // Initialize the counters for the number of attempts and successes
    let attempts = 0;
    let successes = 0;
  
    // Loop over all the prisoners
    for (let i = 0; i < numPrisoners; i++) {
      // Initialize the current prisoner's index and the number of attempts for this prisoner
      let currentIndex = i;
      let numAttempts = 0;
  
      // Keep trying to find the correct cell until the maximum number of attempts is reached or the correct cell is found
      while (numAttempts < numPrisoners && cells[currentIndex] !== i) {
        currentIndex = cells[currentIndex];
        numAttempts++;
      }
  
      // If the correct cell was found, increment the successes counter
      if (cells[currentIndex] === i) {
        successes++;
      }
  
      // Increment the total attempts counter
      attempts += numAttempts;
    }
  
    // Calculate and return the average number of attempts per prisoner and the success rate
    const avgAttempts = attempts / numPrisoners;
    const successRate = successes / numPrisoners;
  
    return { avgAttempts, successRate };
  }
  
  // Example usage:
  console.log(simulate100PrisonerProblem(100));
  