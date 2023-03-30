import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Generated, UpdateDateColumn } from "typeorm";


@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    telephone: string;

    @Column()
    cpf: string;

    @Column()
    address: string;

    @Column()
    @Generated('uuid')
    code: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Client;
