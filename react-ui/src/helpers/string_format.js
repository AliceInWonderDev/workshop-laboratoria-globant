const getAllFirstLetter = (str) => {
  let newStr = "";

  str.split(" ").forEach(word => {
    newStr += word.charAt(0).toUpperCase();
  });

  return newStr;
};

export default getAllFirstLetter;
