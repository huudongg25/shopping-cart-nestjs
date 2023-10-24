import { Controller, Get } from "@nestjs/common";


@Controller('api/v1/users')
export class UsersController {
    constructor() {
    }
    @Get()
    getAllUser() {
        return "haha"
    }
}