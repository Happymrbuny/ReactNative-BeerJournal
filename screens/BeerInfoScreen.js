import { useSelector, useDispatch } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RenderBeer from '../features/beers/RenderBeer';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const BeerInfoScreen = ({ route }) => {
    const { beer } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>

            </View>
        );
    };

    return (
        <FlatList
            data={comments.commentsArray.filter(
                (comment) => comment.beerId === beer.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ marginHOrizontal: 20, paddingVertical: 20 }}
            ListHeaderComponent={
                <>
                    <RenderBeer
                        beer={beer}
                        isFavorite={favorites.includes(beer.id)}
                        markFavorite={() => dispatch(toggleFavorite(beer.id))}
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '$43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    }
});

export default BeerInfoScreen;