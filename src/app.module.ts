import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './module/user/db/user.entity';
import { UsersModule } from './module/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "projectExample",
    entities: [Users],
    synchronize: true,
  }), UsersModule]
})
export class AppModule { }
