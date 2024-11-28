import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/general/Screen';
import AppText from '../components/general/AppText';
import Form from '../components/form/Form';
import * as Yup from 'yup';
import FormInput from '../components/form/FormInput';
import FormDropdown from '../components/form/FormDropdown';
import customStyle from '../config/styles';
import SubmitButton from '../components/form/SubmitButton';
export default function ComplaintScreen() {

  const initialValues = {
    category: null,
    title:'',
    message:''
  }

  const ValidationSchema= Yup.object().shape({
    category: Yup.object().nullable().required('Category is required'),
    title: Yup.string().required('Title is required'),
    message: Yup.string().required('Message is required'),
  })


  const categoryOptions=[
    {
      id:1 , 
      title:'Issue'
    },
    {
      id:2 , 
      title:'Complaient'
    },
    {
      id:3 , 
      title:'Suggetion'
    },
  ]
  const handelSubmit= (form:any)=>{
    
  }

  return (
    <Screen style={{paddingHorizontal: customStyle.cardPadding.paddingHorizontal}}>
      <AppText style={{marginTop: 50 , marginBottom:30 , color: customStyle.color.primary , fontSize:20 , fontWeight:'bold'}}> Write Your Compalient </AppText>
      <Form 
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handelSubmit}>
           <FormDropdown name='category' placeholder='Category' options={categoryOptions}/>
          <FormInput name='title' placeholder='Title' icon='message' />
          <FormInput name='message' placeholder='Enter Your Message' numberOfLines={8} icon='text'/>
          <SubmitButton title='Submit'  type="primary"/>

      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});
