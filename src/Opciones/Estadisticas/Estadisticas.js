import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const data = {
  labels: ["2016", "2017", "2018", "2019", "2020"], // optional
  data: [0.11, 0.23, 0.44, 0.69, 0.89],
};

const Estadisticas = (props) => {
  const {datosProgresBar, eventoCargar}=props;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://rogarsol.com/wp-content/uploads/2019/03/estadi%CC%81sticas.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Estadísticas</Text>
                <Text style={styles.subTitle}>Estadísticas del ciclo de producción</Text>
                
              </View>
            </View>
          </View>
          <View style={[styles.center, styles.margin]}>
            <BarChart
              data={{
                labels: [
                  "2016",
                  "2017", 
                  "2018", 
                  "2019", 
                  "2020"], 
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ]
                  }
                ]
              }}
              width={(Dimensions.get("window").width)-30} // from react-native
              height={220}
              yAxisSuffix={" qq"}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#1f8071",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 10
                },

              }}
              style={{
                marginVertical: 0,
                borderRadius: 10
              }}
            />
            <Text style={styles.chartText}>Estadísticas de producción por año.</Text>
          </View>
          <View style={[styles.center, styles.margin]}>
            <LineChart

              data={{
                labels: [
                  "2016",
                  "2017", 
                  "2018", 
                  "2019", 
                  "2020"], 
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ]
                  }
                ]
              }}
              width={(Dimensions.get("window").width)-30} // from react-native
              height={220}
              yAxisSuffix={"qq"}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#22a0a8",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 10
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "3",
                  stroke: "#166c72"
                }
              }}
              bezier
              style={{
                marginVertical: 0,
                borderRadius: 10
              }}
            />
            <Text style={styles.chartText}>Estadísticas deganancias por año.</Text>
          </View>
          <View style={[styles.center, styles.margin]}>
            <ProgressChart
              data={datosProgresBar}
              width={Dimensions.get('window').width - 30}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#38c9ab',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(48, 70, 140, ${opacity})`,
                style: {
                  borderRadius: 1,
                },
              }}
              style={{
                marginVertical: 0,
                borderRadius: 10,
              }}
            />
            <Text style={styles.chartText}>Porcentaje de germinación de semillas por año.</Text>
          </View>
          <View style={[styles.center, styles.margin]}>
            <LineChart
              data={{
                labels: [
                  "Ene",
                  "Feb", 
                  "Mar", 
                  "Abr", 
                  "May", 
                  "Jun", 
                  "Jul", 
                  "Ago", 
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dic"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={(Dimensions.get("window").width)-30} // from react-native
              height={220}
              yAxisSuffix={"qq"}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#e67c38",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 10
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "3",
                  stroke: "#ab5d2b"
                }
              }}
              bezier
              style={{
                marginVertical: 0,
                borderRadius: 10
              }}
            />
            <Text style={styles.chartText}>Estadísticas de producción por año.</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:150,
  },
  headerImage:{
    height:150,
    flex: 1,
    width: null,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  opacity:{
    flex: 1,
    zIndex: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    height: 150,
  },
  title:{
    fontSize:24,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold',
    textAlign: 'center',
  },
  subTitle:{
    textAlign: 'center',
    fontSize:14,
    color: "#ffffff",
    marginTop: 5
  },
  center:{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartText: {
    fontSize: 14,
  },
  margin: {
    marginTop: 15,
    marginBottom: 25
  }
});

export default Estadisticas;