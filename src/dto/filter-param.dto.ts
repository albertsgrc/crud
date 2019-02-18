import { COMPARISON_OPERATORS, ComparisonOperator } from "../operators.list";
import { mockValidatorDecorator } from "../utils";

const IsString = mockValidatorDecorator("IsString");
const IsNotEmpty = mockValidatorDecorator("IsNotEmpty");
const IsIn = mockValidatorDecorator("IsIn");
const IsOptional = mockValidatorDecorator("IsOptional");

export class FilterParamDto {
    @IsNotEmpty()
    @IsString()
    public field: string;

    @IsNotEmpty()
    @IsIn(COMPARISON_OPERATORS)
    public operator: ComparisonOperator;

    @IsOptional()
    public value?: any;
}
