import { Controller, Inject, Type } from "@nestjs/common";
import { RestfulService } from "./classes";
import { Crud } from "./decorators";

export class CrudModule {
    public static forFeature(
        path: string,
        sservice: Function,
        entity: Function,
        dto?: any,
    ): Type<any> {
        @Crud(entity)
        @Controller(path)
        class CrudGeneratedController {
            constructor(@Inject(sservice) public service: any) {}
        }

        return CrudGeneratedController;
    }
}
