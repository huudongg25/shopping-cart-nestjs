import { Injectable } from "@nestjs/common";
import { Users } from "./db/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        public userRepository: Repository<Users>
    ) {
        //Service is creating its own dependencies
        //Không nên làm như thế này
    }
}