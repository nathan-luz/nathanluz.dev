test("get to status page", () => {
  fetch("http://localhost:3000/api/v1/status")
    .then((response) => {
      expect(response.status).toBe(200);
    });
});