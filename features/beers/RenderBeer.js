import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const RenderBeer = (props) => {
    const { beer } = props;
    if (beer) {
        return (
            <Animatable.View
                animation='fadeInDownBig'
                duration={2000}
                delay={1000}
            >
                <Card containerStyle={styles.cardContainer}>
                    <Card.Image source={{ uri: baseUrl + beer.image }} />
                    <Text
                        style={{
                            margin: 20
                        }}
                    >
                        {beer.description}
                    </Text>
                    <View style={styles.cardRow}>
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
                        <Icon
                            name='pencil'
                            type='font-awesome'
                            color='#bfa300'
                            raised
                            reverse
                            onPress={() => { props.onShowModal() }}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default RenderBeer;