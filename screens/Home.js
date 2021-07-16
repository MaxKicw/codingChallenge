//MainHome-Component created after https://www.figma.com/file/zck9bjZO3GWiX2kQ0YLYLw/Max---Code-Challenge

import React,{useRef,useState,useEffect} from 'react'
import { View, Text,SafeAreaView,ScrollView,  Animated, Easing} from 'react-native'
import { vw, vh} from 'react-native-expo-viewport-units';
import { SimpleLineIcons} from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import PagerView from 'react-native-pager-view';
import ProductCard from '../components/Icons/ProductCard';
import Header from '../container/Header';
import ScrollBar from '../container/ScrollBar';
import LazyLoading from '../container/LazyLoading';

export default function Home() {

    //Refs
    const viewPager = useRef();
    const scrollView = useRef();
    const animation = useRef();

    //Viewpager Tabs
    const [isActiveTab, setActiveTab] = useState(0)
    //Loadingstate
    const [isLoading, setLoading] = useState(true)

    //Animated Values
    //For scroller bar
    let leftPadding = useRef(new Animated.Value(0)).current;
    //For cards
    let slideIn = useRef(new Animated.Value(100)).current;
    let fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        //Animated Cards
        animateComponents();
        //Start Animations
        startAnimations();
        //Simulate data fetching
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    function animateComponents(){
        Animated.spring(slideIn, {
            toValue: 0,
            duration: 3000,
            useNativeDriver:true,
            easing: Easing.linear,
        }).start();
        Animated.spring(fadeIn, {
            toValue: 1,
            duration: 2000,
            useNativeDriver:true,
            easing: Easing.linear,
        }).start();
    }

    function startAnimations(){
        setTimeout(() => {
            animation.current.play()
        }, 8000);
    }

    function onPageSelected(e){
        setActiveTab(e.nativeEvent.position)
        scrollView.current.scrollTo({x:e.nativeEvent.position*110})
        animateBar(e.nativeEvent.position)
    }
    
    function setPage(i){
        setActiveTab(i);
        viewPager.current.setPage(i);
        scrollView.current.scrollTo({x:i*110})
        animateBar(i)
    }

    function animateBar(i){
        Animated.spring(leftPadding, {
            toValue: i*110,
            duration: 300,
            useNativeDriver:true,
            easing: Easing.linear,
        }).start();
    }


    return (
        <SafeAreaView style={{backgroundColor:"#E5E5E5",height:vh(100),flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
            <Header/>
            <View style={{width:vw(80),height:vh(10),justifyContent:"space-between",alignItems:"center",flexDirection:"row",marginTop:25}}>
                <Text style={{fontSize:34,fontWeight:"bold",fontFamily:"roundBold"}}>Delicious {"\n"}candy for you</Text>
                <LottieView ref={animation} style={{width: 100,height: 100,position:"absolute",top:0,left:vw(15)}} source={require('../assets/animations/sprinkle.json')}/>
            </View>
            <View style={{width:vw(80),height:vh(10),alignItems:"center",flexDirection:"row",marginTop:25}}>
                <View style={{width:"90%",backgroundColor:"#EFEEEE",height:55,borderRadius:30,flexDirection:"row",alignItems:"center"}}>
                    <SimpleLineIcons name="magnifier" size={20} color="black" style={{marginLeft:25,marginRight:25}}/>
                    <Text style={{fontFamily:"roundRegular",color:"#000000",fontSize:17}}>Search</Text>
                </View>
            </View>
           <ScrollBar scrollView={scrollView} setPage={setPage} isActiveTab={isActiveTab} leftPadding={leftPadding}/>
            <Animated.View style={{width:vw(100),height:vh(50),transform:[{translateY:slideIn}]}}>
            {isLoading?<LazyLoading/>:
                    <PagerView ref={viewPager} style={{height:vh(50),width:vw(100)}} initialPage={isActiveTab} onPageSelected={(e) =>  onPageSelected(e)}>
                        <ScrollView contentInset={{right:25}} horizontal  key="1" style={{width:vw(100),paddingLeft:vw(10),paddingTop:25,flexDirection:"row"}}>
                                <ProductCard title={"Goldbären"} price="1,99€" uri={require("../assets/images/haribo/bear.png")}/>
                                <ProductCard sale={true} title={"Bala-bala"} price="0,99€" uri={require("../assets/images/haribo/balabala.png")}/>
                                <ProductCard title={"Color-Rado"} price="1,99€" uri={require("../assets/images/haribo/colorrado.png")}/>
                        </ScrollView>
                        <ScrollView contentInset={{right:25}}  horizontal  key="2" style={{width:vw(100),paddingLeft:vw(10),paddingTop:25,flexDirection:"row"}}>
                            <ProductCard sale={true} title={"Sour Worms"} price="1,09€" uri={require("../assets/images/trolli/worm.png")}/>
                            <ProductCard title={"Peach Rings"} price="1,29€" uri={require("../assets/images/trolli/peach.png")}/>
                            <ProductCard title={"Apple Rings"} price="1,29€" uri={require("../assets/images/trolli/apple.png")}/>
                        </ScrollView>
                        <ScrollView contentInset={{right:25}}  horizontal  key="3" style={{width:vw(100),paddingLeft:vw(10),paddingTop:25,flexDirection:"row"}}>
                            <ProductCard title={"Hitschies"} price="1,79€" uri={require("../assets/images/hitchler/hitschies.png")}/>
                            <ProductCard title={"Party Mix"} price="1,79€" uri={require("../assets/images/hitchler/partymix.png")}/>
                            <ProductCard title={"Spider Legs"} price="1,79€" uri={require("../assets/images/hitchler/spiderlegs.png")}/>
                        </ScrollView>
                        <ScrollView contentInset={{right:25}}  horizontal  key="4" style={{width:vw(100),paddingLeft:vw(10),paddingTop:25,flexDirection:"row"}}>
                            <ProductCard title={"Sour Nimm 2"} price="1,89€" uri={require("../assets/images/nimmtwo/sour.png")}/>
                            <ProductCard title={"Shackies"} price="1,89€" uri={require("../assets/images/nimmtwo/shakies.png")}/>
                            <ProductCard title={"Apple Rings"} price="1,89€" uri={require("../assets/images/nimmtwo/apple.png")}/>
                        </ScrollView>
                    </PagerView>}
            </Animated.View>
        </SafeAreaView>
    )
}
