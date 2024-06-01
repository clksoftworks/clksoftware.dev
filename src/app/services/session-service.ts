import { getSession } from '@auth0/nextjs-auth0/edge';
import UserService from './user-service';


export default class SessionService {
    static async getSession() {
        const userService: UserService = new UserService();

        const session = await getSession();

        if (!session) {
            return null;
        }

        const userRecord = await userService.getUserBySub(session.user.sub);

        if (!userRecord.length) {
            return null;
        }

        return {
            user: userRecord,
        }
    }
}

export const runtime = "edge";