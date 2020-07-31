import React, { useState, useEffect }  from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

import styles from './styles';
import logoImage from '../../assets/logo3-verde.jpg'
import facebookImage from '../../assets/logo_facebook.png';
import googleImage from '../../assets/logo_google.jpg';

import { useNavigation } from '@react-navigation/native';

export default function Login() {

//   Pegando a largura e altura da tela do usuário
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
// Variável 'offset em 80 apenas no eixo y, pois a animação so ocorre no sentido vertical' 
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
// Variável 'opacity' 0, esse valor é atualizado para 1 durante da animação
  const [opacity] = useState(new Animated.Value(0));
// Variável 'logo' guarda o valores inicias das dimensões da logomarca
  const [logo] = useState(new Animated.ValueXY({x: 300, y: 300}));

  useEffect(() => {

// Funções para detectar se o teclado está aberto e decidir o que fazer com isso
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

//
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 25,
      }),
// Animaçao para a alterar a opacidade, que inicia com zero, durante o prazo de 4000ms o valor vai subindo até chegar a 1.
      Animated.timing(opacity, {
        toValue: 1,
        duration: 4000,
      }),
    ]).start();
    
  }, []);
// Quando o teclado estiver ativo, essa função diminui o tamanho da logo
  function keyboardDidShow() {
    
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
      }),
    ]).start();
    
  }
// Quando o teclado estiver inativo, essa função retorna o tamanho original da logo
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 500,
      }),
      Animated.timing(logo.y, {
        toValue: 300,
        duration: 500,
      }),
    ]).start(); 
  }

  const navigation = useNavigation();

  function navigateTo(page) {
    navigation.navigate(page);
  }


  console.disableYellowBox = true
  return (
    <KeyboardAvoidingView style={styles.background} behavior='height'>
      <StatusBar barStyle='dark-content' backgroundColor="#36b395" />
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{ width: logo.x, height: logo.y}}
          source={logoImage}
        />

      </View>

      <Animated.View 
        style={[
          styles.inputContainer,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() => {}}
          keyboardType='email-address'
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
        />

        <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => alert(windowWidth + ' h: ' + windowHeight)}    
        >
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigateTo('Register')}
        >
            <Text style={styles.btnRegisterText}>Criar conta</Text>
        </TouchableOpacity>

        <View style={styles.loginByAnotherWayContainer}>
          <TouchableOpacity 
            style={styles.btnLoginByFacebook}
            onPress={() => {}}  
          >
            <Image source={facebookImage} style={{width: '20%', height: '35%'}}/>
            <Text style={styles.btnLoginByFacebookText}>Entrar com o Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnLoginByGoogle}
            onPress={() => {}}>
            <Image source={googleImage} style={{width: '20%', height: '35%'}}/>
            <Text style={styles.btnLoginByGoogleText}> Entrar com o Google</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>

      
    </KeyboardAvoidingView>
  );
};