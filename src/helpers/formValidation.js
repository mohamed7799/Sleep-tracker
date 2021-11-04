export const validateForm = (userDataObj, setUserDataEmptyFlag) => {
  let emptyFlag = false;
  for (const property in userDataObj) {
    if (userDataObj[property] === "") {
      setUserDataEmptyFlag((prevState) => ({
        ...prevState,
        [property]: true,
      }));
      emptyFlag = true;
    } else {
      setUserDataEmptyFlag((prevState) => ({
        ...prevState,
        [property]: false,
      }));
    }
  }
  return emptyFlag;
};
