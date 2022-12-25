export const removeProtocol = (string: string) => {
  return string.replace(/https?:\/\//, '');
};
