import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marital-status')
export class MaritalStatusEntity {
  @PrimaryGeneratedColumn({ name: 'id_statut_matrimonial' })
  id: number;
  @Column({ length: 50, name: 'nom_statut_matrimonial' })
  marital_status_name: string;
}
