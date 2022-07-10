import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    findAll(): Promise<import("../entities/review.entity").Review[]>;
    findById(id: string): Promise<import("../entities/review.entity").Review>;
    create(payload: CreateReviewDto): Promise<import("../entities/review.entity").Review>;
    update(id: string, body: UpdateReviewDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("../entities/review.entity").Review>;
}
