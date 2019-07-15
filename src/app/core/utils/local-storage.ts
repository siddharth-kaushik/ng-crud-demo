import { User } from '@models/user.model';

const userToken = 'mcdan:user';

function getUserFromStorage(): User | null {
  const value = localStorage.getItem(userToken);
  if (!value) {
    return null;
  }
  return JSON.parse(value) as User;
}

function saveUserToStorage(user: User): void {
  localStorage.setItem(userToken, JSON.stringify(user));
}

function removeUserFromStorage(): void {
  localStorage.removeItem(userToken);
}

export { getUserFromStorage, saveUserToStorage, removeUserFromStorage };
