import { ScrollView } from "react-native";
import { Card, Text } from 'react-native-elements';


const AboutScreen = () => {
    return (
        <ScrollView>
            <Card>
                <Card.Title>What drives us to drink</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 10 }}>
                    I'll give you 6 good reasons to have a beer, and then I'll give you one good reason not to.
                </Text>
            </Card>
        </ScrollView>
    )
};

export default AboutScreen;