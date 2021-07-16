//LazyLoading Cards for placeholder when fetching data
import React from 'react'
import SkeletonContent from 'react-native-skeleton-content';

export default function LazyLoading() {
    return (
        <SkeletonContent
                containerStyle={{ flex: 1, width: "90%",marginLeft:vw(10),flexDirection:"row" }}
                boneColor="#EFEEEE"
                highlightColor="#E5E5E5"
                isLoading={true}
                layout={[
                { key: '1', width: 170, height: 220, marginBottom: 6,marginRight:25,marginTop:45,borderRadius:30 },   
                { key: '2', width: 170, height: 220, marginBottom: 6,marginRight:25,marginTop:45,borderRadius:30},  
                { key: '3', width: 1700, height: 220, marginBottom: 6,marginRight:25,marginTop:45,borderRadius:30 },  
                ]}>
        </SkeletonContent>
    )
}
