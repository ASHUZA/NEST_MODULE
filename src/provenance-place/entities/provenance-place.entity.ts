import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lieu_provenance')
export class ProvenancePlaceEntity {
  @PrimaryGeneratedColumn({ name: 'id_lieu_provenance' })
  id: number;

  @Column({ length: 50, name: 'nom_lieu_provenance' })
  provenance_place_name: string;
}
