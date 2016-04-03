import { IActivityItem } from './contracts';
import mockActivities from './mock/activity';

export function getActivitiesSince(date: string) {
    return new Promise<IActivityItem[]>((resolve, reject) => {
        const foundActivities = mockActivities
                                    .filter(act => act.location != null && act.date.localeCompare(date) <= 0);

        setTimeout(() => resolve(foundActivities), 1500 /* Simulate some delay */);
    });
}