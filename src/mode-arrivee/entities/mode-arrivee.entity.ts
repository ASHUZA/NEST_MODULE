import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mode_arrivee')
export class ArrivalModeEntity {
  @PrimaryGeneratedColumn({ name: 'id_mode_arrivee' })
  id: number;
  @Column({ length: 50, name: 'nom_mode_arrivee' })
  mode_arrivee_name: string;
}
