import './util/modules-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForcastController } from './controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupController();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const endpoints = this.app._router.stack.filter((route: any) => {
            return route.name == 'router';
        });
        console.debug({ endpoints });
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupController(): void {
        const forecastController = new ForcastController();
        this.addControllers([forecastController]);
    }

    public gerApp(): Application {
        return this.app;
    }
}
