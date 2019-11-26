import { Request, Response } from 'express';
import { SoccerTeamInterface } from '../models/interfaces/soccerTeam.interface';
import { SoccerTeamRepository } from '../repositories/soccerTeamRepository'
import RequestHandler from '../shared/utils/requestHandler';
import database from '../shared/database/database';


class SoccerTeamController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const db = await database.getDB();
      const repository = new SoccerTeamRepository(db, 'soccer_teams');
      const soccerPlayer: SoccerTeamInterface = req.body;
      await repository.create(soccerPlayer);
      return RequestHandler.created(res);
    } catch (error) {
      return RequestHandler.error('Error on create a soccer team', error.toString(), res);
    }
  }

  public async findSoccerTeams(req: Request, res: Response): Promise<Response> {
    try {
      const db = await database.getDB();
      const repository = new SoccerTeamRepository(db, 'soccer_players');
      const soccerTeams: SoccerTeamInterface[] = await repository.find({});
      return RequestHandler.success(soccerTeams, res);
    } catch (error) {
      return RequestHandler.error('Error on search soccer teams', error.toString(), res);
    }
  }
}


export default new SoccerTeamController();
