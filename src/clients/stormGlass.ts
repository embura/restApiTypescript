import { AxiosStatic } from "axios";

export class StormGlass {
    readonly stormGlassParams = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection';
    readonly stormGlassSource = 'noaa'
    private key = 'b4347a54-0cd6-11eb-b2af-0242ac130002-b4347afe-0cd6-11eb-b2af-0242ac130002';
    constructor(protected request: AxiosStatic) { }

    public async fetchPoints(lat: number, lng: number): Promise<{}> {
        const endpoint = `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassParams}&source=${this.stormGlassSource}&end=1592113802&lat=${lat}&lng=${lng}`;
        return this.request.get(endpoint, {
            headers: {
                "Authorization": this.key
            }
        });
    }

}