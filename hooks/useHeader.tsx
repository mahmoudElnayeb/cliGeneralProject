import { ReactNode, useLayoutEffect } from "react";
import Button from '../components/general/Button';
import { useNavigation, useRoute } from "@react-navigation/native";
import customStyle from '../config/styles'
interface CustomHeaderOptions {
  headerLeftFunc?: () => ReactNode;
  headerRightFunc?: () => ReactNode;
  onBackPress?: () => void;
}

const useHeader = ({
  headerLeftFunc,
  headerRightFunc,
  onBackPress
}: CustomHeaderOptions = {}) => {

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: route.params?.item?.title || '',
      headerTitleAlign: 'center',
      headerShadowVisible: true,
      headerTransparent: true,
      headerBackTitle: '',
      headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
      },
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: '600',
        width:'100%', 
        overflow: 'hidden',
        textAlign: 'center', 

        paddingHorizontal: 30
      },
      headerLeftContainerStyle: {
        paddingLeft: 20,

      },
      headerRightContainerStyle: {
        paddingRight:20,
      },
      titleStyle: {
 
      },
      headerLeft: () => headerLeftFunc?.() || (
        <Button
          type="default"
          onPress={() => onBackPress || navigation.goBack()}
          icon='arrow-left'
          style={{ width: 50, height: 50 , alignItems: 'center', justifyContent: 'center' }}
          title={""}
          iconSize={50}
          
        />
      ),
      headerRight: () => headerRightFunc?.() || null
    })

  }, [navigation, headerLeftFunc,
    headerRightFunc,
    onBackPress])
}

export default useHeader;