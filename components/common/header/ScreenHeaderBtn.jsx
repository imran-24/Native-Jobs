import React from 'react'
// TouchableOpacity is a button
import { TouchableOpacity, Image } from 'react-native'
import { icons } from '../../../constants'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={ styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn