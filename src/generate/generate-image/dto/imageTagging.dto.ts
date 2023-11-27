/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class ImageTaggingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  origin: string;

}