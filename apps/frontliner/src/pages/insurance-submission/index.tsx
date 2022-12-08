import { ReactElement } from 'react'

import { ViewColumnIcon } from 'icon/material-icon'
import { TablePagination, TableView } from 'ui'

import EmptyState from '@/components/EmptyState'
import Filter from '@/components/Filter'
import LoadingState from '@/components/LoadingState'
import columns from '@/components/Table/Columns'
import useDataVerification from '@/hooks/pages/useDataVerification'
import DashboardLayout from '@/layouts/DashboardLayout'

const InsuranceSubmission = () => {
  const {
    isLoading,
    data,
    filter,
    onChangeFilter,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalData,
    pageSizeOptions,
    onRedirectDetail,
    onChangeSorting,
  } = useDataVerification()

  return (
    <div className="flex flex-col gap-y-4 flex-1 h-fit">
      {/* filter component */}
      <div style={{ maxWidth: '990px' }}>
        <Filter filter={filter} onChangeFilter={onChangeFilter} />
      </div>
      {/* cta component */}
      <div className="flex justify-end items-center">
        <button className="min-w-[142px] text-main-primary h-10 flex justify-center gap-x-3 items-center">
          <ViewColumnIcon fontSize="medium" />
          <span className="font-bold">Table View</span>
        </button>
        <button className="btn-primary min-w-[142px]">Export</button>
      </div>
      {/* table component */}
      <div className="flex flex-col gap-y-1">
        <TableView
          dataSource={data}
          columns={columns({ onRedirectDetail })}
          emptyComponent={<EmptyState title="Tidak ada data" />}
          loadingComponent={<LoadingState />}
          isLoading={isLoading}
          onChange={(sorting: any) => {
            onChangeSorting(sorting)
          }}
        />
        <TablePagination
          totalData={totalData}
          currentPage={currentPage}
          onChange={(page: number) => setCurrentPage(page)}
          pageSize={pageSize || 5}
          setPageSize={setPageSize}
          pageSizeOptions={pageSizeOptions}
        />
      </div>
    </div>
  )
}

InsuranceSubmission.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default InsuranceSubmission
