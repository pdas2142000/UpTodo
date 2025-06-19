// context/TaskContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const TaskContext = createContext();

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasksFromStorage();
    }, []);

    const loadTasksFromStorage = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('TASKS');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.log('Error loading tasks:', error);
        }
    };

    const saveTasksToStorage = async (newTasks) => {
        try {
            await AsyncStorage.setItem('TASKS', JSON.stringify(newTasks));
        } catch (error) {
            console.log('Error saving tasks:', error);
        }
    };

    const addTask = async (taskText) => {
        const newTask = {
            id: Date.now().toString(),
            text: taskText,
            completed: false,
        };
        const updatedTasks = [newTask, ...tasks];
        setTasks(updatedTasks);
        await saveTasksToStorage(updatedTasks);
    };

    const toggleTaskStatus = async (id) => {
        setTimeout(async () => {
            const updatedTasks = tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            setTasks(updatedTasks);
            await saveTasksToStorage(updatedTasks);
        }, 500); // Delay of 300ms
    };

    const deleteTask = async (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        await saveTasksToStorage(updatedTasks);

        Toast.show({
            type: 'info',
            text1: 'Task Deleted',
            text2: 'The task has been removed successfully.',
            position: 'top',
            visibilityTime: 3000,
        });
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTodoTask = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvideo");
    }

    return context;
}