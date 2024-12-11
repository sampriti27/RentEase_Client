import { useParams } from "react-router-dom"

const TenantProfile:React.FC = () => {
    const { id } = useParams<{id: string}>();
    console.log(id)
  return (
    <div>This is Tenant Profile : {id}</div>
  )
}

export default TenantProfile