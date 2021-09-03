import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('religion')
export class ReligionEntity {
  @PrimaryGeneratedColumn({ name: 'id_lieu_provenance' })
  id: number;

  @Column({ length: 50, name: 'nom_lieu_provenance' })
  religion_name: string;
}
