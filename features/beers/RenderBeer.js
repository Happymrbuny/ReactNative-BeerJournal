import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderBeer = ({ beer }) => {
    if (beer) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={beer.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {beer.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text
                    style={{
                        margin: 20
                    }}
                >
                    {beer.description}
                </Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderBeer;