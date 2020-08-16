import supertest from "supertest";


describe("Beach forecast functional tests", () => {
    it("should return a forecast with just a few minute", async () => {
        const { body, status } = await supertest(app).get('/forecast');


        expect(status).toBe(200)
        expect(body).toBe([
            {
                time: "1234123123",
                forecast: [
                    {
                        lat: "xxxxxx",
                        lng: "yyyyyyy"
                    }
                ]
            }
        ])

    })

})