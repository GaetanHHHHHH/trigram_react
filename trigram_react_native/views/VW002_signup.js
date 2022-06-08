//-----------------------------------
// Imports
//-----------------------------------

import FirebaseRequester from "../network/firebase_requester";
import { StyleSheet, Navigation, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Dimensions, SafeAreaView } from 'react-native';
import { useState } from 'react';

//-----------------------------------
// View
//-----------------------------------

const heights = Dimensions.get('window').height;
const widths = Dimensions.get('window').width;
/**
* Is the page that prensent the application.
*/
function VW002_signup ( {navigation} )
{

    // ---------- Constants ----------

    /**
    * Are the getter and the setter for the pseudo.
    */
    let [pseudo, setPseudo] = useState('');

    /**
    * Are the getter and the setter for the mail.
    */
    let [mail, setMail] = useState('');

    /**
    * Are the getter and the setter for the password.
    */
    let [password, setPassword] = useState('');

    // ---------- Methods ----------

    // ---------- View ----------
    return (
    <SafeAreaView style={[sub_style.container]}>
        <Text style={[sub_style.text, {fontWeight : 'bolder'}]}>Trigram</Text>
        <Text style={[sub_style.text]}>Adresse mail</Text>
        <TextInput 
            style={[sub_style.form_input]} 
            placeholder='Adresse mail' 
            //placeholderTextColor={get_current_style().input_inv.color}
            value={mail} 
            onChangeText={text => setMail(text)}
            autoCompleteType='email'
            autoCorrect={false}
            textContentType='emailAddress'
            keyboardType='email-address'/>
        <Text style={[sub_style.text]}>Pseudo</Text>
        <TextInput 
            style={[sub_style.form_input]} 
            placeholder='Pseudo' 
            //placeholderTextColor={get_current_style().input_inv.color}
            value={pseudo} 
            onChangeText={text => setPseudo(text)}
            autoCorrect={false}
            textContentType='text'/>
        <Text style={[sub_style.text]}>Mot de passe</Text>
        <TextInput 
            style={[sub_style.form_input]} 
            placeholder='Mot de passe'
            //placeholderTextColor={get_current_style().input_inv.color}
            value={password} 
            onChangeText={text => setPassword(text)} 
            secureTextEntry
            autoCompleteType='password'
            textContentType='password'/>
        <TouchableOpacity style={[sub_style.button_accept]} >
            <Text style={[sub_style.text, {fontWeight : 'bold'}]}>Valider</Text>
        </TouchableOpacity>
        <View style={{marginLeft : 10, position : 'absolute' , bottom : 10}} >
        <Text>Vous avez déjà un compte ?</Text>
        <TouchableOpacity>
            <Text style = {{textDecoration: 'underline'}}>Retourner à la page de connection</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>

    );
};
 


//-----------------------------------
// Styles
//-----------------------------------

/**
* Is the style to render the view correctly.
*/
const sub_style = StyleSheet.create(
{
    form_input:
    {
        marginBottom : 10,
        width : widths * 0.65,
        height : heights * 0.1,
        textAlign : 'center',
        marginLeft : widths * 0.175,
        borderWidth : 2,
        borderRadius : 10,
    },

    button_accept:
    {
        height : heights * 0.07,
        marginHorizontal : widths * 0.3,
        marginTop : 10,
        borderWidth : 2,
        backgroundColor : '#56E39F',
    },

    textH:
    {
        marginVertical : 15,
        textAlign : 'center',
        fontWeight : 'bolder',

    },

    text:
    {
        marginVertical : 15,
        textAlign : 'center',
    },

    container:
    {
        width: widths,
        height: heights,
    },
});


//-----------------------------------
// Exports
//-----------------------------------

export default VW002_signup