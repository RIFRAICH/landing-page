import apiClient from './apiClient';

export const registerToNewsletter = async (email) => {
    try {
        const response = await apiClient.post('/public/newsletter/register', { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};