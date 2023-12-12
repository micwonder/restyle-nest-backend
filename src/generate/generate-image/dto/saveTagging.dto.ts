/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString } from 'class-validator';

export class SaveTaggingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  origin: string;

}