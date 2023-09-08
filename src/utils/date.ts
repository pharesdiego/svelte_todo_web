import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getTimeFromNow = (isoDate: string) => {
	return dayjs(isoDate).fromNow();
};
