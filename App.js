import React, { Component } from 'react'
import { Text, View, FlatList, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import FlatListRow from './FlatListRow'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
export default class App extends Component {
  render() {

    const data=[
      {
        id:1,
        title:'Introduction Video',
        finishTime:'2:14 PM',
      },
      {
        id:2,
        title:'How did you secured you first internship?',
        finishTime:'2:14 PM',
      },
      {
        id:3,
        title:'Introduction Video',
        finishTime:'2:14 PM',
      },
      {
        id:4,
        title:'Introduction Video',
        finishTime:'2:14 PM',
      },
      {
        id:5,
        title:'How did you prepared your resume to get shortlisted',
        finishTime:'2:14 PM',
      },
      {
        id:6,
        title:'Introduction Video',
        // finishTime:'2:14 PM',
      },
      {
        id:7,
        title:'How did you prepared your resume to get shortlisted',
        // finishTime:'2:14 PM',
      },
      {
        id:8,
        title:'Introduction Video',
        // finishTime:'2:14 PM',
      },
      {
        id:9,
        title:'Introduction Video',
        // finishTime:'2:14 PM',
      },
      {
        id:10,
        title:'How did you secured you first internship?',
        // finishTime:'2:14 PM',
      },
      {
        id:11,
        title:'Introduction Video',
        // finishTime:'2:14 PM',
      }
    ]
    return (
     <View style={{
      //  backgroundColor:'yellow',
       flex:1
     }}>
     <View style={{
      // backgroundColor:'green',
      flexDirection:'row'
    }}>
      <View style={{
        // backgroundColor:'red',
        // justifyContent:'center',
        paddingTop:35,
        alignItems:'center',
        flex:1
      }}>
     <View style={{
      width: 50, 
      height: 50,
      borderColor:'rgba(0,0,0,0.1)',
      borderWidth:1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5
     }}>
     <Image
     style={{width: 30, height: 30, resizeMode:'center'}}
     source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBNzhbjF2YteWJQSypQz4opvBrB-Wot5LTJrVkTN-Gc_ER-F1-'}}
   />
     </View>
      </View>
      <View style={{
        // backgroundColor:'blue',
        paddingTop:20,
        flex:2,
        padding:8
      }}>
        <Text style={{
          fontWeight:'bold'
        }}>Microsoft Corporation</Text>
        <Text>Head of Design- Technology</Text>
        <Text  style={{
          color:'grey'
        }}>208</Text>
        <Text style={{
          marginTop:10,
          color:'rgba(0,0,0,0.8)'
        }}>Sep 2018 - Present 5 mos</Text>
        <View style={{
          flexDirection:'row',
          marginVertical:5,
          alignItems:'center'
        }}>
        <Icon name="map-marker" size={13}  color='rgba(0,0,0,0.5)' style={{
          marginRight:10
        }}/>
        <Text style={{
          color:'rgba(0,0,0,0.6)'
        }}>California, USA</Text>
        </View>
      </View>
    </View>
    <View style={{
      marginVertical:20,
      paddingLeft:20
    }}>
    <Text style={{
      fontWeight:'bold',

    }}>Answered Videos</Text>
    <Text style={{
      color:'red',
      paddingTop:4
    }}>? More Videos are pending before submitting</Text>
    </View>

    <FlatList
    data={data}
    renderItem={({ item }) =><FlatListRow  id={item.id} finishTime={item.finishTime} title={item.title}/>}
    keyExtractor={item => item.id.toString()}
    />
    <View style={{
      paddingHorizontal:20
    }}>
    <TouchableOpacity style={{
      alignItems:'center',
      backgroundColor:'red',
      paddingVertical:10,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:"center"
    }}>
    <FontIcon name="video" size={13}  color='white' style={{
      marginRight:10
    }}/>
    <Text style={{
      color:'white'
    }}>Continue Record</Text>
    </TouchableOpacity>
    </View>
   

     </View>
    )
  }
}
