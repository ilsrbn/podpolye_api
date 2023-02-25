import { Injectable } from '@nestjs/common';
// import { v4 } from 'uuid';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { Express } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Attachment } from './entities/attachment.entity';
import { Repository } from 'typeorm';
import { PostService } from '../post/post.service';
import * as dotenv from 'dotenv';
import { unlink } from 'node:fs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as sharp from 'sharp';

dotenv.config();

@Injectable()
export class AttachmentService {
  constructor(
    private readonly postService: PostService,
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
  ) {}
  // async create(filesArray: Array<Express.Multer.File>, postId: number) {
  //   const post = await this.postService.findOne(postId);
  //   for (const file of filesArray) {
  //     const name = v4();
  //     file.filename;
  //   }
  // }

  async create(filesArray: Array<Express.Multer.File>, postId: number) {
    const post = await this.postService.findOne(postId);
    const domainUrl = process.env.API_DOMAIN || 'localhost:3000';
    for (const oldFile of filesArray) {
      const filePath = oldFile.path.split('.')[0] + '.webp';
      const fileUrl = domainUrl + '/' + filePath;

      await sharp(oldFile.path)
        .webp({ quality: 60 })
        .rotate()
        .toFile('./public/' + oldFile.filename.split('.')[0] + '.webp');

      unlink(oldFile.path, (err) => {
        if (err) console.log({ err });
      });
      const attachment = this.attachmentRepository.create({
        post,
        file: filePath,
        file_url: fileUrl,
      });
      await this.attachmentRepository.save(attachment);
    }
  }

  findAll() {
    return `This action returns all attachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachment`;
  }

  update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  async remove(id: number) {
    const file = await this.attachmentRepository.findOneOrFail({
      where: { id },
    });
    unlink(file.file, (err) => {
      if (err) throw err;
      console.log(`${file.file} was deleted`);
    });
    return await this.attachmentRepository.delete({ id });
  }
}
