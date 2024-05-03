import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   allSeeMural:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
   },
   inforLogo:{
    flexDirection: "row",
    position: "absolute",
    top: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
},
imgArrow:{
    width: 40,
    height: 30,
    transform: [{ scaleX: -1 }],
    marginLeft: 20,
},
imgMural:{
    width: 45,
    height: 40,
    marginRight: 20,
},
SeeMural:{
    width:"100%",
},
SeeMuralGroup:{
    
},
TextGroupMural:{
    fontSize: 22,
    fontWeight: "500",
    textAlign:"center",
},
TextGroupMuralCod:{
    fontSize: 18,
    fontWeight: "400",
    textAlign:"center",
    marginBottom: 40,
},
SeeMuralInfor:{
    width:"100%",
    borderTopColor: "#rgba(0, 0, 0, 0.2)",
    borderTopWidth: 1,
}
   
})

export default styles