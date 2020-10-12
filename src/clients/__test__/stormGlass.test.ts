import axios from "axios";
import { StormGlass } from '@src/clients/stormGlass';
import stormglass3hoursFixture from "@test/fixture/stormglass-weather_3hours.json"

jest.mock('axios');

describe('StromGlass client', () => {
    it("should return normalize forecast from the StromGlass service", async () => {
        const lat = 58.7984;
        const lng = 17.8081;

        axios.get = jest.fn().mockReturnValue(stormglass3hoursFixture);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);

        expect(response).toEqual(stormglass3hoursFixture);
    });
})