test("get to status page should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);

  const database = responseBody.dependencies.database; 
  expect(database).toBeDefined();
  expect(database.version).toEqual("16.0");
  expect(database.status).toEqual("healthy");
  expect(database.max_connections).toEqual(100);
  expect(database.opened_connections).toEqual(1);
  
});

