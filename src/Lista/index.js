import React, {useState} from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';

export default function Lista (data) {
    
    const [props, setProps] = useState({feed: data.data.item});

    function mostraLikes(likes) {
      let feed = props.feed;
      if(feed.likers <= 0){
        return;
      }
      return (
        <Text style={styles.likes}>
          {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
        </Text>
      )
    }
    function like() {
      let feed = props.feed;
      if (feed.likeada === true){
        setProps({feed:{
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }})
      }else{
        setProps({feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1      
        }})
      }
    }
    function iconLike (liked){
      return liked ? 
      require('../img/likeada.png') :
      require('../img/like.png')
    }
    return (
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                source={{uri: props.feed.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.feed.nome}</Text> 
            </View>

            <Image
            resizeMode="cover"
            style={styles.fotoPublicacao}
            source={{uri: props.feed.imgPublicacao}}
            />

           <View style={styles.areaBtn}>
            <TouchableOpacity onPress={(e) => like(e)}>
                <Image
                source={iconLike(props.feed.likeada)}
                style={styles.iconelike}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSend}>
                <Image
                source={require('../img/send.png')}
                style={styles.iconelike}
                />
            </TouchableOpacity>
           </View>
            {mostraLikes(props.feed.likers)}
           <View style={styles.viewRodape}>
            <Text style={styles.nomeRodape}>
                {props.feed.nome}
            </Text>
            <Text style={styles.descRodape}>
                {props.feed.descricao}
            </Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
      fontSize: 22,
      textAlign: 'left',
      color: '#000000',
    },
    fotoPerfil:{
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    fotoPublicacao:{
      flex:1,
      height: 400,
      alignItems: 'center'
    },
    viewPerfil:{
      flexDirection: 'row',
      flex:1,
      alignItems: 'center',
      padding: 8,
    },
    areaBtn:{
      flexDirection: 'row',
      padding: 5
    },
    iconelike:{
      width: 33,
      height: 33,
    },
    btnSend:{
      paddingLeft: 5,
    },
    viewRodape:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    descRodape:{
      paddingLeft: 5,
      fontSize: 15,
      color: '#000'
    },
    nomeRodape:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      paddingLeft: 5
    },
    likes: {
      fontWeight: 'bold',
      marginLeft: 5
    }
})