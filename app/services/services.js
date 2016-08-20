import animalsService from './animals/animals';
import usersService from './users/users';

export default app => {
  INCLUDE_ALL_MODULES([usersService, animalsService], app);
}
