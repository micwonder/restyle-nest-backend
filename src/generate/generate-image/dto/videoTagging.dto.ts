/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class VideoTaggingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  url: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

}