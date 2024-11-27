function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  // Function definitions in your main file (e.g., index.js)

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  const wrapAdjective = function(wrapper = '*') {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  };
  
  // Export the functions to make them accessible in your test files

  