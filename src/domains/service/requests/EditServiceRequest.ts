import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ServiceType } from '../entities/Service';
import { BaseRequest } from '../../../models/BaseRequest';

export class EditServiceRequest extends BaseRequest {
    @ApiModelProperty()
    @IsNotEmpty()
    id: string;

    @ApiModelProperty()
    @IsNotEmpty()
    name: string;

    @ApiModelProperty()
    description: string;

    @ApiModelProperty()
    @IsNotEmpty()
    hourlyRate: number;

    @ApiModelProperty()
    @IsNotEmpty()
    preferredHour: number[];

    @ApiModelProperty()
    @IsNotEmpty()
    type: ServiceType;
}
