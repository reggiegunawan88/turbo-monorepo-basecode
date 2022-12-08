import { useCallback, useEffect, useState } from 'react'

import { CMSService } from 'service'

const useFilter = () => {
  const [specializationList, setSpecializationList] = useState([])

  const fetch = useCallback(async () => {
    await CMSService.getSpecializationsList()
      .then((res) => {
        setSpecializationList(res?.data || [])
      })
      .catch(() => {
        // console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { specializationList }
}

export default useFilter
