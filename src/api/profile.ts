import { IUserInfo } from './contracts';
import mockUsers from './mock/users';

export function getUserProfile(id: number) {
    return new Promise<IUserInfo>((resolve, reject) => {
        const users = mockUsers.filter(u => u.id === id);
        if (users.length === 1) {
            let ret: IUserInfo = {
                id: id,
                name: `${users[0].FirstName} ${users[0].LastName}`
            };
            setTimeout(() => resolve(ret), 1500 /* Simulate some delay */);
        } else {
            reject(`No such user with id of: ${id}`);
        }
    });
}