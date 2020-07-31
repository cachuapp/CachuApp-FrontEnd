import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#36b395',
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
      height: '15%',
      marginBottom: 15,
      color: '#242940',
      fontSize: 15,
      borderRadius: 7,
      // padding: 12,
      // borderWidth: 2,
      borderColor: '#36b395',
      backgroundColor: '#FFF',    
    },
    btnSubmit: {
      backgroundColor: '#36b395',//'#00c4cc','#242940',
      width: '40%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#FFF',
      borderRadius: 7,
      padding: 20,
      marginTop: 5,
    },
    btnSubmitText: {
      color: '#FFF',
      fontSize: 18,
      //fontWeight: 'bold'
    },
    btnRegister: {
      padding: 5,
    },
    btnRegisterText: {
      color: '#FFF',
      padding: 10,
      fontWeight: 'bold',
    },
    loginByAnotherWayContainer: {
      width: '80%',
      height: '13%',
      flexDirection: 'row',
      // backgroundColor: '#000',
      justifyContent: 'space-between',
    },
    btnLoginByFacebook: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#3b5998',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // borderRadius: 10,
      // padding: 12,
      // width: '100%'
    },
    btnLoginByFacebookText: {
      fontSize: 10,
      color: '#FFF',
      marginRight: 5,
    },
    btnLoginByGoogle: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      // padding: 12,
      // borderWidth: 1,
      // borderColor: '#cccccc',
      // borderRadius: 10
      // width: '100%'
    },
    btnLoginByGoogleText: {
      fontSize: 10,
      color: '#000',
      marginRight: 5,
    },

  });