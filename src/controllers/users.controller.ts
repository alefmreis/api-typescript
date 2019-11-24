import { Response, Request } from 'express';
import RequestHandler from '../shared/utils/requestHandler';
import User from '../models/user.model';

class UserController {
  public async findUsers(req: Request, res: Response): Promise<Response> {
    try {
      const query = req.query;
      const users = await User.find(query).lean();
      return RequestHandler.success(users, res);
    } catch (error) {
      return RequestHandler.error('Error on search users', error.toString(), res);
    }
  }

  public async findUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.findOne({ email: req.params.email });
      return RequestHandler.success(user, res);
    } catch (error) {
      return RequestHandler.error('Error on search user', error.toString(), res);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body;
      await User.create(user);
      return RequestHandler.created(res);
    } catch (error) {
      return RequestHandler.error('Error on create users', error.toString(), res);
    }
  }


}

export default new UserController();
