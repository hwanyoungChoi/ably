import moment from 'moment';

export function isEmail(email: string): boolean {

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);

}

export function toDateString(date: Date): string {

    return moment(date).format('yyyy-MM-DD hh:mm:ss');

}

export function toMillisecondsTimeString(ms: number): string {

    return moment.utc(ms).format('mm:ss');

}
