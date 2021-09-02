import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('etat_mere')
export class MotherConditionEntity {
  @PrimaryGeneratedColumn({ name: 'id_niveau_etude' })
  id: number;

  @Column({ length: 50, name: 'nom_niveau_etude' })
  mother_condition_name: string;
}
