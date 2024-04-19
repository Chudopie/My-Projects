const supertest = require("supertest");
const app = require("./fake_user_server");
const { request } = require("http");

describe("GET / user/:id", () => {
  it("should respond with a user info", async () => {
    const userId = 233;
    const respuesta = await request(app)
      .get(`/user/:${userId}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(respuesta.body).toEqual({
      id: userId + "",
      name: "John Doe",
      email: "john@example.com",
    });
  });
});
