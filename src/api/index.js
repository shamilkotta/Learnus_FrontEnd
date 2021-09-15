import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

export const signup = (data)=> api.post('/signup', data) // token
export const login = (data)=> api.post('/login', data) // token

export const getCourse = (id)=> api.get(`/course/${id}`) // course
export const getCourses = ()=> api.get('/courses') // courses

export const getCoursesAsAdmin = ()=> api.get('/admin/courses') //courses

export const saveCourse = (data)=> api.put('/admin/save-course', data) //
export const submitCourse = (data)=> api.put('/admin/put-course', data) //

export const deleteCourse = (id)=> api.delete(`/admin/delete-course/${id}`) //

