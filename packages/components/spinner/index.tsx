import { Spinner } from "../ui/spinner"
import { Text } from "../ui/text"

export const SpinnerStyled = () => {
    return <Spinner size="small"/>
}

export const SpinningText = ({ label = `Error while loading data`}) => {
    return <Text bold >{label}</Text>
}