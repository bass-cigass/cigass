import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsDate } from "class-validator";
import { User } from "src/components/users/entities/user.entity";

@Entity('products')
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    ref: string;
  
    @Column()
    libelle: string;
  
    @Column()
    unite: string;

    @Column()
    type: string;
  
    @Column()
    seuil: number;


    @Column()
    quantite: number;

  
    @Column({ default: Date.now(), type:"datetime" })
    @CreateDateColumn()
    created_at?:  Date;
  
    @Column({ default: Date.now(), type:"datetime" })
    @UpdateDateColumn()
    updated_at?:  Date;
   
    @IsDate()
    @Column({ default: Date.now(), type:"datetime" })
    @CreateDateColumn()
    date_entree: Date;

    @IsDate()
    @Column()
    date_exp: Date;
    
    @ManyToOne(() => User, user => user.products)
    user: User;
}

