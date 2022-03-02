import { usePagination } from 'react-use-pagination'

interface PaginationProps {
  totalItems: number
}
export default function Pagination(props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    setPage,
    setNextPage,
    setPreviousPage,
  } = usePagination({
    totalItems: props.totalItems,
    initialPage: 1,
    initialPageSize: 16,
  })
  return (
    <div className="w-full mx-auto my-4 flex gap-3 justify-center items-center">
      <button className="btn-primary">Previous</button>
      <span className='text-gray-500 text-sm'>
        Current Page: {currentPage} of {totalPages}
      </span>
      <button className="btn-primary">Next</button>
    </div>
  )
}
