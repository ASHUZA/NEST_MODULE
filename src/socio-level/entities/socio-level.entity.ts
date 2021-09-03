import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('niveau_social')
export class SocioLevelEntity {
  @PrimaryGeneratedColumn({ name: 'id_niveau_socio' })
  id: number;

  @Column({ length: 50, name: 'nom_niveau_socio' })
  socio_level_name: string;

  @Column({ length: 50, name: 'revenu' })
  salary: string;
}
