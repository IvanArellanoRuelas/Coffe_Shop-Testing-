const request = require("supertest");
const server = require("../index");

describe("GET /cafes", () => {
  it("should return status code 200", async () => {
    const response = await request(server).get("/cafes");
    expect(response.status).toBe(200);
  });
  it("Should return a array with 1 element", async () => {
    const { body } = await request(server).get("/cafes");
    const cafes = body;
    expect(cafes).toBeInstanceOf(Object);
  });
});

describe("DELETE /cafes", () => {
  it("Delete a coffee", async () => {
    const response = await request(server).delete("/cafes/5");
    expect(response.status).toBe(400);
  });
});

describe("POST /cafes", () => {
  it("Add a Coffe", async () => {
    const response = await request(server).post("/cafes");
    expect(response.status).toBe(201);
  });
});

describe("PUT /cafes", () => {
  it("Update a Coffe", async () => {
    const response = await request(server).put("/cafes/5");
    expect(response.status).toBe(400);
  });
});
