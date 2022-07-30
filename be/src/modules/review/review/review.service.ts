import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Review) private reviewRepo: Repository<Review> //inject repo
    ) {}

    findAll() { //function handle get list rv
        return this.reviewRepo.find({
            relations: ['wineline'],
          })
    }

    findById(MADANHGIA: number) {
        return this.reviewRepo.findOne({
            where: { MADANHGIA: MADANHGIA  },
            relations: ['wineline'],
          })
    }

    async create(payload: CreateReviewDto) { //func handle create new rv
        const review = this.reviewRepo.create(payload) //create nhung chua duoc save

        await this.reviewRepo.save(review) //khi save thi data moi duoc luu vao db

        return review
    }

    async update(MADANHGIA: number, body: UpdateReviewDto) {
        const review = await this.findById(MADANHGIA)
        
        if (!review) throw new NotFoundException('review is not exist')

        return this.reviewRepo.update(MADANHGIA, body)
    }

    async delete(MADANHGIA: number) {
        const review = await this.findById(MADANHGIA)

        if (!review) throw new NotFoundException('review is not exist')

        return this.reviewRepo.remove(review)
    }
}
