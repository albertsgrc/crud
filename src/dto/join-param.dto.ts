import { mockValidatorDecorator } from "../utils";

const IsNotEmpty = mockValidatorDecorator("IsNotEmpty");
const IsString = mockValidatorDecorator("IsString");
const IsOptional = mockValidatorDecorator("IsOptional");

export class JoinParamDto {
    @IsNotEmpty()
    @IsString()
    public field: string;

    @IsOptional()
    @IsString({ each: true })
    public select?: string[];
}
