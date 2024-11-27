import { ReactNode, useLayoutEffect } from "react";
import Button from '../components/general/Button';
import { useNavigation, useRoute } from "@react-navigation/native";

 interface CustomHeaderOptions {
  headerLeftFunc?: () => ReactNode;
  headerRightFunc?: () => ReactNode;
    onBackPress?: () => void;
  }


 const useHeader = ({
  headerLeftFunc,
  headerRightFunc,
  onBackPress
 }:CustomHeaderOptions={})=>{


  const navigation = useNavigation();
  const route = useRoute();

      useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTitle: route.params?.item?.title || '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTransparent: true,
          headerBackTitle:'',
          headerStyle: {
          },
          headerLeftContainerStyle: {
           paddingLeft: 10
          },
          headerRightContainerStyle: {
           paddingRight: 10
          },
         headerLeft: () => headerLeftFunc?.() || (
           <Button
             type="default"
             onPress={() => onBackPress || navigation.goBack()}
             icon='arrow-left'
             style={{ width: 50, height: 50 }} 
             title={""} 
             iconSize={50}
             />
         ),
         headerRight: () => headerRightFunc?.()||null
        }
  
        )
      },[navigation , headerLeftFunc,
        headerRightFunc,
        onBackPress ])
  }

  
  export default useHeader;