import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('uuid')
  responsible_id: string;

  @Column()
  concluded: boolean;
}

export default Task;
