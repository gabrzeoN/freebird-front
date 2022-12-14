import api from './api';

export async function getById(id) {
    return await api.get(`/locations/${id}`);
}

export async function getAll() {
    return await api.get(`/locations`);
}

export async function getAllFromUser(user) {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    return await api.get(`/locations/user/my-locations`, config);
}

export async function newLocation(data, user) {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    return await api.post(`/locations`, data, config);
}
