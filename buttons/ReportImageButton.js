import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
    MenuProvider,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        //textAlign: 'center', // menu
    },
    camera: {
        width: 200,
        height: 144,
    },
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 90, // menu
        backgroundColor: "blue",
    }
})

const pick_image = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    console.log(result);

    if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
    }
}

const open_camera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
    }
}

const ReportImageButton = () => {
    return (
        /*
        <MenuProvider style={styles.menu}>
            <View style={{height:200, width:200}}>
                <Menu>
                    <MenuTrigger>
                        <Image
                            style={styles.camera}
                            source={require('../assets/icons/camera.png')}
                        />
                        <Text style={styles.buttonText}>上傳圖片</Text>
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => pick_image} text="Photo Library" />
                        <MenuOption onSelect={() => open_camera} text="Camera"/>
                    </MenuOptions>
                </Menu>
            </View>
        </MenuProvider>
        */
        <TouchableOpacity 
            style={styles.button}
            onPress={open_camera}
        >
            <Image
                style={styles.camera}
                source={require('../assets/icons/camera.png')}
            />
            <Text style={styles.buttonText}>上傳圖片</Text>
        </TouchableOpacity>
    )
}

export default ReportImageButton;