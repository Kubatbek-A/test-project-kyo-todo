import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokensDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly fingerprint: string;
}
