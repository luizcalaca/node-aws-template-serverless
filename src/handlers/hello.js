async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Goiânia, Goiás, Brazil' }),
  };
}

export const handler = hello;


