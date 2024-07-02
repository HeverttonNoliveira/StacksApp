import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Avatar from '../../assets/imgs/Avatar.png'

const videosData = [
  {
    id: 1,
    title: 'Título do Vídeo 1',
    channel: 'Canal 1',
    channelImage: 'https://via.placeholder.com/50', // URL da imagem do canal
    thumbnail: 'https://via.placeholder.com/150',
    videoUrl: 'https://www.youtube.com/watch?v=video_id_1', // URL do vídeo do YouTube
  },
  {
    id: 2,
    title: 'Título do Vídeo 2',
    channel: 'Canal 2',
    channelImage: 'https://via.placeholder.com/50', // URL da imagem do canal
    thumbnail: 'https://via.placeholder.com/150',
    videoUrl: 'https://www.youtube.com/watch?v=video_id_2', // URL do vídeo do YouTube
  },
  // Adicione mais vídeos conforme necessário
];

const VideoList = () => {
  const handleVideoPress = (videoUrl) => {
    Linking.openURL(videoUrl);
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoContainer} onPress={() => handleVideoPress(item.videoUrl)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.videoInfo}>
        <View style={styles.channelContainer}>
          <Image source={{ uri: item.channelImage }} style={styles.channelImage} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.channel}>{item.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex:1}}>

    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    backgroundColor:'#FFFFFF', padding:16}}>
      <View>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Seja Bem-Vindo(a)</Text>
        <Text style={{fontSize:16, fontWeight:'400'}}>Name user</Text>
      </View>
      <Image source={Avatar}/>

    </View>


      <FlatList
        data={videosData}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id.toString()}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  videoContainer: {
    marginBottom: 15,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  videoInfo: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  channelContainer: {
    marginRight: 10,
  },
  channelImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channel: {
    fontSize: 14,
    color: '#555',
  },
});

export default VideoList;
