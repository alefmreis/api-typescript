import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { BrandInterface } from '../models/interfaces/brand.interface';
import { BrandRepository } from '../repositories/brandRepository';
import RequestHandler from '../shared/utils/requestHandler';

class BrandController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new BrandRepository('brands');
      const brand: BrandInterface = req.body;
      await repository.create(brand);
      return RequestHandler.created(res);
    } catch (error) {
      return RequestHandler.error('Error on create a brand', error.toString(), res);
    }
  }

  public async findBrands(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new BrandRepository('brands');
      const brands: BrandInterface[] = await repository.find({});
      return RequestHandler.success(brands, res);
    } catch (error) {
      return RequestHandler.error('Error on search brands', error.toString(), res);
    }
  }

  public async findBrandById(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new BrandRepository('brands');
      const { id } = req.params;
      const brand: BrandInterface | null = await repository.findOne({ _id: new ObjectId(id) });
      
      if (!brand) {
        return RequestHandler.badRequest({ message: 'Brand not found' }, res);
      }
      
      return RequestHandler.success(brand, res);
    } catch (error) {
      return RequestHandler.error('Error on search brand', error.toString(), res);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new BrandRepository('brands');
      const { id } = req.params;
      const brand: BrandInterface = req.body;
      const result = await repository.update({ _id: new ObjectId(id) }, brand);
      
      if (result.matchedCount === 0) {
        return RequestHandler.badRequest({ message: 'Brand not found' }, res);
      }
      
      return RequestHandler.success({ message: 'Brand updated successfully' }, res);
    } catch (error) {
      return RequestHandler.error('Error on update brand', error.toString(), res);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new BrandRepository('brands');
      const { id } = req.params;
      const result = await repository.delete({ _id: new ObjectId(id) });
      
      if (result.deletedCount === 0) {
        return RequestHandler.badRequest({ message: 'Brand not found' }, res);
      }
      
      return RequestHandler.success({ message: 'Brand deleted successfully' }, res);
    } catch (error) {
      return RequestHandler.error('Error on delete brand', error.toString(), res);
    }
  }
}

export default new BrandController();
