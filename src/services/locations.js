import api from './api';

export async function getAll() {
    return await api.get(`/locations`);
}

export async function getAllFromUser(config) {
    return await api.get(`/locations`, config);
}

export async function newLocation(data, config) {
    return await api.post(`/locations`, data, config);
}
