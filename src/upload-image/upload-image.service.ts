import { Injectable } from '@nestjs/common';
import { CreateUploadImageDto } from './dto/create-upload-image.dto';
import { UpdateUploadImageDto } from './dto/update-upload-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUploadVideoDto } from './dto/create-video-image.dto';
@Injectable()
export class UploadImageService {
  constructor(private prisma: PrismaService) {}
  async create(createUploadImageDto: CreateUploadImageDto) {
    return this.prisma.uploadImage.create({ data: createUploadImageDto });
  }

  async addVideo(createUploadVideoDto: CreateUploadVideoDto){
    return await this.prisma.video.create({
      data: createUploadVideoDto,
    })
  }

  findAll() {
    return `This action returns all uploadImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadImage`;
  }

  update(id: number, updateUploadImageDto: UpdateUploadImageDto) {
    return `This action updates a #${id} uploadImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadImage`;
  }
}
