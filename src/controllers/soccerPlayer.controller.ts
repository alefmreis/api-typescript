import { Request, Response } from 'express';
import { SoccerPlayerInterface } from '../models/interfaces/soccerPlayer.interface';
import { SoccerPlayerRepository } from '../repositories/soccerPlayerRepository';
import RequestHandler from '../shared/utils/requestHandler';


class SoccerPlayerController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new SoccerPlayerRepository('soccer_players');
      const soccerPlayer: SoccerPlayerInterface = req.body;
      await repository.create(soccerPlayer);
      return RequestHandler.created(res);
    } catch (error) {
      return RequestHandler.error('Error on create a soccer player', error.toString(), res);
    }
  }

  public async findSoccerPlayers(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new SoccerPlayerRepository('soccer_players');
      const soccerPlayers: SoccerPlayerInterface[] = await repository.find({});
      return RequestHandler.success(soccerPlayers, res);
    } catch (error) {
      return RequestHandler.error('Error on search soccer players', error.toString(), res);
    }
  }
}

export default new SoccerPlayerController();
