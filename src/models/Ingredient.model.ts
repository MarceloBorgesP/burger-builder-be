import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, ManyToOne } from "typeorm";
import { Burger } from "./Burger.model";

@Entity()
export class Ingredient {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  burgerId: string;

  @ManyToOne(type => Burger, burger => burger.ingredients)
  burger: Burger;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
