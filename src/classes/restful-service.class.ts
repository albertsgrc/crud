import { BadRequestException, NotFoundException } from '@nestjs/common';

import { RestfulOptions } from '../interfaces';
import { Pagination } from '../interfaces/pagination.interface';

export abstract class RestfulService<T> {
    protected abstract options: RestfulOptions;

    constructor() {
        //
    }

    public abstract getMany(...args: any[]): Promise<Pagination<T>>;
    public abstract getOne(...args: any[]): Promise<T>;
    public abstract createOne(...args: any[]): Promise<T>;
    public abstract createMany(...args: any[]): Promise<T[]>;
    public abstract updateOne(...args: any[]): Promise<T>;
    public abstract deleteOne(...args: any[]): Promise<void>;

    public throwBadRequestException(msg?: any): BadRequestException {
        throw new BadRequestException(msg);
    }

    public throwNotFoundException(name: string): NotFoundException {
        throw new NotFoundException(`${name} not found`);
    }
}
