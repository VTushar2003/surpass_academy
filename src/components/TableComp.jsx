import React from 'react'

const TableComp = ({ children, title, extraStyles }) => {
    return (
        <>
            <table className={`h-fit w-full bg-[#f0f0f0] rounded-2xl overflow-hidden ${extraStyles}`}>
                <thead className='bg-[#bebebe] h-12'>
                    <tr className=''>
                        <th className='flex items-center justify-between pl-7 pt-3 font-semibold text-base'>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {children}
                        </td>
                    </tr>
                </tbody>
            </table >
        </>
    )
}

export default TableComp
