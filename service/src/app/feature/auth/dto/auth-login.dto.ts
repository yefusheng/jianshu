import { ApiModelProperty } from '@nestjs/swagger';

export class AuthLoginDto {

    @ApiModelProperty({
        type: String,
        description: '用户名',
        required: true,
    })
    readonly username: string;

    @ApiModelProperty({
        type: String,
        description: '密码',
        required: true,
    })
    readonly password: string;
}