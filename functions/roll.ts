const roll = (max: number) => {
  const result = Math.floor(Math.random() * max) + 1;
  return result;
};

export default roll;