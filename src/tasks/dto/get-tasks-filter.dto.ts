import { TaskStatus } from '../task.model';
import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';

export class GetFilterTasksDto {
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  @IsOptional()
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
