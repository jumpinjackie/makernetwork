import { IActivityItem } from './contracts';
import mockActivities from './mock/activity';

function activitySortComparator(a: IActivityItem, b: IActivityItem) {
    let result = a.date.localeCompare(b.date);
    if (result > 0)
        return -1;
    else if (result < 0)
        return 1;
    else
        return 0;
}

export function getActivitiesSince(date: string) {
    return new Promise<IActivityItem[]>((resolve, reject) => {
        const foundActivities = mockActivities
                                    .filter(act => act.date.localeCompare(date) <= 0)
                                    .sort(activitySortComparator);

        setTimeout(() => resolve(foundActivities), 1500 /* Simulate some delay */);
    });
}