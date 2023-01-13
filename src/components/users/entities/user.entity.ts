import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Product } from "src/components/products/entities/product.entity";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  mdp: string;

  @Column({ default: Date.now(), type: "datetime" })
  @CreateDateColumn()
  created_at?: Date;

  @Column({ default: Date.now(), type: "datetime" })
  @UpdateDateColumn()
  updated_at?: Date;

  @BeforeInsert()
  async setPassword(mdp: string) {
    const salt = await bcrypt.genSalt();
    this.mdp = await bcrypt.hash(mdp || this.mdp, salt);
  }

  @OneToMany(() => Product, prod => prod.user)
  products?: Product[];
}
