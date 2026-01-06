export const BaseUrl = 'http://localhost:8000'
export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return `${BaseUrl}/api/v1/`;
  } else {
    return `${BaseUrl}/api/v1/`;
  }
};
