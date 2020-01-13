import { Container, ContainerModule } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { TYPES } from '../../domain/constants/types';
import { Application } from 'express';

export interface BootstrapConfig {
    appPort: string | number;
}

export async function bootstrap(
    container: Container,
    { appPort }: BootstrapConfig,
    ...modules: ContainerModule[]
) {
    if (container.isBound(TYPES.App)) {
        return container.get<Application>(TYPES.App);
    }

    container.load(...modules);

    const server = new InversifyExpressServer(container);

    const app = server.build();

    app.listen(appPort, () => {
        console.log(`Application listening on port ${appPort}...`);
    });

    container.bind<Application>(TYPES.App).toConstantValue(app);

    return app;
}
