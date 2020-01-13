import { ContainerModule } from 'inversify';

// Controllers - inversify-express-utils doesn't require bindings for these
import './ui/rest_api/controllers/user_controller';

export const referenceDataIoCModule = new ContainerModule((_) => {

});
