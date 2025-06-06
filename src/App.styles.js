import { colors } from "./styles/colors";


export  const gridStyles={
    grid:{
        border: "1px solid black",
        
    },
    typo:{
        color: colors.random,
        textAlign: "center",
    },
    modal:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "70%",
        bgcolor: "white",
    }
}