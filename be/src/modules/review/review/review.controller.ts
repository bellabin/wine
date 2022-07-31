import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor(
        private reviewService: ReviewService //import review service
    ) {}

    @Get() //get list rv
    findAll() {
        return this.reviewService.findAll()
    }

    @Get(':id')
    findById(@Param('id') MAKH: string, MADONG: string, NGAYDANHGIA: Date) {
        return this.reviewService.findById(MAKH,MADONG,NGAYDANHGIA)
    }

    @Post() //create new review
    create(@Body() payload: CreateReviewDto) {
        return this.reviewService.create(payload)
    }

    

    @Delete(':id') //remove rv
    delete(@Param('id') MAKH: string, MADONG: string, NGAYDANHGIA: Date) {
        return this.reviewService.delete(MAKH,MADONG,NGAYDANHGIA)
    }
}
