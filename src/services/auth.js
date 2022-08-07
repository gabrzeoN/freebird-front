import api from './api';

export async function signUp(data) {
    return await api.post(`/sign-up`, data);
}

export async function signIn(data) {
    return await api.post(`/sign-in`, data);
}