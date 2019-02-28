import { CanActivate, NestInterceptor, ValidationPipeOptions } from '@nestjs/common';
import { RestfulService } from '../classes/restful-service.class';
import { RestfulParamsDto } from '../dto/restful-params.dto';
import { ObjectLiteral } from './object-literal.interface';
import { RestfulOptions } from './restful-options.interface';
import { Pagination } from './pagination.interface';

export interface CrudController<S extends RestfulService<T>, T> {
  service: S;
  getManyBase?(params: ObjectLiteral, query: RestfulParamsDto): Promise<Pagination<T>>;
  getOneBase?(id: number | string, params: ObjectLiteral, query: RestfulParamsDto): Promise<T>;
  createOneBase?(params: ObjectLiteral, dto: T): Promise<T>;
  createManyBase?(params: ObjectLiteral, dto: EntitiesBulk<T>): Promise<T[]>;
  updateOneBase?(id: number | string, params: ObjectLiteral, dto: T): Promise<T>;
  deleteOneBase?(id: number | string, params: ObjectLiteral): Promise<void>;
}

export interface EntitiesBulk<T> {
  bulk: T[];
}

export interface CrudOptions {
  options?: RestfulOptions;
  params?: ObjectLiteral | string[];
  validation?: ValidationPipeOptions;
  interceptors?: {
    create?: NestInterceptor[];
  };
  guards?: {
    create?: Array<Function | CanActivate>;
  };
}
