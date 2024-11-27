// import {useLayoutEffect, ReactNode} from 'react';
// import {useNavigation, NavigationProp} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {I18nManager} from 'react-native';
// import Button from "../components/general/Button";
// interface CustomHeaderOptions {
//   headerLeft?: () => ReactNode;
//   headerRight?: () => ReactNode;
//   onBackPress?: () => void;
// }
 
// const useFsmHeader = ({
//   headerLeft,
//   headerRight,
//   onBackPress,
// }: CustomHeaderOptions = {}) => {
//   const navigation = useNavigation<NavigationProp<any>>();
 
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerStyle: {
//         backgroundColor: 'white',
//         elevation: 0,
//         shadowOpacity: 0,
//       },
//       headerShadowVisible: false,
//       headerTitle: '',
//       headerLeft: () =>
//         headerLeft?.() || (
//           <Button
//             onPress={onBackPress || (() => navigation.goBack())}
//             icon={
//               <Icon
//                 name={
//                   I18nManager.isRTL
//                     ? 'chevron-forward-outline'
//                     : 'chevron-back-outline'
//                 }
//                 size={25}
//                 color={'black'}
//               />
//             }
//           />
//         ),
//       headerRight: () => headerRight?.() || null,
//     });
//   }, [navigation, headerLeft, headerRight, onBackPress]);
// };
 
// export default useFsmHeader;


