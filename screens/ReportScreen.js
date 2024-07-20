import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

import { ReportSubmitButton, ReportImageButton } from '../buttons';

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
    },
    header: {
        height: 60,
        padding: 10
    },
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    subject_input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
    },
    content_input: {
        height: 200,
        margin: 12,
        borderWidth: 2,
    }
})

const ReportScreen = () => {
    const [subject, setSubject] = React.useState(null);
    const [content, setContent] = React.useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>問題回報</Text>
            </View>
            <TextInput
                style={styles.subject_input}
                placeholder="主旨"
                onChangeText={setSubject}
                value={subject}
            />
            <TextInput
                style={styles.content_input}
                placeholder="內容"
                onChangeText={setContent}
                value={content}
                multiline
            />
            <ReportImageButton />
            <ReportSubmitButton Subject={subject} Content={content} />
        </View>
    )
}

export default ReportScreen;
