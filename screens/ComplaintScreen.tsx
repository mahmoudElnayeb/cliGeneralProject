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
import useApi from '../hooks/useApi';
import { sentCoplainApi } from '../services/compalin/complianApi.service';
export default function ComplaintScreen() {

  const sendComplaintApi = useApi(sentCoplainApi);

  const initialValues = {
    category: null,
    title:'',
    message:''
  }

  const validationSchema = Yup.object().shape({
    category: Yup.object().required().nonNullable("Please select a category").label("Category"),
    title: Yup.string().required().min(4).label("Title"),
    message: Yup.string().required().min(4).label("Message"),
  })


  const categoryOptions=[
    {
      id:1 , 
      title:'Problem',
      icon:'cog',
      backgroundColor: customStyle.color.light,
      color: customStyle.color.primary,
    },
    {
      id:2 , 
      title:'Question',
      icon: 'alpha-g-box-outline',
      backgroundColor: customStyle.color.light,
      color: customStyle.color.primary,
    },
    {
      id:3 , 
      title:'Suggetion',
      icon: 'bell',
      backgroundColor: customStyle.color.light,
      color: customStyle.color.primary,
    },
  ]
  const handelSubmit = async (form:any)=>{

    const payload={
      category: form.category.title,
      title: form.title,
      message: form.message
    }
    await sendComplaintApi.request(payload);
    // if (!sendComplaintApi.error) {
    //   console.log("Complaint sent successfully", sendComplaintApi.data);
    // }
  }

  return (
    <Screen style={{paddingHorizontal: customStyle.cardPadding.paddingHorizontal}}>
      <AppText style={{marginTop: 50 , marginBottom:30 , color: customStyle.color.primary , fontSize:20 , fontWeight:'bold'}}> Write Your Compalient </AppText>
      <Form 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}>
           <FormDropdown name='category' placeholder='Category' options={categoryOptions}/>
          <FormInput name='title' placeholder='Title' icon='message' />
          <FormInput name='message' placeholder='Enter Your Message' numberOfLines={8} icon='text'/>
          <SubmitButton title='Submit'  type="primary" loading={sendComplaintApi.loading}/>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});
