import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined; //current screen
    App: undefined;
}

export interface ILoginProps {
    navigation: NativeStackNavigationProp<RootStackParamList,'Login'>;
 }

 export interface IAppProps{
    navigation: NativeStackNavigationProp<RootStackParamList,'Login'>;
 }