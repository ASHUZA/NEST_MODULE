import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('religion')
export class ReligionEntity {
  @PrimaryGeneratedColumn({ name: 'id_religion' })
  id: number;

  @Column({ length: 50, name: 'nom_religion' })
  religion_name: string;
}
