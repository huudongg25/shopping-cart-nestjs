import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    fullName: String;

    @Column()
    userName: String;

    @Column()
    password: String;

    @Column()
    gender: Number;

    @Column()
    birthday: Date;

}