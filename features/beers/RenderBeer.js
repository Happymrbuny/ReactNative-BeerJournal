import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderBeer = (props) => {
    const { beer } = props;

    if (beer) {
        return (
            <Card containerStyle={StyleSheet.cardContainer}>
                <Card.Image source={{ uri: baseUrl + beer.image }} >
                    <View style={{ flex: 1 }}>
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
                <Icon
                    onPress={() =>
                        props.isMyBeer
                            ? console.log('Already set as a my beer.')
                            : props.markMyBeer()
                    }
                    name={props.isMyBeer ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                />
            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderBeer;