import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Ingredient } from "./Ingredient.model";

@Entity()
export class Burger {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(type => Ingredient, ingredient => ingredient.burger)
  ingredients: Promise<Ingredient>[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
