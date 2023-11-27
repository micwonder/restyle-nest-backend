/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
import {IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddVideoTaggingDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  tagged: string;


}