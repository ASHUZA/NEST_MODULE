import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mode_arrivee')
export class ModeArriveeEntity {
  @PrimaryGeneratedColumn({ name: 'id_mode_arrivee' })
  id: number;
  @Column({ length: 100, name: 'nom_mode_arrivee' })
  mode_arrivee_name: string;
}
