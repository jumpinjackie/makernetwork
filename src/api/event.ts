import { IEventDetails } from './contracts';
import mockEvents from './mock/events';

export function getEventDetails(id: number) {
    return new Promise<IEventDetails>((resolve, reject) => {
        const events = mockEvents.filter(e => e.id === id);
        if (events.length === 1) {
            let ret: IEventDetails = {
                id: id,
                name: events[0].name
            };
            setTimeout(() => resolve(ret), 1500 /* Simulate some delay */);
        } else {
            reject(`No such event with id of: ${id}`);
        }
    });
}