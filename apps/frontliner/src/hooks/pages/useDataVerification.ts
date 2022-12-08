/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react'

import { formatCurrentMonth, formatDateSeparator } from 'helpers'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { PartnerService } from 'service'

import useDebounce from '../components/Debounce/useDebounce'

const pageSizeOptions = [20, 30, 40]
let debounce

const useDataVerification = () => {
  const router = useRouter()
  const token = parseCookies().alt_user_token || ''
  const { start_date, end_date } = formatCurrentMonth()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState(0)
  const [pageSize, setPageSize] = useState(pageSizeOptions[0])
  const [isLoading, setIsLoading] = useState(false)
  const [sorting, setSorting] = useState({ key: '', value: '' })
  const [data, setData] = useState<any>([])
  const [filter, setFilter] = useState({
    order_id: '',
    status: '',
    patient_name: '',
    doctor_name: '',
    specialist: '',
    no_polis: '',
    // tanggal konsultasi (attribute: schedule_date)
    consultation_date: {
      start_date,
      end_date,
    },
    // tanggal pengajuan (attribute: create_date)
    submission_date: {
      start_date,
      end_date,
    },
    // tanggal konfirmasi (attribute: confirmation_date)
    confirmation_date: {
      start_date,
      end_date,
    },
  })

  const fetchData = useCallback(async () => {
    const payload = {
      param: currentPage,
      order_id: filter.order_id,
      status: filter.status,
      patient_name: filter.patient_name,
      doctor_name: filter.doctor_name,
      specialization_ids: filter.specialist,
      insurance_no: filter.no_polis,
      // tanggal konsultasi
      schedule_date: {
        start_date: formatDateSeparator({
          param: filter.consultation_date.start_date,
          reverse: true,
          separator: '-',
        }),
        end_date: formatDateSeparator({
          param: filter.consultation_date.end_date,
          reverse: true,
          separator: '-',
        }),
      },
      // tanggal pengajuan
      create_date: {
        start_date: formatDateSeparator({
          param: filter.submission_date.start_date,
          reverse: true,
          separator: '-',
        }),
        end_date: formatDateSeparator({
          param: filter.submission_date.end_date,
          reverse: true,
          separator: '-',
        }),
      },
      // tanggal konfirmasi
      // confirmation_date: {
      //   start_date: filter.confirmation_date.start_date
      //     ? formatDateSeparator({
      //         param: filter.confirmation_date.start_date,
      //         reverse: true,
      //         separator: '-',
      //       })
      //     : '',
      //   end_date: filter.confirmation_date.end_date
      //     ? formatDateSeparator({
      //         param: filter.confirmation_date.end_date,
      //         reverse: true,
      //         separator: '-',
      //       })
      //     : '',
      // },
      sorting: {
        key: sorting.key.toUpperCase(),
        value: sorting.value
      },
    }
    setIsLoading(true)
    await PartnerService.getInsuranceSubmissionList({ token, query: payload })
      .then((res) => {
        setData(res?.data || [])
        setTotalData(res?.meta?.total || 0)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [filter, currentPage, sorting, pageSize])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onChangeSorting = (sortingValue: any) => {
    setSorting(sortingValue)
  }

  const onChangeFilter = (params: any = {}) => {
    const debounceQueries = ['order_id', 'patient_name', 'doctor_name', 'no_polis']
    const keyOfParam = Object.keys(params)[0] || ''
    if (debounceQueries.includes(keyOfParam)) {
      debounce = useDebounce(
        debounce,
        () => {
          setFilter((prev) => ({ ...prev, ...params }))
          setCurrentPage(1)
        },
        500
      )
    } else {
      setFilter((prev) => ({ ...prev, ...params }))
      setCurrentPage(1)
    }
  }

  const onRedirectDetail = (id: string) => {
    router.push({ pathname: `/insurance-submission/detail/${id}` })
  }

  return {
    isLoading,
    data,
    onChangeSorting,
    filter,
    onChangeFilter,
    currentPage,
    setCurrentPage,
    totalData,
    pageSize,
    setPageSize,
    pageSizeOptions,
    onRedirectDetail,
  }
}

export default useDataVerification
