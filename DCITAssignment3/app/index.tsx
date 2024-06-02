import { Text, View, ScrollView, Image, StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Index() {

  return (
    <ScrollView style={mainStyles.container}>
      <View style={mainStyles.title}>
        <View style={mainStyles.titleText}>
          <Text style={{ fontSize: 32, fontWeight: 500 }}>Hello , Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <View style={mainStyles.titleImage}>
          <Image
            style={{ width: 46, height: 45, }}
            source={require('../assets/images/person.png')}
          />
        </View>
      </View>
      <View style={mainStyles.searchContainer}>
        <Icon name="search" size={25} style={mainStyles.searchIcon} />
        <TextInput style={mainStyles.search} placeholder="Search"/>
        <View style={mainStyles.tuneContainer}><Icon name="tune" size={49} style={mainStyles.tuneIcon} /></View>
      </View>
      <Text style={{ top: 130, fontSize: 20, fontWeight: 700 }}>Categories</Text>
      <View style={mainStyles.categoriesContainer}>
        <View style={mainStyles.categoriesLeft}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Exercise</Text>
          <Text style={{ fontSize: 12, fontWeight: 400 }}>12 Tasks</Text>
          <Image
            style={{ width: 151, height: 160, transform: "scale(.7)" }}
            source={require('../assets/images/man-working.png')}
          />
        </View>
        <View style={mainStyles.categoriesLeft}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Study</Text>
          <Text style={{ fontSize: 12, fontWeight: 400 }}>12 Tasks</Text>
          <Image
            style={{ width: 151, height: 132, transform: "scale(.85)" }}
            source={require('../assets/images/woman-working.png')}
          />
        </View>
      </View>
      <Text style={{ top: 170, fontSize: 20, fontWeight: 700 }}>Ongoing Tasks</Text>
      <View style={mainStyles.scrollContainer}>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Mobile App Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Web Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Push Ups</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Mobile App Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Web Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Push Ups</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Mobile App Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Web Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Push Ups</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Mobile App Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Web Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Push Ups</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Mobile App Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Web Development</Text>
        </View>
        <View style={mainStyles.scrollContainers}>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Push Ups</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    paddingHorizontal: 30,
  },
  title: {
    width: 354,
    height: 52,
    top: 52,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    display: "flex",
    width: 170,
    height: 52,
  },
  titleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    height: 49,
    top: 90,
    flexDirection: "row"
  },
  search: {
    backgroundColor: "#FBF9F7",
    height: "100%",
    width: "80%",
    borderRadius: 15,
    paddingLeft: 40,
    fontSize: 16,
    fontWeight: 700
  },
  searchIcon: {
    left: 35,
    marginLeft: -30,
    zIndex: 10,
    top: 12
  },
  tuneContainer: {
    height:"100%", 
    backgroundColor:"#F0522F", 
    right:-30,
    borderRadius: 15
  },
  tuneIcon: {
    color: "white",
    borderRadius: 15
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    height: 192,
    width: "100%",
    top: 140,
  },
  categoriesLeft: {
    display: "flex",
    backgroundColor: "#FBF9F7",
    width: "47%",
    borderRadius: 20,
    padding: 10
  },
  scrollContainer: {
    display: "flex",
    top: 190,
    paddingBottom: 200
  },
  scrollContainers: {
    width: "100%",
    height: 128,
    backgroundColor: "#FBF9F7",
    marginBottom: 20,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#E8D1BA",
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  scrollText: {
    fontWeight: 700,
    fontSize: 16,
  }
})