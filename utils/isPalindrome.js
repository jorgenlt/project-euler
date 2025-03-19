const isPalindrome = (str) => {
  if (str === str.split("").reverse().join("")) {
    return true;
  }

  return false;
};

export default isPalindrome;
