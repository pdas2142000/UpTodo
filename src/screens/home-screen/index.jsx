import { View, Text, ScrollView, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Homestyles as styles } from './styles'
import PlusIcon from '../../../assets/svgs/plus.svg'
import { IconProps } from '../../utils/helpers/Iconprops';
import { ms } from '../../utils/helpers/metrics';
import { Color } from '../../utils/constant';
import ModalAction from '../../components/modal-action';
import { useTodoTask } from '../../utils/context/TodoProvider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DeleteIcon from '../../../assets/svgs/delete.svg';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../../utils/context/ProfileProvider';

const tabs = ['Pending', 'Complete'];

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState('Pending');
    const [modalVisible, setModalVisible] = useState(false);

    const Navigation = useNavigation();

    const { tasks, toggleTaskStatus, deleteTask } = useTodoTask();
    const { profileImage } = useProfile();

    const filteredTasks = tasks.filter(task =>
        activeTab === 'Pending' ? !task.completed : task.completed
    );

    const handleToggleTab = (tab) => setActiveTab(tab);

    const renderToggleButton = (tab) => (
        <Pressable
            key={tab}
            style={[
                styles.toggle_button,
                activeTab === tab && styles.active_toggle_button,
            ]}
            onPress={() => handleToggleTab(tab)}
        >
            <Text
                style={[
                    styles.toggle_text,
                    activeTab === tab && styles.active_toggle_text,
                ]}
            >
                {tab}
            </Text>
        </Pressable>
    );

    const renderTask = (task) => (
        <View key={task.id} style={styles.ut_task_container}>
            <BouncyCheckbox
                size={23}
                fillColor={Color.ut_primary}
                unfillColor="#FFFFFF"
                isChecked={task.completed}
                disableBuiltInState
                iconStyle={{
                    borderColor: Color.ut_primary,
                    borderWidth: 1.5,
                }}
                textComponent={
                    <Text
                        style={{
                            textDecorationLine: task.completed ? 'line-through' : 'none',
                            fontSize: 18,
                            color: task.completed ? '#00c400' : 'black',
                            fontWeight: '600',
                            marginLeft: ms(10),
                            maxWidth: ms(250),
                        }}
                    >
                        {task.text}
                    </Text>
                }
                onPress={() => toggleTaskStatus(task.id)}
            />
            {task.completed && (
                <Pressable onPress={() => deleteTask(task.id)}>
                    <DeleteIcon {...IconProps(ms(23))} fill={Color.ut_error} />
                </Pressable>
            )}
        </View>
    );

    const renderTaskList = () => {
        if (filteredTasks.length === 0) {
            return (
                <View style={styles.ut_not_found_container}>
                    <View style={styles.ut_no_task_container}>
                        <Image
                            source={require('../../../assets/images/task.png')}
                            style={styles.ut_image}
                        />
                    </View>
                    <Text style={styles.ut_not_found_text}>
                        Looks like you haven’t {activeTab.toLowerCase()} any tasks yet.
                    </Text>
                </View>
            );
        }

        return filteredTasks.map(renderTask);
    };

    return (
        <View style={styles.ut_container}>
            {/* Header */}
            <View style={styles.ut_header}>
                <Text style={styles.ut_header_text}>Home Screen</Text>
                <TouchableOpacity style={styles.ut_user_profile} onPress={() => Navigation.navigate('ProfileScreen')}>
                    <Image
                        source={profileImage ? { uri: profileImage } : require('../../../assets/images/user.png')}
                        style={styles.ut_image}
                    />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.ut_content}>

                {/* Toggle Tabs */}
                <View style={styles.ut_toggle_container}>
                    {tabs.map(renderToggleButton)}
                </View>

                {/* Task List */}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ paddingBottom: ms(20), flex: 1 }}>
                        <View style={styles.ut_task_box}>{renderTaskList()}</View>
                    </View>
                </ScrollView>
            </View>

            {/* Footer Button */}
            <TouchableOpacity
                style={styles.ut_footer}
                onPress={() => setModalVisible(true)}
            >
                <PlusIcon {...IconProps(ms(20))} fill={Color.ut_white} />
            </TouchableOpacity>

            {/* Modal */}
            <ModalAction
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
};

export default HomeScreen;
