import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tribu')
export class TribeEntity {
  @PrimaryGeneratedColumn({ name: 'id_tribu' })
  id: number;

  @Column({ length: 50, name: 'nom_tribu' })
  tribe_name: string;
}
