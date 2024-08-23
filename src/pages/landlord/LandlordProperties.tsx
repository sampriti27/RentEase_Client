import React from 'react'
import CrystalButton from '../../components/shared/buttons/CrystalButton';
import { PlusIcon } from '../../components/icons';

const LandlordProperties:React.FC = () => {
  return (
    <div className="px-4 py-14">
      <CrystalButton text="Add Property" icon={<PlusIcon isFilter={false} />}
        iconPosition="left" isDark={true} page='/profile/landlord/add-property'
      />
    </div>
  )
}

export default LandlordProperties;