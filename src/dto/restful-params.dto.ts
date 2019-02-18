import { mockTransformerDecorator, mockValidatorDecorator } from "../utils";
import { FilterParamDto } from "./filter-param.dto";
import { JoinParamDto } from "./join-param.dto";
import { SortParamDto } from "./sort-param.dto";

const IsOptional = mockValidatorDecorator("IsOptional");
const IsString = mockValidatorDecorator("IsString");
const IsNumber = mockValidatorDecorator("IsNumber");
const ValidateNested = mockValidatorDecorator("ValidateNested");
const Type = mockTransformerDecorator("Type");

export class RestfulParamsDto {
    @IsOptional()
    @IsString({ each: true })
    public fields?: string[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => FilterParamDto)
    public filter?: FilterParamDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => FilterParamDto)
    public or?: FilterParamDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => JoinParamDto)
    public join?: JoinParamDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => SortParamDto)
    public sort?: SortParamDto[];

    @IsOptional()
    @IsNumber()
    public limit?: number;

    @IsOptional()
    @IsNumber()
    public offset?: number;

    @IsOptional()
    @IsNumber()
    public page?: number;

    @IsOptional()
    @IsNumber()
    public cache?: number;
}
