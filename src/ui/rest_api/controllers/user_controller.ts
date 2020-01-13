import { controller, httpGet } from 'inversify-express-utils';

@controller('/users')
export class UserController {

    @httpGet('/')
    public async getCurrentUser() {
        return 'get current user'
    }
}
