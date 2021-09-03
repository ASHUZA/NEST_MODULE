import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visit-day')
export class VisitDayEntity {
  @PrimaryGeneratedColumn({ name: 'id_tribu' })
  id: number;

  @Column({ length: 50, name: 'nom_tribu' })
  visit_day_name: string;
}
