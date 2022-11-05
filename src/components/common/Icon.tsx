import Icomoon from "react-native-icomoon"
import type { IconMoonProps } from 'react-native-icomoon'
import iconSet from '../../assets/selection.json'

type IconProps = Omit<IconMoonProps, "iconSet">

export default function Icon({ name, ...restProps }: IconProps) {
  return <Icomoon iconSet={iconSet} name={name} {...restProps} />
}
