import axios from 'axios';

const API_SERVER_HOST = process.env.VUE_APP_API_SERVER_HOST;

const axiosInstance = axios.create({
    baseURL: API_SERVER_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

const RESET_PASSWORD_URL = '/api/reset-password';

export interface IAuthCodeRequest {
    email: string;
}

export interface IAuthCodeResponse {
    issueToken: string;
    remainMillisecond: number;
}

export async function getAuthCodeAsync(
    params: IAuthCodeRequest,
): Promise<IAuthCodeResponse> {

    const response = await axiosInstance.get(RESET_PASSWORD_URL, { params });
    return response.data;

}

export interface IValidateAuthCodeRequest {
    email: string;
    authCode: string;
    issueToken: string;
}

export interface IValidateAuthCodeResponse {
    confirmToken: string;
}

export async function validateAuthCodeAsync(
    params: IValidateAuthCodeRequest,
): Promise<IValidateAuthCodeResponse> {

    const response = await axiosInstance.post(RESET_PASSWORD_URL, params);
    return response.data;

}

export interface IUpdatePasswordRequest {
    email: string;
    confirmToken: string;
    newPassword: string;
    newPasswordConfirm: string;
}

export interface IUpdatePasswordResponse {
    email: string;
}

export async function updatePasswordAsync(
    params: IUpdatePasswordRequest,
): Promise<IUpdatePasswordResponse> {

    const response = await axiosInstance.patch(RESET_PASSWORD_URL, params);
    return response.data;

}
