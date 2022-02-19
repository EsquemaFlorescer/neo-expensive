import { User } from '../../../../domain/entities/user';
import { UsersRepository } from '../../UsersRepository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  public async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => (user.props.email = email));

    if (!user) {
      return null;
    }

    return user;
  }
}
