import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('groupe_user')
export class UserGroupEntity {
  @PrimaryGeneratedColumn({ name: 'id_groupe_user' })
  id: number;
  @Column({ length: 50, name: 'nom_groupe_user' })
  user_group_name: string;
}
