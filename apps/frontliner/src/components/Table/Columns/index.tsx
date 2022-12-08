import { formatDateSeparator } from 'helpers'

interface IColumns {
  onRedirectDetail: (orderID: string) => void
}

const columns = ({ onRedirectDetail }: IColumns) => {
  return [
    {
      key: 'order_id',
      title: 'Order ID',
      width: '130px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.attributes?.order_id || record?.order_id || '-'
      },
    },
    {
      key: 'action',
      title: 'Action',
      width: '104px',
      bodyElement: (record: any) => {
        return (
          <span
            className="font-bold text-main-primary text-xs cursor-pointer"
            onClick={() => {
              onRedirectDetail(record?.id)
            }}
          >
            Lihat Detail
          </span>
        )
      },
    },
    {
      key: 'status_detail',
      title: 'Status',
      width: '150px',
      bodyElement: (record: any) => {
        return (
          <span
            className="p-0.5 px-2 text-xs rounded"
            style={{
              color: record?.status_detail?.text_color,
              background: record?.status_detail?.bg_color,
            }}
          >
            {record?.status_detail?.label || '-'}
          </span>
        )
      },
    },
    {
      key: 'patient_name',
      title: 'Nama Pasien',
      width: '160px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.attributes?.patient_name || record?.patient?.full_name || '-'
      },
    },
    {
      key: 'specialization_name',
      title: 'Spesialis',
      width: '160px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.attributes?.specialization_name || '-'
      },
    },
    {
      key: 'hospital_name',
      title: 'RS Cabang',
      width: '140px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.attributes?.hospital_name || '-'
      },
    },
    {
      key: 'submission_date',
      title: 'Tgl Pengajuan',
      width: '140px',
      sorter: true,
      bodyElement: (record: any) => {
        if (!record?.attributes?.schedule_date) return '-'
        const date = formatDateSeparator({ param: record?.attributes?.schedule_date, separator: '/' })
        return date
      },
    },
    {
      key: 'created_at',
      title: 'Nama Rekanan',
      width: '164px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.partner?.name || '-'
      },
    },
    {
      key: 'insurance_no',
      title: 'No. Polis',
      width: '140px',
      sorter: true,
      bodyElement: (record: any) => {
        return record?.insurance_no || '-'
      },
    },
  ]
}

export default columns
