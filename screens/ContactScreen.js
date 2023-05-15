import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                <Text>100 Beers Avenue</Text>
                <Text>Beer City</Text>
                <Text style={{ marginBottom: 10 }}>Beermerica</Text>
                <Text>123-456-7890</Text>
                <Text>beerme@beer.com</Text>
            </Card>
        </ScrollView>
    )
};

export default ContactScreen;