import { Loading } from 'element-ui';
import moment from 'moment';

export function isEmail(email: string): boolean {

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);

}

export function toDateString(date: Date): string {

    return moment(date).format('yyyy-MM-DD HH:mm:ss');

}

export function toMillisecondsTimeString(ms: number): string {

    return moment.utc(ms).format('mm:ss');

}

export function showLoading(isLoading: boolean) {

    const loading = Loading.service({
        lock: true,
        text: '쇼핑은 에이블리',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0)',
    });

    if (!isLoading) {
        loading.close();
    }

}
