import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Product } from "src/components/products/entities/product.entity";
import { UserRoles } from "../enums/user.enum";

@Entity({name: 'users'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  mdp: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.ADMIN })
  role: UserRoles;

  @Column({
    unique: true,
  })
  tel: number;

  @Column({ default: Date.now(), type: "datetime" })
  @CreateDateColumn()
  created_at?: Date;

  @Column({ default: Date.now(), type: "datetime" })
  @UpdateDateColumn()
  updated_at?: Date;

  @BeforeInsert()
  async hashPassword() {
    this.mdp = await bcrypt.hash(this.mdp, 8);
  }

  async validatePassword(mdp: string): Promise<boolean> {
    return bcrypt.compare(mdp, this.mdp);
  }
  
 
  
  @OneToMany(() => Product, prod => prod.user)
  products?: Product[];

}
