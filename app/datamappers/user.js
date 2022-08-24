//~import module
import  client  from '../db/database.js';
import { CoreDataMapper } from './coreDataMapper.js';

class UserDataMapper extends CoreDataMapper {
  collectionName = 'user';
}

const User = new UserDataMapper(client);
export { User };
