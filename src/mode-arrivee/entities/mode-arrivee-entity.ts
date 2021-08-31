import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mode_arrivee')
export declare class ModeArriveeEntity {
  @PrimaryGeneratedColumn({ name: 'id_mode_arrivee' })
  id: number;

  @Column({ length: 50, name: 'nom_mode_arrivee' })
  nom_mode_arrivee: string;
}
