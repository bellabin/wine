import { Repository } from 'typeorm';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { Review } from '../entities/review.entity';
export declare class ReviewService {
    private reviewRepo;
    constructor(reviewRepo: Repository<Review>);
    findAll(): Promise<Review[]>;
    findById(MADANHGIA: string): Promise<Review>;
    create(payload: CreateReviewDto): Promise<Review>;
    update(MADANHGIA: string, body: UpdateReviewDto): Promise<import("typeorm").UpdateResult>;
    delete(MADANHGIA: string): Promise<Review>;
}
