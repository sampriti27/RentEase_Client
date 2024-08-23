import { useParams } from "react-router-dom"

const LandlordProfile:React.FC = () => {
    const { id } = useParams<{id: string}>();
  return (
    <div>This is Landlord Profile : {id}</div>
  )
}

export default LandlordProfile;