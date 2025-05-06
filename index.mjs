// index.mjs
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda AND FROM YAMINI AND GROUP 19!'),
  };
  return response;
};
