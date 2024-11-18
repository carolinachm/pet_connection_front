import axios from 'axios';

// Configuração da instância Axios
const api = axios.create({
    baseURL: 'http://localhost:/api', // Substitua pela URL da sua API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Função para buscar todos os usuários
export const getUsuarios = async () => {
    try {
        const response = await api.get('/usuario'); // Verifique se o endpoint está correto
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para buscar um usuário pelo ID
export const getUsuarioById = async (id) => {
    try {
        const response = await api.get(`/usuario/${id}`); // Verifique se o endpoint está correto
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para criar um novo usuário
export const createUsuario = async (usuario) => {
    try {
        const response = await api.post('/usuario', usuario); // Verifique se o endpoint está correto
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para atualizar um usuário existente
export const updateUsuario = async (id, usuario) => {
    try {
        const response = await api.put(`/usuario/${id}`, usuario); // Verifique se o endpoint está correto
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para deletar um usuário
export const deleteUsuario = async (id) => {
    try {
        const response = await api.delete(`/usuario/${id}`); // Verifique se o endpoint está correto
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar usuário:', error.response ? error.response.data : error.message);
        throw error;
    }
};
