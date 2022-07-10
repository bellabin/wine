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
    findById(@Param('id') id: string) {
        return this.reviewService.findById(id)
    }

    @Post() //create new review
    create(@Body() payload: CreateReviewDto) {
        return this.reviewService.create(payload)
    }

    @Put(':id') //update rv
    update(@Param('id') id: string, @Body() body: UpdateReviewDto) {
        return this.reviewService.update(id, body)
    }

    @Delete(':id') //remove rv
    delete(@Param('id') id: string) {
        return this.reviewService.delete(id)
    }
}
