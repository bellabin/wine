import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from '../entities/review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
    imports: [TypeOrmModule.forFeature([Review])], //import entity
    controllers: [ReviewController], //import controller
    providers: [ReviewService] //import service
})
export class ReviewModule {}
