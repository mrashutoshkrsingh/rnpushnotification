import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class FlatListRow extends Component {
    
    render() {
        const textColor=!this.props.finishTime?'black':'rgba(0,0,0,0.5)'
        return (
            <View style={{
                flexDirection:'row',
                borderBottomColor:'black',
                borderBottomWidth:StyleSheet.hairlineWidth,
                paddingHorizontal:15,
                paddingVertical:15,
                // backgroundColor:'pink',
            }}>
                <Text style={{
                    flex:1,
                    // marginLeft:3
                    color:textColor
                }}>{this.props.id+"."}</Text>
                <View style={{
                    flex:6,
                }}>
                <Text style={{
                    color:textColor,
                    // backgroundColor:'blue',
                    //  maxWidth:"90%"
                    marginRight:5
                }}>{this.props.title}</Text>
                </View>
                
                <View style={{
                    flex:1.7,
                    // backgroundColor:'green',
                    justifyContent:"center",
                    // alignItems:'flex-end'
                }}>
                
                {this.props.finishTime?<View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        // backgroundColor:'red',
                        alignItems:'center'
                    }}
                    >
                    <Text style={{
                        color:textColor,
                        fontSize:8
                    }}>{this.props.finishTime}</Text>
                    <Icon name="check" size={13}  color='#4dffa6' style={{
                        marginRight:10
                      }}/>
                    </View>:<View style={{
                        alignItems:'flex-end'
                    }}><Icon name="video" size={13}  color='red' style={{
                        marginRight:10
                      }}/></View>}
               
                </View>
                
            </View>
        )
    }
}
