import { ORDER_BY } from "../operators.list";
import { mockValidatorDecorator } from "../utils";

const IsNotEmpty = mockValidatorDecorator("IsNotEmpty");
const IsString = mockValidatorDecorator("IsString");
const IsIn = mockValidatorDecorator("IsIn");

export class SortParamDto {
    @IsNotEmpty()
    @IsString()
    public field: string;

    @IsNotEmpty()
    @IsString()
    @IsIn(ORDER_BY)
    public order: string;
}
