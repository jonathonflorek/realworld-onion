import 'reflect-metadata';
import { bootstrap } from './infrastructure/bootstrapping/bootstrap';
import { container } from './infrastructure/ioc/ioc_container';
import { referenceDataIoCModule } from './inversify.config';

export async function runApp() {
    const app = await bootstrap(
        container,
        { appPort: process.env.PORT || 8080 },
        referenceDataIoCModule,
    );
    return app;
}

(async () => {
    await runApp();
})();
