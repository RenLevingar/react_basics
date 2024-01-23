import { useState, useReducer } from "react";
import Modal from './Modal'
import {data} from '../../data'

//  Reducer Function
import {reducer} from './reducer'
const defaultState = {
    people: [],
    isModal: false,
    modalContent: "",
}

const index = () => {
  return (
    <div>index</div>
  )
}

export default index