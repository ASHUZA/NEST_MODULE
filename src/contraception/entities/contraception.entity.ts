import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contraception')
export class ContraceptionEntity {
  @PrimaryGeneratedColumn({ name: 'id_contraception' })
  id: number;

  @Column({ length: 100, name: 'nom_contraception' })
  contraception_name: string;

  @Column({ length: 50, name: 'type_contraception' })
  contraception_type: string;
}
