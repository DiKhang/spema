import {Text, View} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

const AS = (props: SheetProps) => {
  const {sheetId} = props;
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
};

export default AS;
