import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
      // backgroundColor: '#000',
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
      flex: 1,
      alignItems: 'center',
      // backgroundColor: '#000',
    },
    input: {
      // backgroundColor: 'black',
      width: '90%',
      marginBottom: 15,
      color: '#242940',
      fontSize: 17,
      borderRadius: 7,
      padding: 12,
      borderWidth: 2,
      borderColor: '#36b395'      
    },
    btnSubmit: {
      backgroundColor: '#36b395',//'#00c4cc','#242940',
      width: '40%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      padding: 20,
      marginTop: 5,
    },
    submitText: {
      color: '#FFF',
      fontSize: 18,
      //fontWeight: 'bold'
    },
    btnRegister: {
      marginTop: 10,
    },
    RegisterText: {
      color: '#36b395',
      padding: 10,
      fontWeight: 'bold',
    },
  });