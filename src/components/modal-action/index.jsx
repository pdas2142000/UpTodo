import { View, Text, Modal, TouchableOpacity, Pressable, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { ModalStyles as styles } from './style'
import CrossIcon from '../../../assets/svgs/cross.svg'
import { IconProps } from '../../utils/helpers/Iconprops'
import { ms } from '../../utils/helpers/metrics'
import { Color } from '../../utils/constant'
import { useTodoTask } from '../../utils/context/TodoProvider'
import Toast from 'react-native-toast-message'

const ModalAction = ({ modalVisible, setModalVisible }) => {
    const [taskText, setTaskText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { addTask } = useTodoTask();

    const handleSubmit = async () => {
        if (taskText.trim() === '') {
            setError('Task cannot be empty');
            return;
        }

        setLoading(true);
        setError('');

        setTimeout(async () => {
            try {
                await addTask(taskText.trim());
                setTaskText('');
                setModalVisible(false);
            } catch (err) {
                console.log('Error submitting task:', err);
            } finally {
                setLoading(false);
                Toast.show({
                    type: 'success',
                    text1: 'Task Created',
                    text2: 'Your new task was added successfully!',
                    position: 'top',
                    visibilityTime: 3000,
                });
            }
        }, 1500);
    };

    const handleClose = () => {
        setTaskText('');
        setError('');
        setModalVisible(false);
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <Pressable style={styles.ut_close_button} onPress={handleClose}>
                    <CrossIcon {...IconProps(ms(25))} fill={Color.ut_white} />
                </Pressable>
                <View style={styles.modalContent}>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Enter your task..."
                        placeholderTextColor="#888"
                        multiline={true}
                        numberOfLines={4}
                        value={taskText}
                        onChangeText={(text) => {
                            setTaskText(text);
                            if (error) setError("");
                        }}
                        editable={!loading}
                        textAlignVertical="top"
                    />

                    {error ? (
                        <Text style={styles.ut_error}>{error}</Text>
                    ) : null}

                    <TouchableOpacity style={[styles.submitButton, loading && { opacity: 0.7 }]}
                        onPress={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator size={ms(20)} color={Color.ut_white} />
                        ) : (
                            <Text style={styles.submitButtonText}>Submit</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAction