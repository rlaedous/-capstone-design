import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import React from 'react';
//설차헌 수탹 네비게이션 라이브러리 가져오기
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'




//페아지로 만든 컴포넌트들 불러오기 컴포넌트파일에없긴함
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import CommunityPage from '../pages/CommunityPage';
import ReviewPage from '../pages/ReviewPage';
import TextPage from '../pages/TextPage';
import ResultPage from '../pages/ResultPage';
import SearchPage from '../pages/SearchPage';
import AuthScreen from '../pages/AuthScreen';
import LogInScreen from '../pages/EnrollScreen'
import EnrollScreen from '../pages/LogInScreen';



//이게 국룰이라함 스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체 사용r
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eaf7fe', // k.w.i app 배경색
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height: 50,       //k.w.i의 app의 높낮이
                },
                headerTintColor: "black",
                headerBackTitleVisible: false,
                headerShown: false
            }}
        >

            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣음 이 자체로 이제 페이지 기능*/}
            <Stack.Screen name="AuthScreen" component={AuthScreen}/>
            <Stack.Screen name="LogInScreen" component={LogInScreen}/>
            <Stack.Screen name="EnrollScreen" component={EnrollScreen}/>
            

            <Stack.Screen name="K.W.I의 App" component={TabNavigator} />
            <Stack.Screen name="여행지정보 페이지" component={AboutPage} />

            
            
            <Stack.Screen name="후기커뮤니티 페이지" component={ReviewTab} />
            <Stack.Screen name="후기 페이지" component={ReviewPage} />
            <Stack.Screen name="여행지결과 페이지" component={ResultPage} />

        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}>


            <Tab.Screen name="메인 페이지" component={MainPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-sharp"
                            style={{ color: focused ? "#00B386" : "#404040" }} 
                            // 앞에가 눌린색깔 뒤에가 안눌렸을때
                            size={30} />)
                }}></Tab.Screen>

            <Tab.Screen name="검색" component={SearchPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="search"
                            style={{ color: focused ? "#00B386" : "#404040" }}
                            size={30} />)
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}

const ReviewTab = ()=>{
    return(
        <Tab.Navigator
            screenOptions={{ headerShown: false }}>


            <Tab.Screen name="후기커뮤니티기본 페이지" component={CommunityPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-sharp"
                            style={{ color: focused ? "#00B386" : "#404040" }} 
                            // 앞에가 눌린색깔 뒤에가 안눌렸을때
                            size={30} />)
                }}></Tab.Screen>

            <Tab.Screen name="후기작성 페이지" component={TextPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="search"
                            style={{ color: focused ? "#00B386" : "#404040" }}
                            size={30} />)
                }}></Tab.Screen>
        </Tab.Navigator>

    )
}

export default StackNavigator;

