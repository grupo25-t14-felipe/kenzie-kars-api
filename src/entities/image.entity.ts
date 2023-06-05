import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Announcement } from "./annoutcement.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", unique: true })
  link: string;

  @ManyToOne(() => Announcement)
  @JoinColumn()
  announcement: Announcement | null;
}

export { Image };
 