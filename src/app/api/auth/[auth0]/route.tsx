import UserService from "@/app/services/user-service";
import { handleAuth, handleCallback } from "@auth0/nextjs-auth0/edge";

export const GET = handleAuth({
  callback: async (req: any, res: any) => {
    try {
      return await handleCallback(req, res, {
        afterCallback: async (req: any, session: { user: any }, state: any) => {
          const userService: UserService = new UserService();

          const user = await userService.getUserBySub(session.user.sub);

          if (user.length > 0) {
            return session;
          }

          userService.createUser(
            session.user.email,
            session.user.nickname,
            session.user.sub
          );

          return session;
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
});

export const runtime = "edge";
