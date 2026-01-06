
export const fileValidator = (value: unknown) => {
  const pattern = /\.(pdf|png|jpg|jpeg)$/i;

  if (value instanceof File) {

    if (!pattern.test(value.name)) {
      return false
    }
  }

  return true;
};
