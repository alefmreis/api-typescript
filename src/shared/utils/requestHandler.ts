import { Response } from 'express';

class RequestHandler {
  success(data, response: Response): Response {
    response.status(200);
    response.json(data);
    return response;
  }

  error(message: string, error, response: Response): Response {
    response.status(500);
    response.json({
      message,
      error
    })
    return response;
  }

  badRequest(data, response: Response): Response {
    response.status(400);
    response.send(data);
    return response;
  }

  created(response: Response): Response {
    response.status(201);
    response.send();
    return response;
  }
}

export default new RequestHandler();
