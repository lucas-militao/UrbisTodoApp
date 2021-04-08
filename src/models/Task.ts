import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('uuid')
  responsible: string;

  @Column()
  concluded: boolean;
}

export default Task;
