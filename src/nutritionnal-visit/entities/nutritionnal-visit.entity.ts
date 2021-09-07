import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visite_nutritionnelle')
export class NutritionnalVisitEntity {
  @PrimaryGeneratedColumn({ name: 'id_visite_nutrionnelle' })
  id: number;

  @Column({ name: 'date_visite' })
  visit_date: Date;

  @Column({ name: 'poids_enfant' })
  child_weight: number;

  @Column({ name: 'perimetre_cranien' })
  cranial_perimeter: number;

  @Column({ name: 'perimetre_brachial' })
  brachial_perimeter: number;

  @Column({ name: 'oedemes' })
  edemas: boolean;

  @Column({ length: 255, name: 'traitement_administre' })
  treatment_administered: string;

  @Column({ name: 'ration_seche' })
  dry_ration: boolean;

  @Column({ length: 255, name: 'observations' })
  comments: string;
}
