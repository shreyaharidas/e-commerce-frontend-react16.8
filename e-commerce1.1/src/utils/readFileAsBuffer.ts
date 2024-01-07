export const readFileAsBuffer = async (file: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      // Event handler for when the file reading is complete
      reader.onload = () => {
        // Check if the result is a Data URL
        if (typeof reader.result === 'string') {
          // Resolve the promise with the Data URL
          resolve(reader.result);
        } else {
          // Reject the promise with an error if the result is not a Data URL
          reject(new Error('Failed to read file as Data URL'));
        }
      };
  
      // Event handler for file reading errors
      reader.onerror = (error) => {
        // Reject the promise with the encountered error
        reject(error);
      };
  
      // Read the file as a Data URL
      reader.readAsDataURL(file);
    });
  };